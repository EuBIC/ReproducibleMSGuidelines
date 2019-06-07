
![Eubic Logo](https://github.com/ypriverol/ReproducibleMSGuidelines/raw/master/eubic-logo.png)

European Bioinformatics Community

## Title: Minimal Guidelines for Reproducible MS-based Research
## Version: v0.1
## Authors: Johannes Griss (http://orcid.org/0000-0003-2206-9511), Wout	Bittremieux (http://orcid.org/0000-0002-3105-1359), David Bouyssié , Vladimir	Gorshkov (http://orcid.org/0000-0003-0170-5785), Marie Locard-Paulet (http://orcid.org/0000-0003-2879-9224), Timo Sachsenberg (http://orcid.org/0000-0002-2833-6070), Veit Schwämmle (http://orcid.org/0000-0002-9708-6722), Julian Uszkoreit (http://orcid.org/0000-0001-7522-4007), Marc Vaudel (), Mathias Walzer (http://orcid.org/0000-0003-4538-2754), Sander Willems (http://orcid.org/0000-0002-7124-610X), Yasset Perez-Riverol (http://orcid.org/0000-0001-6579-6941) and the EuBIC Community. 

## Scope

There is a growing concern about a lack of reproducibility in science that also affects bioinformatics and mass spectrometry (MS-based) technologies. One aspect of this problem is that bioinformatic analysis are increasingly complex and greatly influence the outcome of a study. Current bioinformatic analysis commonly consist of multiple tools and algorithms, each with its own set of parameters. Recording all of these settings in full detail is rarely possible in methods sections of a research manuscript. This often leads to vital details about the bioinformatic processing of the data to be missing. In this work, we therefore try to establish:

  * A set of guidelines to describe the minimal information required in the bioinformatic methods section of MS-based manuscripts. 
  * A well-defined checklist of requirements to help authors, reviewers, and editors to assess bioinformatic analyses.
  * The required extended information data (supplementary) that needs to accompany any manuscript in order to ensure its reproducibility.

The following guidelines will be focused on studies and manuscripts performed using MS-based technologies (see below). However, the principles of the guidelines can be applied and extended to other omics bioinformatics data analysis. Additionally, these guidelines should enable non-bioinformatics experts as well (when reviewing, for example) to assess whether a manuscript fulfills these guidelines.

## Conventions Used in this Manuscript

All items are grouped into three categories:

**Bronze**: Minimal requirements to ensure reproducibility. This constitutes the minimal level of compliance with this guideline.

**Silver**: Intermediate level

**Gold**: Fully documented consideration of all bioinformatics aspects.

The guidelines are organized by sections (e.g. Public Data Deposition). Each section provides a checklist of information that must (**Bronze**), should (**Silver**) or could (**Gold**) be provided for each specific technology. If one of the items in the checklist is applied to only a specific set of MS-based technologies, it will be mentioned and tag specifically. The idea behind this approach is to create reusable blocks that can be integrated into other guidelines as well. The current guidelines are design for the following biomedical research fields: 

- Proteomics (bottom-up and top-down)
- ProteoGenomics* 
- Metabolomics 
- Lipidomics 
- Mass Spectrometry Imaging 

**ProteoGenomics** can be considered a specific subfield of MS-based proteomics studies in which more complex analysis are performed.
 
Some of the rules are design for **meta-analysis** manuscripts. A meta-analysis manuscript is the aggregation/reanalysis of previously published data. 

### Public Data Deposition

We consider public data deposition as a vital requirement for any published study. Therefore:

Name: Raw data is deposited in a public repository  
Category: Bronze  
Description:  The complete RAW data (ie. the mass spectrometer's raw files, such as `RAW` files for Thermo Fisher instruments) of any MS-based study must be deposited in a public repository to ensure reproducibility.
Fields: all  

Name: The data repository is part of [ProteomeXchange](http://www.proteomexchange.org/)  
Category: Bronze  
Description: The ProteomeXchange Consortium coordinates standard data submission and dissemination guidelines of proteomics data. It encourages open data policies in the field of proteomics and guarantees the long-term maintainability of the data.
Fields:  Proteomics, ProteoGenomics  

Name: Data should be deposited in one of the following repositories: Metabolights, MassIVE  
Category: Silver   
Description: [Metabolights](https://www.ebi.ac.uk/metabolights/) and [MassIVE](https://massive.ucsd.edu) are the two major archives for metabolomics data in the world. These two archives implement standard protocols for data submission and dissemination of metabolomics data.      
Fields: Metabolomics  

Name: Experimental design is deposited in a public repository  
Category: Bronze  
Description:  An accompanying file is made available which describes the experimental design in terms of sample id per raw file / isobaric channel, and fraction identifier, as well as any additional factors relevant to the experiment. This file should be deposited alongside the data in the public repository or must alternatively be submitted as a supplementary file with the manuscript.This file should indicate factors potentially relevant to batch effects (f.e. machine id, lab id, run date and time). If supported, this information should be made available using the repository’s standard method.
Fields: all    

Name: The identifier of the data submission is mentioned in the manuscript  
Category: Bronze  
Description: 
Fields: all     

Name: The data must be available at the time of submission for review and must be available publicly at the time of publication.
Category: Bronze  
Description: The assessment of raw data, or at least the way the data was submitted, is vital to the review process of a scientific publication. This
allows reviewers to ensure that the data was deposited in a re-usable way.
Fields: all    

Name: Linked to matched data, e.g. transcriptomics is provided  
Category: Silver  
Description: The accession of the complementary omics data should be provided in the main manuscript. These data should be 
available in another public repository (e.g. RNA-seq dataset in ArrayExpress). 
Example: [PXD008960](https://www.ebi.ac.uk/pride/archive/projects/PXD008960) by Ren *et al.* is an example of a proteo-genomics study where RNA-seq data
is linked to proteomics data.
Fields: all   

Name: The processed data is deposited in a public repository  
Category: Silver    
Description: The **processed** result files (ie. search result files indicating identified PSMs, peptides, and proteins) are deposited in the same public repository as the raw data.
Fields: all   

Name: For meta-analysis papers, the identifiers of all reanalyzed datasets are mentioned in the manuscript    
Category: Bronze    
Description: For meta-analysis manuscripts where multiple public datasets are reanalyzed with a different approach or bioinformatics workflow, the identifier and the publication of each of these datasets should be cited in the manuscript.    
Fields: all    

Name: Acquisition method files are made available together with the Raw data     
Category: Silver  
Description:    
Fields: Proteomics, ProteoGenomics  

Name: The mass spectra are provided in the HUPO-PSI standard file format mzML  
Category: Gold   
Description: [mzML](http://www.psidev.info/mzML) is a HUPO-PSI data format that store mass spectrometry data (e.g mass spectra, chromatograms) using controlled vocabulary terms. mzML, is a well tested open-source and XML-based format.   
Fields: Proteomics, ProteoGenomics, Metabolomics, Lipidomics

Name: The identification information (PSMs / Petides / Proteins) are provided in the HUPO-PSI format mzIdentML or mzTab  
Category: Gold  
Description: This relates to the search results. As most proteomics search engines support [mzIdentML](http://www.psidev.info/mzidentml) and [mzTab](http://www.psidev.info/mztab), the files generated
by the search engine should be uploaded to the same repository as the mass spectrometer's raw data.
Fields: Proteomics, ProteoGenomics  

Name: The quantitative information is made available in the HUPO-PSI standard file format mzTab   
Category: Gold  
Description: [mzTab](http://www.psidev.info/mztab) is a HUPO-PSI standard file fomat that store proteomics and metabolomics identification and quantification results including: Peptide spectrum matches, Peptides, metabolites and proteins. 
Fields: Proteomics, ProteoGenomics, Metabolomics  

Name: Samples are annotated with metadata within the HUPO-PSI files (mzTab) or other standards for experimental design such as IsaTab  
Category: Gold  
Description:  
Fields: Proteomics, ProteoGenomics, Metabolomics, Lipidomics

Name: The identifier to the genomics (e.g. GWAS or RNA-seq) dataset is cited in the manuscript  
Category: Bronze  
Description: In ProteoGenomics studies, sequencing data is an integral part of the dataset. Therefore, this data should also be deposited
to a public repository and the respective dataset cited in the manuscript.
Fields: ProteoGenomics  

Name: All 'omics datasets are linked at the repository level
Category: Silver
Description: For example PRIDE (for proteomics data) and ArrayExpress (for expression data) support the linking of RNA-sequencing and
proteomics datasets. If this feature is supported by the chosen repository, all 'omics datasets should also be linked at the repository
level.
Fields: ProteoGenomics


### Basic Bioinformatics Analysis Description

SectionDescription: This section refers to the requirements of how the bioinformatic analysis should be described in a manuscript.


Name: All used software is named including the exact version and the availability
Category: Bronze    
Description: The used software must be unambiguously named. This includes, for example, the used download link for public software (including the citation of the corresponding publication if applicable) or reference to the company.
The provided information should be sufficient for anyone to retrieve the exact same piece of software (if still available). 
Fields: all   

Name: Any non-publicly available / custom scripts are available to the reviewers      
Category: Bronze      
Description: The term `scripts` refers to any short piece of code that was created for the study. Most commonly, these will be custom, in-house
R, Python, MatLab, or Perl scripts. This explicitly does not mean that commercial software must be available free-of-charge to the reviewers.
Fields: all    

Name: Newly developed or closed-source in-house developed software is made available to the reviewers for testing
Category: Bronze     
Description: This refers to software that is developed by the authors / research group / institute.
Fields: all    

Name: If the software is made publicly available, downloads for specific versions of the software are provided, which include the exact version used in the manuscript
Category: Bronze     
Description: The way to distribute the software must support to download specific versions of the software to enable researchers to reproduce the exact same results.
Fields: all    

Name: All external resources (UniProt, GO, Ensembl, Reactome, etc.) are referenced and the version/release date/date of access documented    
Category: Bronze    
Description: During the downstream analysis different databases are commonly use, for example Uniprot, Intact, Reactome. Some of these databases are used througth R packages, and desktop applications. However, the version of the tool is not enough to reproduce the original results, because the same tool version can be use with different dtabase versions. We recommended to include the version/release/date of the data provider in addition to the tool version.    
Fields: all   

Name: The operating system and its version under which the analysis was carried out is specified    
Category: Bronze     
Description: As shown by [DiTommaso et al](https://www.nature.com/articles/nbt.3820) the choice of operating system may have a considerable effect on the generated results even if the same software was used.
Fields: all    

Name: Newly developed software/custom scripts are made publicly available and deposited to a public code hosting platform
Category: Silver    
Description: All software, including custom scripts (see above) should ideally be deposited at a public hosting platform, such as
 GitHub, Bitbucket, or GitLab. This should ensure the long-term availability of the software as well as the option to enable researchers
 to retrieve specific versions of the software in the future.
Fields: all   

Name: A README file is provided that specifies the system requirements, installation guide, and instructions for use
Category: Silver  
Description: This refers to any custom / new software developed by the authors.
Fields: all 

Name: The used software version can be identified through a DOI
Category: Gold  
Description: Services like https://zenodo.org provide DOIs for software. This simplifies the citation and retrieval of specific software versions.
Fields: all    

Name: Demo data is provided for newly developed software
Category: Gold  
Description: Next to a README file (see above), a demo dataset is distributed with the software together with a description how to run and what to expect from the provided data. This resembles the idea of vignettes in [R Bioconductor](https://www.bioconductor.org/) packages. If applicable, [Jupyter notebooks](https://jupyter.org) provide a very good platform to create and distribute such example analyses.
Fields: all  

### Workflow Software

SectionDescription: This section refers to cases where a workflow software, such as ProteomeDiscoverer, Galaxy, or OpenMS was used to perform the analysis.

Name: The workflow file is made available at the time of review  
Category: Bronze  
Description:
Fields: all   

Name: Workflow files are deposited in the same repository as the public data or the software or submitted as supplementary data   
Category: Silver  
Description: In case of newly developed software that integrates into a workflow system, such a workflow file can be distributed  as a test suite for the
software package.
Example: The ProteomeDiscoverer nodes developed by the Protein Chemistry Facility at the IMP provide example workflows together with their respective nodes.
See the [MSAmanda node](http://ms.imp.ac.at/index.php?action=ms-amanda) as an example ([Dorfer et al. J Proteome Res. 2014, 13(8):3679-84](http://pubs.acs.org/articlesonrequest/AOR-6DyVQ3j4YTcGXyaskJvi))
Fields: all   

### Containers

SectionDescription: This section addresses special requirements when using containerized software (such as Docker containers).

Name: If containers are used in the analysis, they should be referenced following, for example, the BioContainers guidelines
Category: Bronze
Description: If containers, such as Docker or Singularity containers, are used in the analysis
they should be referenced through stable version numbers. This explicitly relates to not
using the ":latest" tag for Docker images as these are bound to change upon new releases
of the software. Detailed suggestions can be found in the BioContainers documentation
Fields: all

Name: If containers are used in the analysis, these should be available in a public repository using non-personal namespaces
Category: Silver
Description: If containers, such as Docker or Singularity containers, are used in the analysis
they should be available through a public repository, such as Docker Hub. The namespace used to make this image publicly available should not be under a "private", user-based namespace but should use some kind of institutional namespace where long-term availability is ensured. This addresses the risk, that if private namespaces are used and the person changes careers, the namespace might be deleted and the images thus lost.
Fields: all

Name: Containers should be available in dedicated repositories such as BioContainers
Category: Gold
Description: Dedicated namespaces for bioinformatics tools ensure minimum standards of the containers and their long-term availability. Additionally, they have mechanisms in place to also support a wider range of platforms, such as BioConda.
Fields: all

### RAW File Processing

SectionDescription: In proteomics, raw file processing refers to all steps before generating peak lists for the identification step.

Name: If RAW file processing was performed by a separate tool, this tool including all settings are described   
Category: Bronze    
Description: This should include all settings for signal detection (such as MS and MS/MS peak picking, deisotoping, feature detection) settings if available    
Fields: all    

Name: If the software used is not publicly available, the processed RAW data is deposited alongside the original RAW data
Category: Bronze  
Description: This is only required if custom software was used to process the RAW data.
Fields: all 

###  Manual Curation

Name: If the data were manually curated (for example using Skyline) the curated dataset is deposited alongside the RAW data in a public repository    
Category: Bronze    
Description: Manual curation refers to any manipulation of the original RAW data that was not performed using an automated process. Therefore, the
process cannot be sufficiently described and reproduced based on used software settings alone. In such a case, any intermediate data created from such
a curation step must be made available to ensure reproducibility.
Fields: all

Name: Un-curated data is made available alongside the final one    
Category: Gold    
Description: If different data than the original RAW files were used as starting point for the manual curation step, this data should also be made
publicly available.
Fields: all   

### Search MS-based Proteomics

Name: The protein sequence database used including the exact version/date of download (if a release version is not available) are described  
Category: Bronze    
Description: During the protein identification step, the spectrum identification search engine algorithm commonly uses a  protein sequence FASTA database from public resources (e.g. ENSEMBL, Uniprot). If the original FASTA file from the resource is not transform/change and the release number of the file is not available; the exact version/date of the downloaded FASTA file should be provided.  
Fields: Proteomics, ProteoGenomics  

Name: The method used to create a decoy database is specified  
Category: Bronze   
Description: During the peptide identification step, the search engine uses a decoy database to statistically access the quality of the peptide identifications. Multiple methods are available to generate the decoy databases (e.g reverse, random, etc). We recommend to mention the strategy used to generate the decoy database in the main manuscript.    
Fields: Proteomics, ProteoGenomics  

Name: If a custom (ie. non-publicly available) database was used, this database is deposited in the public repository or submitted as supplementary data  
Category: Bronze  
Description:  This includes databases, where decoy databases were generated using randomization. In ProteoGenomics studies sequencing data is often used to create custom protein databases (FASTA files) for the subsequent identification step. In these cases, such custom FASTA files should be made available to ensure reproducibility. In case of human studies, the files can be access-protected.
Fields:  Proteomics, ProteoGenomics 

Name: Custom spectral libraries should be publicly available
Category: Bronze   
Description: If custom spectral libraries are used for peptide / protein identification, the libraries should be deposited in the public repository. If the libraries are publicly available, the source, version (if available) or date of download should be mentioned in the manuscript.
Fields: Proteomics, ProteoGenomics  

Name: The search engine(s) including their exact versions is/are specified  
Category: Bronze  
Description: During the identification step a `search engine` is used to map the obtained mass spectra to the corresponding peptide sequence. In this rule, we recommend to report the software version in the main manuscript.   
Fields: Proteomics, ProteoGenomics

Name: All relevant, non-default settings, such as precursor ion tolerance, fragment ion tolerance, in-silico digestion rule (ie. enzyme), allowed missed cleavages, static and variable post-translational modifications are specified  
Category: Bronze  
Description:  
Fields: Proteomics, ProteoGenomics  

Name: The methods used to determine the identification false discovery rates (at PSM, peptide and/or protein levels) and the respective thresholds 
are specified   
Category: Bronze   
Description:    
Fields: Proteomics, ProteoGenomics    


Name: When available, the used parameter/configuration file is deposited alongside the data in a public repository or alternatively submitted as supplementary data   
Category: Silver   
Description: Several search engines are configured through parameter files. If this is supported by the used software, the used parameter files should
be either deposited in a public repository (alongside the RAW data) or submitted as supplementary data.
Fields: Proteomics, ProteoGenomics   


### MS-based Quantitative

SectionDescription: This section refers to the step in the analysis where quantitative values are derived for the measured molecules. In proteomics,
for example, the result of this process is a table with protein expressions and their abundance in the various samples.

Name: The software used to extract quantitative values including its parameters and version is specified    
Category: Bronze   
Description: This refers to the software to create abundance values from the RAW spectra. For example, the software used to
extract precursor ion intensities, or reporter ion intensities etc.
Fields: all

Name: The method used to aggregate PSM level quantitative values on the peptide and protein levels is specified   
Category: Bronze   
Description: This refers to the step where the measured PSM-level quantitative values are aggregated at the protein level.
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

SectionDescription: This section refers to the step where the obtained quantitative data is analysed to, generally, identify differentially
expressed molecules between the different groups of samples.

Name: The software used to perform the statistical analysis (ie. differential expression analysis) is specified including its version    
Category: Bronze   
Description:   
Fields: all

Name: The method used to determine the sample size and the power of the study is specified (if applicable)   
Category: Bronze   
Description:   
Fields: all

Name: Any statistical test is named and the resulting p-value/threshold specified    
Category: Bronze   
Description: This includes the information whether the test is one- or two-sided, paired or unpaired, as well as all additional parameters passed to the test.
Fields: all

Name: The method used to correct for multiple testing is specified   
Category: Bronze   
Description: If correction for multiple testing was not performed, this needs to be explicitly justified. 
Fields: all

Name: If the software supports loading external libraries, all used libraries including their versions are specified or provided as supplementary file
Category: Bronze   
Description: This refers to libraries commonly used in R, Python, or MatLab. In R, the complete environment can be easily exported using the
`sessionInfo` command.
Fields: all

Name: If any filtering was applied / measurement(s) excluded either manually or as part of the software algorithms, this must be clearly stated    
Category: Bronze   
Description:    
Fields: all

Name: Any transformation of data (e.g., log transformation) manually or as part of a software function/test is specified including the order that these transformations were performed   
Category: Bronze  
Description:   
Fields: Proteomics, ProteoGenomics   

Name: If the software supports the export of the statistical analysis steps (for example R scripts) these are made available for review  
Category: Silver   
Description: We recommend the use of [Jupyter notebooks](https://jupyter.org) to record and share a complete analysis workflow.
Fields: all

Name: If a model with multiple parameters is created, the formula for the said model is declared  
Category: Silver  
Description: This most commonly refers to the use of linear models, used, for example, in [limma](https://www.bioconductor.org/packages/release/bioc/html/limma.html) for the analysis of differentially expressed proteins.
Fields: all

Name: If the software supports the export of the statistical analysis steps (for example R scripts) these are submitted as supplementary data  
Category: Gold 
Description:  We recommend the use of [Jupyter notebooks](https://jupyter.org) to record share a complete analysis workflow.
Fields: all

Name: Underlying data for all figures (where applicable) is made available  
Category: Gold  
Description: During the downstream analysis multiple figures complement the final results of the manuscript. We recommend to make the underlying data of all figures available (where applicable) as supplementary information of the manuscript or as part of the dataset. Ideally, the code to create these figures should be made available as well (for example using [Jupyter notebooks](https://jupyter.org)).
Fields: all



