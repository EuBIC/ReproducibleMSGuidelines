
![Eubic Logo](https://github.com/ypriverol/ReproducibleMSGuidelines/raw/master/eubic-logo.png)

European Bioinformatics Community

## Title: Minimal Guidelines for Reproducible MS-based Research
## Version: v0.1
## Authors: Johannes Griss, Yasset Perez-Riverol




## Scope

There is a growing concern about a lack of reproducibility in science that also affects bioinformatics and mass spectrometry (MS-based) technologies. One aspect of this problem is that bioinformatic analysis are increasingly complex and greatly influence the outcome of a study. Current bioinformatic analysis commonly consist of multiple tools and algorithms, each with its own set of parameters. Recording all of these settings in full detail is rarely possible in methods sections of a research manuscript. This often leads to vital details about the bioinformatic processing of the data to be missing. In this work, we, therefore, try to establish a set of guidelines to describe.

The minimal information required in the bioinformatic methods section of MS-based manuscripts. A well-defined checklist of requirements to help authors, reviewers, and editors to assess bioinformatic analyses The required extended information data (supplementary) that needs to accompany any manuscript in order to ensure its reproducibility

The following guidelines will be focused on studies and manuscripts performed using MS-based technologies such as Proteomics (bottom-up and top-down), Metabolomics, Lipidomics, ProteoGenomics, Mass Spectrometry Imaging. However, the principles of the guidelines can be applied and extended to other omics bioinformatics data analysis. Additionally, these guidelines should enable non-bioinformatics experts as well (when reviewing, for example) to assess whether a manuscript fulfills these guidelines.

## Conventions Used in this Manuscript

All items are grouped into three categories:

**Bronze**: Minimal requirements to ensure reproducibility. This constitutes the minimal level of compliance with this guideline.

**Silver**: Intermediate level

**Gold**: Fully documented consideration of all bioinformatics aspects.

Additionally, all requirements are organized in content blocks. These blocks are then tagged based on which experimental technique they are applicable to. The idea behind this approach is to create reusable blocks that can be integrated into other guidelines as well.

The guidelines are organized by sections (e.g. Public Data Deposition). Each section provides a checklist of information that must (**Bronze**), should (**Silver**) or could (**Gold**) be provided for each specific technology. If one of the items in the checklist is applied to only a specific set of MS-based technologies, it will be mentioned and tag specifically.

## Open Points

Once the guidelines reached the first level of stability, invite additional experts from other fields to assess whether the blocks really are reusable. Ideally, we will try to cover:

- RNA-seq
- Single-cell RNA-seq

### Public Data Deposition

We consider public data deposition as a vital requirement for any published study. Therefore:


Name: Raw data is deposited in a public repository
Category: Bronze
Description:
Fields: all


Name: Experimental design is deposited in a public repository
Category: Bronze
Description:  An accompanying file is made available which describes the experimental design in terms of sample id per raw file / isobaric channel, and fraction identifier, as well as any additional factors relevant to the experiment. This file should be deposited alongside the data in the public repository or must alternatively be submitted as a supplementary file with the manuscript.This file should indicate factors potentially relevant to batch effects (f.e. machine id, lab id, run date and time). If supported, this information should be made available using the repository’s standard method
Fields: all  


The identifier of the data submission is mentioned in the manuscript.
This data must be available for review at the time of submission and must be available publically at the time of publication.

Silver:
Linked to matched data, e.g. transcriptomics is provided
Processed data (ie. search result files indicating identified PSMs, peptides, and proteins) is deposited in the same repository.

For meta-analysis and the papers that contain reprocessed public datasets:
Bronze:
the identifiers of all datasets are mentioned in the manuscript
the original publication(s) is cited. This includes preprints.
Silver:
The reprocessed data (ie. search result files) is submitted to a public repository

MS-based Proteomics and ProteoGenomics
Bronze:
The data repository is part of ProteomeXchange (http://www.proteomexchange.org/)

Silver:
Acquisition method files are made available together with the Raw data.

Gold:
The mass spectra are provided in the HUPO-PSI standard file format mzML.
The identification information (PSMs / Petides / Proteins) are provided in the HUPO-PSI format mzIdentML or mzTab.
The Quantitative information of is made available in the mzTab file format.
Samples are annotated with metadata within the HUPO-PSI files (mzTab) or other standards for experimental design such as IsaTab.
If spectral libraries are used for protein identification, the libraries should be deposited in the public repository. If the libraries are provided by one of the ProteomeXchange partners the Identifier of the library should be added to the manuscript.

If the paper (also) contains reprocessed public datasets,

Gold:
The public repository is part of the ProteomeXChange consortium.


ProteoGenomics

ProteoGenomics can be considered a specific subfield of MS-based proteomics studies in which more complex analysis are performed. Therefore, more data should be provided in order to reproduce the original results:

Bronze:
The custom (FASTA) database generated from the genomics information should be provided.
The identifier to the genomics (e.g. GWAS or RNA-seq) dataset is cited in the manuscript

MS-based Metabolomics

Bronze:
Data should be deposited in one of the following archives: Metabolights, MassIVE




Bioinformatics  Analysis  Description
This section refers to the requirements of how the bioinformatic analysis should be described in a manuscript.
General
Bioinformatics (all)
Bronze
All used software is named including the exact version and the availability (ie. download link for public software or reference to the company)
Any non-publicly available / custom scripts (for example R, Python, MatLab, Perl scripts) are available to the reviewers
Newly developed or closed-source in-house developed software (software developed by the authors / research group / institute) is made available to the reviewers for testing.
If the software is made publically available, downloads for specific versions of the software are provided, which include the exact version used in the manuscript
All external resources (UniProt, GO, Ensembl, Reactome, etc.) are referenced and the version/release date/date of access documented.
The operating system and its version under which the analysis was carried out is specified
Silver
Newly developed software/custom scripts are made publically available and deposited to a public code hosting platform (ie. GitHub, Bitbucket, GitLab)
A README file is provided that specifies the system requirements, installation guide, and instructions for use
Gold
The used software version can be identified through a DOI (for example through https://zenodo.org)
For newly developed software: a description how to run and what to expect from provided demo data is distributed with the software
Workflow Software (ie. ProteomeDiscoverer, Galaxy, OpenMS)
Bioinformatics (all)
Bronze
If a workflow software was used, the workflow file is made available at the time of review
Silver
Workflow files are deposited in the same repository as the public data or the software (for example as a test suite to a software package) or submitted as supplementary data
RAW File Processing
MS-based Proteomics
Bronze
If RAW file processing was performed by a separate tool, this tool including all settings are described
This should include all settings for signal detection (such as MS and MS/MS peak picking, deisotoping, feature detection) settings if available
The tool is publically available or alternatively, the peak picked data is deposited alongside the RAW data
Search
MS-based Proteomics
Bronze
The database used including the exact version/date of download (if a release version is not available) are described
The method used to create a decoy database is specified
If a custom (ie. non-publicly available) database was used, this database is deposited in the public repository or submitted as supplementary data
This includes databases, where decoy databases were generated using randomization
The search engine(s) including their exact versions is/are specified
All relevant, non-default settings, such as precursor ion tolerance, fragment ion tolerance, in-silico digestion rule (ie. enzyme), allowed missed cleavages, static and variable post-translational modifications are specified
The methods used to determine the identification false discovery rates (at PSM, peptide and/or protein levels) and the respective thresholds are specified
Silver
When available, the used parameter/configuration file is deposited alongside the data in a public repository or alternatively submitted as supplementary data.
Manual curation
MS-based Proteomics
Bronze
If the data were manually curated (for example using Skyline) the curated dataset is deposited alongside the RAW data in a public repository
Gold
Un-curated data is made available alongside the final one
Quantification
MS-based Quantitative Proteomics
Bronze
The software used to extract quantitative values (for example precursor intensities, reporter ion intensities etc) including its parameters and version is specified
The method used to aggregate PSM level quantitative values on the peptide and protein levels is specified
The method used to perform normalisation is specified including at which level this normalisation was performed (PSM, peptide, or protein)
The method used to filter and/or impute missing values is specified including at which level this filtering/imputation was performed (PSM, peptide, or protein)
Statistical Analysis
Bioinformatics (all)
Bronze
The software used to perform the statistical analysis (ie. differential expression analysis) is specified including its version
The method used to determine the sample size and the power of the study is specified (if applicable)
Any statistical test is named (including its parameters such as one- or two-sided, paired or unpaired) and the resulting p-value/threshold specified
The method used to correct for multiple testing is specified if applicable. If correction for multiple testing was not performed, this needs to be explicitly justified.
If software such as R, Python, or MatLab is used for the analysis, all used packages including their versions are specified or provided as a supplementary file
If any filtering was applied / measurement(s) excluded either manually or as part of the software algorithms, this must be clearly stated.
Silver
If the software supports the export of the statistical analysis steps (for example R scripts) these are made available for review
Any transformation of data (e.g. log transformation) manually or as part of a software function/test is specified including the order that these transformations were performed.
If a model with multiple parameters is created, the formula for the said model is declared.
Gold
If the software supports the export of the statistical analysis steps (for example R scripts) these are submitted as supplementary data
Underlying data for all figures (where applicable) is made available
