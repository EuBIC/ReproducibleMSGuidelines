
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

Additionally, all requirements are organized in content blocks. These blocks are then tagged based on which experimental technique they are applicable to. The idea behind this approach is to create reusable blocks that can be integrated into other guidelines as well. The current guidelines are design for the following biomedical research fields: 

- Proteomics 
- ProteoGenomics* 
- Metabolomics 
- Mass Spectrometry Imaging 
- Lipidomics 

**ProteoGenomics** can be considered a specific subfield of MS-based proteomics studies in which more complex analysis are performed.
 
Some of the rules are design for **metanalysis** manuscripts. A metanalysis manuscript is the agregation/reanalysis of previously published data. 

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


Name: The identifier of the data submission is mentioned in the manuscript  
Category: Bronze  
Description:   
Fields: all     


Name: The data must be available for review at the time of submission and must be available publically at the time of publication  
Category: Bronze  
Description:     
Fields: all    


Name: Linked to matched data, e.g. transcriptomics is provided  
Category: Silver  
Description:  
Fields: all   


Name: The Processed data is deposited in a public repository  
Category: Silver    
Description: The processed results files (ie. search result files indicating identified PSMs, peptides, and proteins) is deposited in the same repository.  
Fields: all   


Name: For metanalysis papers, the identifiers of all reanalyzed datasets are mentioned in the manuscript    
Category: Bronze    
Description: For meta-analysis manuscripts where multiple public datasets are reanalyzed with a different approach or bioinformatics workflow, the identifier and the publication of each of these datasets should be cited in the manuscript.    
Fields: all  


