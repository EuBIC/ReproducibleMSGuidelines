function extractAuthorsFromMarkdown(markdown) {
    // find the authors line
    var lines = markdown.split("\n");
    var author_line = null;

    for (var i = 0; i < lines.length; i++) {
        if (lines[i].trim().substr(0, 11) == "## Authors:") {
            author_line = lines[i].substr(11);
            break;
        }
    }

    if (author_line == null) {
        return [];
    }

    // remove the "and" part
    var and_index = author_line.indexOf(" and ");
    var final_author = null;
    if (and_index > -1) {
        final_author = {name: author_line.substr(and_index + 5)};
    }

    var author_strings = author_line.split(",")
    var authors = [];

    author_strings.forEach(function(author_string) {
        var orcid_start = author_string.indexOf("(");
        var orcid_end = author_string.indexOf(")");

        if (orcid_start > -1) {
            authors.push({
                name: author_string.substr(0, orcid_start - 1).trim(),
                orcid: author_string.substr(orcid_start + 1, orcid_end - orcid_start - 1).trim()
            });
        } else {
            authors.push({
                name: author_string.trim(),
                orcid: null
            });
        }
    });

    if (final_author != null) {
        authors.push(final_author);
    }

    return(authors);
}

/**
 * Function to parse the markdown string
 */
function parseMarkdown(markdown) {
    // initialize the array to hold all sections
    var sections = [];

    // process everything line by line
    var lines = markdown.split("\n");

    var current_section = null;
    var current_item = null;
    var last_field = null;
    var in_item = false;
    var in_section = false;

   lines.forEach(function(line) {
        line = line.trim();
        
        // test if the line is a section heading
        if (line.substr(0, 4) == "### ") {
            in_section = true;

            // save the last item
            if (current_section != null && current_item != null) {
                current_section["items"].push(current_item);
                current_item = null;
            }

            // save the last section
            if (current_section != null) {
                sections.push(current_section);
            }

            // initialize the new section
            current_section = {
                name: line.substr(4),
                description: null,
                example: null,
                items: []
            };
        }
        // process the section fields
        else if (line.substr(0, 15).toLowerCase() == "sectionexample:") {
            current_section.example = line.substr(15).trim();
            last_field = "section_example";
        }
        else if (line.substr(0, 19).toLowerCase() == "sectiondescription:") {
            current_section.description = line.substr(19).trim();
            last_field = "section_description";
        }
        // test if a new item starts
        else if (line.substr(0, 5).toLowerCase() == "name:") {
            // save the current item
            if (current_item != null) {
                current_section.items.push(current_item);
            }

            // initialize the new item
            current_item = {
                name: line.substr(5).trim(),
                category: null,
                description: null,
                fields: null,
                example: null
            };

            last_field = "item_name";
        }
        // process the item fields
        else if (line.substr(0, 9).toLowerCase() == "category:") {
            current_item.category = line.substr(9).trim();
        }
        else if (line.substr(0, 12).toLowerCase() == "description:") {
            current_item.description = line.substr(12).trim();
            last_field = "item_description";
        }
        else if (line.substr(0, 7).toLowerCase() == "fields:") {
            current_item.fields = line.substr(7).trim();
            last_field = "item_fields";
        }
        else if (line.substr(0, 8).toLowerCase() == "example:") {
            current_item.example = line.substr(8).trim();
            last_field = "item_example";
        }
        // process multi-line fields
        else if (line.length > 0 && current_item != null) {
            switch(last_field) {
                case "section_description":
                    current_section.description += " " + line;
                    break;
                case "section_example":
                    current_section.example += " " + line;
                    break;
                case "item_name":
                    current_item.name += " " + line;
                    break;
                case "item_description":
                    current_item.description += " " + line;
                    break;
                case "item_fields":
                    // TODO: check if fields ends with ","
                    current_item.fields += "," + line;
                    break;
                case "item_example":
                    current_item.example += " " + line;
                    break;
            }
        }
    });

    // add the last item and section
    if (current_item != null && current_section != null) {
        current_section.items.push(current_item);
    }
    if (current_section != null) {
        sections.push(current_section);
    }

    return(sections);
}

/**
 * Component to render a single item
 */
