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
 * Extracts the introductory paragraphs from the guidelines document.
 * 
 * @param {string} markdown Markdown text to parse.
 */
function extractIntroductionFromMarkdown(markdown) {
    // process everything line by line
    var lines = markdown.split("\n");

    var introduction = "";

    // starts at "## Scope"
    var startLine = -1;

    for (var lineNumber = 0; lineNumber < lines.length; lineNumber++) {
        if (lines[lineNumber].trim().substr(0, 8).toLowerCase() == "## scope") {
            startLine = lineNumber + 1;
            break;
        }
    }

    // make sure the start was found
    if (startLine < 0) {
        console.debug("Failed to find beginning of introduction part (## scope)")
        return(null);
    }

    // all lines following "scope" are part of the introduction
    for (var lineNumber = startLine; lineNumber < lines.length; lineNumber++) {
        // check if the items start
        var line = lines[lineNumber].trim();

        if (line.substr(0, 4) == "### ") {
            break;
        }

        introduction += line + "\n";
    }

    return(introduction);
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
    var current_line_number = 0;
    var current_section_number = 0;

   lines.forEach(function(line) {
        line = line.trim();
        current_line_number++;
        
        // test if the line is a section heading
        if (line.substr(0, 4) == "### ") {
            current_section_number++;

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
                items: [],
                id: "section_" + current_section_number
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
                start_line: current_line_number,
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
        else if (line.length > 0) {
            switch(last_field) {
                case "section_description":
                    if (current_section != null)
                        current_section.description += " " + line;
                    break;
                case "section_example":
                    if (current_section != null)
                        current_section.example += " " + line;
                    break;
                case "item_name":
                    if (current_item != null)
                        current_item.name += " " + line;
                    break;
                case "item_description":
                    if (current_item != null)
                        current_item.description += " " + line;
                    break;
                case "item_fields":
                    // TODO: check if fields ends with ","
                    if (current_item != null)
                        current_item.fields += "," + line;
                    break;
                case "item_example":
                    if (current_item != null)
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
var guidelines_item = {
    props: ["name", "description", "category", "fields", "example", "start_line", "eventhub"],
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
    created: function() {
        this.eventhub.$on('show-all', this.showItems);
    },
    beforeDestroy: function () {
        this.eventhub.$off('show-all', this.showItems);
    },
    methods: {
        createMailLink: function() {
            return "mailto:eubic-guidelines@googlegroups.com?subject=Feedback on MS Guidelines #" + 
            this.start_line + "&body=Feedback on \"" + this.name + "\" (Line " + this.start_line + "):";
        },
        createGitHubLink: function() {
            return "https://github.com/eubic/ReproducibleMSGuidelines/issues/new?title=" +
            "Guidelines " + this.start_line + ": " + this.name + 
            "&body=Enter your feedback / points of discussion here" +
            "&labels=guidelines&assignee=jgriss"
        },
        showItems: function() {
            this.show_description = true;
            this.show_example = true;
        }
    },
    template: '\
    <div class="guideline-item">\
        <h2 class="guideline-item-name" v-html="marked(name)"></h2>\
        <div class="guideline-item-scope">\
            <span class="category badge" v-bind:class="[category.toLowerCase()]">{{ category }}</span>\
            <span v-for="field in field_array" class="badge badge-pill badge-info">{{ field }}</span>\
            <a class="guidelines-item-github_link" target="_blank" title="Create issue for discussion on GitHub"\
               v-bind:href="createGitHubLink()">\
                <i class="fab fa-github"></i>\
            </a>\
            <a class="guidelines-item-feedback" v-bind:href="createMailLink()" title="Post feedback using e-mail">\
                <i class="far fa-comment-alt"></i>\
            </a>\
            <button v-if="description" v-on:click="show_description = !show_description"\
                    class="btn btn-sm"\
                    v-bind:class="{\'btn-outline-info\': !show_description, \'btn-info\': show_description}">Description</button>\
            <button v-if="example" v-on:click="show_example = !show_example"\
                    class="btn btn-sm"\
                v-bind:class="{\'btn-outline-info\': !show_example, \'btn-info\': show_example}">Example</button>\
        </div>\
        <div class="guideline-item-description" v-if="description" v-show="show_description">\
            <h4>Description</h4>\
            <div v-html="marked(description)"></div>\
        </div>\
        <div class="guideline-item-description" v-if="example" v-show="show_example">\
            <h4>Example</h4>\
            <div v-html="marked(example)"></div>\
        </div>\
    </div>'
  };
  Vue.component('guidelines-item', guidelines_item);

  var section_item = {
    props: ["name", "description", "example", "items", "id", "eventhub"],
    data: function() {
        return {
            show: false
        }
    },
    created: function() {
        this.eventhub.$on('show-all', this.showItems);
    },
    beforeDestroy: function () {
        this.eventhub.$off('show-all', this.showItems);
    },
    methods: {
        showItems: function() {
            this.show = true;
        }
    },
    template: '\
    <div class="guidelines-section" v-bind:id="id">\
      <h1 class="guidelines-section-name" v-bind:class="{\'border-bottom\': show}" v-on:click="show = !show">{{ name }}\
          <span class="badge badge-pill badge-secondary"> {{ items.length }}</span>\
          <i class="far" v-bind:class="{\'fa-plus-square\': !show, \'fa-minus-square\': show}"></i>\
      </h1>\
      <div class="guidelines-section-items" v-show="show">\
        <div class="guidelines-section-description" v-if="description">\
            <b>Description:</b> {{ description }}\
        </div>\
        <div class="guidelines-section-description" v-if="example"><b>Example:</b> {{ example }}</div>\
        <div id="guidelines">\
            <guidelines-item\
                v-for="item in items" \
                v-bind:name="item.name" \
                v-bind:description="item.description" \
                v-bind:category="item.category" \
                v-bind:fields="item.fields" \
                v-bind:example="item.example"\
                v-bind:start_line="item.start_line"\
                v-bind:eventhub="eventhub"></guidelines-item> \
        </div>\
      </div>\
    </div>\
    '
};
Vue.component("guidelines-section", section_item);


  /**
   * Vue component to show the breadcrumbs of
   * available methods
   */
  var vue_field_selector = {
    props: {
        fields: Array,
        title: {
            type: String,
            default: "Shown fields"
        }
    },
    data: function() {
        return {
            enabled_fields: []
        }
    },
    mounted: function() {
        this.updateEnabledFields();
    },
    watch: {
        fields: function() {
            this.updateEnabledFields();
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
      },
      updateEnabledFields: function() {
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
    template: '\
    <div class="field-selector">\
      <h1>{{ title }}</h1>\
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
        categories: {Bronze: true, Silver: true, Gold: true},
        visible_categories: ["Bronze", "Silver", "Gold"],
        authors: [],
        show_menu: false,
        show_introduction: false,
        introduction: null,
      },
      watch:  {
            /**
             * Disable body scrolling if the introduction pop-up is shown.
             */
            show_introduction: function() {
                if (this.show_introduction) {
                    document.documentElement.style.overflow = 'hidden';
                    document.body.scroll = "no";
                } else {
                    document.documentElement.style.overflow = 'scroll';
                    document.body.scroll = "yes";
                }
            }
      },
      methods: {
        onToggleCategory: function(category) {
            // update the category_states
            var updated_category_states = {};
            // copy the object
            for (var category_name in this.categories) {
                updated_category_states[category_name] = this.categories[category_name];
            }

            // toggle the state and update the original object to trigger a global update
            updated_category_states[category] = !updated_category_states[category];
            this.categories = updated_category_states;

            // put all visible fields in the visible_fields array
            var new_visible_categories = [];
            for (var category in this.categories) {
                if (this.categories[category]) {
                    new_visible_categories.push(category);
                }
            }

            this.visible_categories = new_visible_categories;
        },

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
        },

        expandAll: function() {
            this.$emit("show-all");
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
                    items: [],
                    id: section.id
                };

                section.items.forEach(function(item) {
                    // check if the item is visible based on its fields
                    var is_visible_field = false;
                    var item_fields = item.fields.split(",").map(field => field.trim());

                    if (item_fields.indexOf("all") > -1) {
                        is_visible_field = true;
                    }
                    else {
                        for (var i = 0; i < this.visible_fields.length; i++) {
                            if (item_fields.indexOf(this.visible_fields[i]) > -1) {
                                is_visible_field = true;
                                break;
                            }
                        }
                    }

                    // check if the item is visible based on its category
                    var is_visible_category = this.visible_categories.indexOf(item.category) > -1;

                    if (is_visible_field && is_visible_category) {
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

            // get the introduction
            this.introduction = extractIntroductionFromMarkdown(response.data);
          }.bind(this))
      }
  })