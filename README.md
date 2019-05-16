# Minimal Guidelines for Reproducible MS-based Research

This project aims at defining a set of guidelines to report mass spectrometry-based experiments in a reproducible fashion.

To view the guidelines, use https://eubic.github.io/ReproducibleMSGuidelines. This uses a JavaScript application to render the actual `guidelines.md` document. This rendering tool can also be used offline when downloading the repositories content and opening the `index.html` file.

## Introduction

There is a growing concern about a lack of reproducibility in science that also affects bioinformatics and mass spectrometry (MS-based) technologies. One aspect of this problem is that bioinformatic analysis are increasingly complex and greatly influence the outcome of a study. Current bioinformatic analysis commonly consist of multiple tools and algorithms, each with its own set of parameters. Recording all of these settings in full detail is rarely possible in methods sections of a research manuscript. This often leads to vital details about the bioinformatic processing of the data to be missing. In this work, we, therefore, try to establish a set of guidelines to describe 

  * The minimal information required in the bioinformatic methods section of MS-based  manuscripts.  
  * A well-defined checklist of requirements to help authors, reviewers, and editors to assess bioinformatic analyses 
  * The required extended information data (supplementary) that needs to accompany any manuscript in order to ensure its reproducibility

## Scope

These guidelines aim to provide recommendations for mass spectrometry-based experimental techniques. The guidelines currently contain recommendations for 

  * MS-based bottom-up proteomics
  * Proteogenomics

Fields that we are currently working on are

  * Lipidomics
  * Metabolomics
  * MS-based imaging

Contributions for any other MS-based method are highly welcome!

## The Guidelines

The complete guidelines are stored in the `guidelines.md` file in this repository. We created a JavaScript application that nicely renders this document as a webpage at https://eubic.github.io/ReproducibleMSGuidelines. The actual file is a standard markdown file that can be viewed [here](./guidelines.md).

We are currently working on a more user-friendly web-based rendering of these guidelines.

## Who can contribute?

Everyone! The creation of this guidelines as a completely community-driven project. [How to contribute](https://github.com/eubic/ReproducibleMSGuidelines/blob/master/CONTRIBUTING.md) 

## How can I contribute?

  * Fork this repository, adapt the `guidelines.md` file and create a **pull request**
  * Send an e-mail with your changes to `eubic-guidelines@googlegroups.com`
  * If you want to work on a larger section of the document, let us know and we will move the Guidelines into a **Microsoft Word** document for you.

## Guidelines format

While the `guidelines.md` file is a normal markdown file, it does follow some conventions in order to render a user-friendly version.

### Sections

The guidelines are grouped into sections, each represented as the top level scope of the markdown file:

```
# Section name
...
```

Every section may have a description:
```
# Section name
SectionDescription: A great description that
may span multiple lines.
```

Finally, a section may have an example section:
```
# Section name
SectionExample: A reference to a study that created a very reproducible
workflow. Again, the example may span multiple lines.
```

### Items

Items are the actual recommendations in the guideline. 

```
# Public Data Deposition

Name: Raw data deposition
Category: bronze
Description: The complete RAW data must be deposited in a public repository.
Fields: all
```

Items start with the `Name:` tag. Every item is assigned to a category, either "bronze", "silver", or "gold" and has a descrition. Items are linked to specific fields, such as "proteomics", or "metabolomics", but may also be applicable to "all" fields. The `Fields:` slot is a comma-delimited list of field names. Finally, every item may have an `Example:` field that again may span multiple lines. Items must end with an empty line.





