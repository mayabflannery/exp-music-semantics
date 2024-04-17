## Music description and categorization: A semantic analysis of user generated tags

Abstract: 

Music is a powerful tool in its ability to evoke intense emotions and vivid mental imagery. It is pervasive throughout everyday life, and we may spend more time listening to music than any other daily activity. There are many ways to think about music, but there is a lack of literature investigating how we communicate about music. How do we describe the music that we listen to? To investigate that question and examine the relationships between musical tags, higher levels of categorization, and genre is the aim of this study. In this study, we seek to explore the ways that listeners describe music and examine whether there are possible relationships between musical tag words and higher levels of meaning. Our usage of a large music database will help address the sample size limitations of previous studies, and we hope to contribute to the emerging body of literature on music description and categorization.

## Data

### FMA Dataset

The entire dataset is not uploaded here. Only `genres.csv` which contain the coded genre metadata used in other files.

- See FMA [repository](https://github.com/mdeff/fma)
- Download [raw data](https://os.unil.cloud.switch.ch/fma/fma_metadata.zip) as zip and extract to `data-FMA` folder

## Data analysis files

### [demoAnalysis.qmd](https://github.com/mayabflannery/exp-music-semantics/blob/ffe45f733bdbe043fb625c279b27107e465b7138/analysis/demoAnalysis.qmd)

### [makeFMASubset.ipynb](https://github.com/mayabflannery/exp-music-semantics/blob/ffe45f733bdbe043fb625c279b27107e465b7138/analysis/makeFMASubset.ipynb)

Process FMA data. Filter `tracks.csv` from the raw FMA dataset:

- Keep rows that contain non-empty tags
- Keep columns with album, artist, title, and tags
- Writes to [`data-processed/tracks-tags.csv`](https://github.com/mayabflannery/exp-music-semantics/blob/d9348f33798f4cd198f8991bb273bc1a55fefb17/analysis/data-processed/tracks-tags.csv)

### [analyseFMASubset.ipynb](https://github.com/mayabflannery/exp-music-semantics/blob/ffe45f733bdbe043fb625c279b27107e465b7138/analysis/analyseFMASubset.ipynb)


## References 

### MultiIndexing

[pandas](https://pandas.pydata.org/pandas-docs/version/1.2.1/user_guide/advanced.html#advanced-xs)

### MTG-Jamendo Dataset

Potential future extension