Vue.component('guidelines-item', {
    props: ["name", "description", "category", "fields", "example"],
    data: function() {
      return {
          "show_description": false,
          "show_example": false
      }  
    },
    computed: {
        field_array: function() {
            return this.fields.split(",").map(value => value.trim());
        }
    },
    template: '\
    <div class="guideline-item">\
        <h2 class="guideline-item-name" v-html="marked(name)"></h2>\
        <div class="guideline-item-scope">\
            <span class="category badge" v-bind:class="[category.toLowerCase()]">{{ category }}</span>\
            <span v-for="field in field_array" class="badge badge-pill badge-info">{{ field }}</span>\
            <button v-if="description" v-on:click="show_description = !show_description"\
                    class="btn btn-sm"\
                    v-bind:class="{\'btn-outline-info\': !show_description, \'btn-info\': show_description}">Description</button>\
            <button v-if="example" v-on:click="show_example = !show_example"\
                    class="btn btn-sm"\
                v-bind:class="{\'btn-outline-info\': !show_example, \'btn-info\': show_example}">Description</button>\
        </div>\
        <div class="guideline-item-description" v-if="description && show_description">\
            <h4>Description</h4>\
            <div v-html="marked(description)"></div>\
        </div>\
        <div class="guideline-item-example" v-if="example && show_example">\
            <h4>Example</h4>\
            <div v-html="marked(example)"></div>\
        </div>\
    </div>'
  })

  Vue.component("guidelines-section", {
      props: ["name", "description", "example", "items"],
      data: function() {
          return {
              show: false
          }
      },
      template: '\
      <div class="guidelines-section">\
        <h1 class="guidelines-section-name" v-bind:class="{\'border-bottom\': show}">{{ name }}\
            <span class="badge badge-pill badge-secondary"> {{ items.length }}</span>\
            <i v-on:click="show = !show" class="far" v-bind:class="{\'fa-plus-square\': !show, \'fa-minus-square\': show}"></i>\
        </h1>\
        <div class="guidelines-section-description" v-if="description">\
            <div class="shadow-sm p-3 mb-5 bg-white rounded">{{ description }}</div>\
        </div>\
        <div class="guidelines-section-example" v-if="example">{{ example }}</div>\
        <div class="guidelines-section-items" v-if="show">\
            <div id="guidelines">\
                <guidelines-item\
                    v-for="item in items" \
                    v-bind:name="item.name" \
                    v-bind:description="item.description" \
                    v-bind:category="item.category" \
                    v-bind:fields="item.fields" \
                    v-bind:example="item.example"></guidelines-item> \
            </div>\
        </div>\
      </div>\
      '
  })

  /**
   * Vue component to show the breadcrumbs of
   * available methods
   */
  var vue_field_selector = {
    props: ["fields"],
    data: function() {
        return {
            enabled_fields: []
        }
    },
    watch: {
        fields: function() {
            var updated_enabled_fields = [];

            for (var field in this.fields) {
                if (this.fields[field]) {
                    updated_enabled_fields.push(field);
                }
            }

            // necessary to change the variable to trigger an update of the components
            console.debug("field-selector: Updated enabled_fields: " + updated_enabled_fields.join(", "));
            this.enabled_fields = updated_enabled_fields;
        }
    },
    methods: {
      toggleField: function(field) {
          // get the field state
          console.debug("Toggeling " + field);

          // if the user de-selects a field, make sure it's not the last one
          if (this.fields[field] && this.enabled_fields.length < 2) {
              return;
          }

          this.$emit('toggle-field', field);
      }
    },
    template: '\
    <div class="field-selector">\
      <h1>Shown fields:</h1>\
      <div v-for="field in Object.keys(fields)">\
          <span class="badge"\
          v-bind:class="{\'badge-secondary\': enabled_fields.indexOf(field) > -1, \'badge-light\': enabled_fields.indexOf(field) == -1}" \
          v-on:click.prevent="toggleField(field)">{{ field }}</span>\
      </div>\
    </div>\
    '
};
 Vue.component("field-selector", vue_field_selector);

  /**
   * Vue instance for the guidelines parser
   */
  var vm_guidelines = new Vue({
      el: '#guidelines',
      data: {
        sections: [],
        field_states: {},
        visible_fields: [],
        authors: [],
        show_menu: false
      },
      methods: {
        onToggleField: function(field) {
            // update the field_states
            var updated_field_states = {};
            // copy the object
            for (var field_name in this.field_states) {
                updated_field_states[field_name] = this.field_states[field_name];
            }

            // toggle the state and update the original object to trigger a global update
            updated_field_states[field] = !updated_field_states[field];
            this.field_states = updated_field_states;

            // put all visible fields in the visible_fields array
            var new_visible_fields = [];
            for (var field in this.field_states) {
                if (this.field_states[field]) {
                    new_visible_fields.push(field);
                }
            }

            this.visible_fields = new_visible_fields;
        }
      },
      computed: {
        visible_sections: function() {
            var visible_sections = [];

            this.sections.forEach(function(section) {
                // only filter based on the items
                var section_copy = {
                    name: section.name,
                    description: section.description,
                    example: section.example,
                    items: []
                };

                section.items.forEach(function(item) {
                    // check if the item is visible
                    var is_visible = false;
                    var item_fields = item.fields.split(",").map(field => field.trim());

                    if (item_fields.indexOf("all") > -1) {
                        is_visible = true;
                    }
                    else {
                        for (var i = 0; i < this.visible_fields.length; i++) {
                            if (item_fields.indexOf(this.visible_fields[i]) > -1) {
                                is_visible = true;
                                break;
                            }
                        }
                    }

                    if (is_visible) {
                        section_copy.items.push(item);
                    }
                }.bind(this));

                if (section_copy.items.length > 0)
                    visible_sections.push(section_copy);
            }.bind(this));

            return(visible_sections);
        }
      },
      mounted: function() {
          axios.get("guidelines.md")
          .then(function (response) {
            console.debug("Parsing markdown...");
            // get the sections
            this.sections = parseMarkdown(response.data);

            // get the authors
            this.authors = extractAuthorsFromMarkdown(response.data);

            // get all available fields
            var all_fields = {};

            this.sections.forEach(function(section) {
                section.items.forEach(function(item) {
                    var item_fields = item.fields.split(",");
                    item_fields.forEach(field => all_fields[field.trim()] = 1);
                });
            });
            
            delete all_fields["all"];

            console.debug("Viewer: Found fields " + Object.keys(all_fields).join(", "));

            this.field_states = all_fields;
            this.visible_fields = Object.keys(this.field_states);
          }.bind(this))
      }
  })