Name: The data repository is part of [ProteomeXchange](http://www.proteomexchange.org/)  
Category: Bronze  
Description:    
Fields:  Proteomics, ProteoGenomics    


Name: Acquisition method files are made available together with the Raw data     
Category: Silver  
Description:    
Fields: Proteomics, ProteoGenomics  


Name: The mass spectra are provided in the HUPO-PSI standard file format mzML.  
Category: Gold   
Description:    
Fields: Proteomics, ProteoGenomics, Metabolomics  


Name: The identification information (PSMs / Petides / Proteins) are provided in the HUPO-PSI format mzIdentML or mzTab.  
Category: Gold  
Description:  
Fields: Proteomics, ProteoGenomics  


Name: The Quantitative information of is made available in the mzTab file format.  
Category: Gold  
Description:   
Fields: Proteomics, ProteoGenomics  


Name: Samples are annotated with metadata within the HUPO-PSI files (mzTab) or other standards for experimental design such as IsaTab.  
Category: Gold  
Description:  
Fields: Proteomics, ProteoGenomics, Metabolomics


Name: The spectral library should be public. 
Category: Gold  
Description: If spectral libraries are used for protein identification, the libraries should be deposited in the public repository. If the libraries are provided by one of the ProteomeXchange partners the Identifier of the library should be added to the manuscript.  
Fields: Proteomics, ProteoGenomics 


Name: All the reprocessed datasets in a metanalysis should be public in a ProteomeXchange partner  
Category: Gold  
Description:   
Fields: Proteomics, ProteoGenomics 


Name: The custom (FASTA) database generated from the genomics information should be provided.
Category: Bronze  
Description:    
Fields: ProteoGenomics    


Name: The identifier to the genomics (e.g. GWAS or RNA-seq) dataset is cited in the manuscript.
Category: Bronze  
Description:  
Fields: ProteoGenomics 


Name: Data should be deposited in one of the following archives: Metabolights, MassIVE  
Category: Silver
Description:   
Fields: Metabolomics


### Bioinformatics  Analysis  Description

This section refers to the requirements of how the bioinformatic analysis should be described in a manuscript.


Name: All used software is named including the exact version and the availability (ie. download link for public software or reference to the company)  
Category: Bronze  
Description:  
Fields: all  


Name: Any non-publicly available / custom scripts (for example R, Python, MatLab, Perl scripts) are available to the reviewers
Category: Bronze  
Description:  
Fields: all  

Name: Newly developed or closed-source in-house developed software (software developed by the authors / research group / institute) is made available to the reviewers for testing
Category: Bronze  
Description:  
Fields: all 

Name: If the software is made publically available, downloads for specific versions of the software are provided, which include the exact version used in the manuscript
Category: Bronze  
Description:  
Fields: all  

Name: All external resources (UniProt, GO, Ensembl, Reactome, etc.) are referenced and the version/release date/date of access documented 
Category: Bronze  
Description:  
Fields: all 


Name: The operating system and its version under which the analysis was carried out is specified
Category: Bronze  
Description:  
Fields: all  


Name: Newly developed software/custom scripts are made publically available and deposited to a public code hosting platform (ie. GitHub, Bitbucket, GitLab)
Category: Silver  
Description:  
Fields: all 


Name: A README file is provided that specifies the system requirements, installation guide, and instructions for use
Category: Silver  
Description:  
Fields: all 



Name: The used software version can be identified through a DOI (for example through https://zenodo.org)  
Category: Bold  
Description:   
Fields: all    


Name: For newly developed software: a description how to run and what to expect from provided demo data is distributed with the software  
Category: Bold  
Description:   
Fields: all  


### Workflow Software (ie. ProteomeDiscoverer, Galaxy, OpenMS)


Name: If a workflow software was used, the workflow file is made available at the time of review  
Category: Bronze  
Description:   
Fields:  all   


Name: Workflow files are deposited in the same repository as the public data or the software (for example as a test suite to a software package) or submitted as supplementary data   
Category: Silver  
Description:    
Fields: all   

### RAW File Processing


Name: If RAW file processing was performed by a separate tool, this tool including all settings are described  
Category: Bronze 
Description: This should include all settings for signal detection (such as MS and MS/MS peak picking, deisotoping, feature detection) settings if available  
Fields: all  

Name: The tool is publically available or alternatively, the peak picked data is deposited alongside the RAW data  
Category: Bronze  
Description:  
Fields: all 

### Search MS-based Proteomics

Name: The database used including the exact version/date of download (if a release version is not available) are described  
Category: Bronze    
Description:   
Fields: Proteomics, ProteoGenomics  


Name: The method used to create a decoy database is specified  
Category: Bronze   
Description:   
Fields: Proteomics, ProteoGenomics  


Name: If a custom (ie. non-publicly available) database was used, this database is deposited in the public repository or submitted as supplementary data  
Category: Bronze  
Description:  This includes databases, where decoy databases were generated using randomization  
Fields:  Proteomics, ProteoGenomics 


Name: The search engine(s) including their exact versions is/are specified  
Category: Bronze  
Description:  
Fields: Proteomics, ProteoGenomics


Name: All relevant, non-default settings, such as precursor ion tolerance, fragment ion tolerance, in-silico digestion rule (ie. enzyme), allowed missed cleavages, static and variable post-translational modifications are specified  
Category: Bronze  
Description:  
Fields: Proteomics, ProteoGenomics  


Name: The methods used to determine the identification false discovery rates (at PSM, peptide and/or protein levels) and the respective thresholds are specified
Category: Bronze   
Description:   
Fields: Proteomics, ProteoGenomics 


Name: When available, the used parameter/configuration file is deposited alongside the data in a public repository or alternatively submitted as supplementary data.
Category: Silver  
Description:  
Fields: Proteomics, ProteoGenomics  


###  Manual curation

Name: If the data were manually curated (for example using Skyline) the curated dataset is deposited alongside the RAW data in a public repository
Category: Bronze  
Description:  
Fields: all 


Name: Un-curated data is made available alongside the final one
Category: Gold  
Description:   
Fields: all 


### MS-based Quantitative

Name: The software used to extract quantitative values (for example precursor intensities, reporter ion intensities etc) including its parameters and version is specified  
Category: Bronze  
Description:  
Fields: Proteomics, ProteoGenomics 


Name: The method used to aggregate PSM level quantitative values on the peptide and protein levels is specified
Category: Bronze 
Description:  
Fields: Proteomics, ProteoGenomics  


Name: The method used to perform normalisation is specified including at which level this normalisation was performed (PSM, peptide, or protein)
Category: Bronze 
Description:  
Fields: Proteomics, ProteoGenomics  


Name: The method used to filter and/or impute missing values is specified including at which level this filtering/imputation was performed (PSM, peptide, or protein)
Category: Bronze  
Description:  
Fields: Proteomics, ProteoGenomics  

### Statistical Analysis

Name: The software used to perform the statistical analysis (ie. differential expression analysis) is specified including its version
Category: Bronze
Description:  
Fields: Proteomics, ProteoGenomics  


Name: The method used to determine the sample size and the power of the study is specified (if applicable)
Category: Bronze  
Description:  
Fields: Proteomics, ProteoGenomics   


Name: Any statistical test is named (including its parameters such as one- or two-sided, paired or unpaired) and the resulting p-value/threshold specified
Category: Bronze  
Description:   
Fields: Proteomics, ProteoGenomics  


Name: The method used to correct for multiple testing is specified if applicable. If correction for multiple testing was not performed, this needs to be explicitly justified.
Category: Bronze  
Description:  
Fields: Proteomics, ProteoGenomics  


Name: If software such as R, Python, or MatLab is used for the analysis, all used packages including their versions are specified or provided as a supplementary file  
Category: Bronze   
Description:  
Fields: Proteomics, ProteoGenomics 


Name: If any filtering was applied / measurement(s) excluded either manually or as part of the software algorithms, this must be clearly stated  
Category: Bronze  
Description:  
Fields: Proteomics, ProteoGenomics  


Name: If the software supports the export of the statistical analysis steps (for example R scripts) these are made available for review  
Category: Silver 
Description:  
Fields: Proteomics, ProteoGenomics  


Name: Any transformation of data (e.g. log transformation) manually or as part of a software function/test is specified including the order that these transformations were performed  
Category: Silver  
Description:  
Fields: Proteomics, ProteoGenomics  


Name: If a model with multiple parameters is created, the formula for the said model is declared  
Category: Silver  
Description:   
Fields: Proteomics, ProteoGenomics  


Name: If the software supports the export of the statistical analysis steps (for example R scripts) these are submitted as supplementary data  
Category: Gold 
Description:  
Fields: Proteomics, ProteoGenomics 


Name: Underlying data for all figures (where applicable) is made available  
Category: Gold  
Desciprtion:   
Fields: Proteomics, ProteoGenomics 



