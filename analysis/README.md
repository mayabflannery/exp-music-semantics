## Data

### FMA Dataset

The entire dataset is not uploaded here. Only `genres.csv` which contain the coded genre metadata used in other files.

- See FMA [repository](https://github.com/mdeff/fma)
- Download [raw data](https://os.unil.cloud.switch.ch/fma/fma_metadata.zip) as zip and extract to `data-FMA` folder

### MTG-Jamendo Dataset

TODO

## Data analysis files

### [demoAnalysis.qmd](https://github.com/mayabflannery/exp-music-semantics/blob/d9348f33798f4cd198f8991bb273bc1a55fefb17/analysis/demoAnalysis.qmd)

Incomplete: Simulation and example plots.

### [makeFMASubset.ipynb](https://github.com/mayabflannery/exp-music-semantics/blob/d9348f33798f4cd198f8991bb273bc1a55fefb17/analysis/makeFMASubset.ipynb)

Process FMA data. Filter `tracks.csv` from the raw FMA dataset:

- Keep rows that contain non-empty tags
- Keep columns with album, artist, title, and tags
- Writes to [`data-processed/tracks-tags.csv`](https://github.com/mayabflannery/exp-music-semantics/blob/d9348f33798f4cd198f8991bb273bc1a55fefb17/analysis/data-processed/tracks-tags.csv)

### [analyseFMASubset.ipynb]()

TODO: Analysis.