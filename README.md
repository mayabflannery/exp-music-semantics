## Experiment design for investigation of music semantic groupings

Experiment design for analysis of music descriptions

## Instructions

Note - To test the experiment on your computer:

- Navigate to the project root directory in the terminal
- type `python -m http.server`
- Navigate to `localhost:8000/test.html` in web browser

When finished testing:

- type `Ctrl-c` to quit the python server.

## Contributors

Catherine Deng, Maya Flannery

## Hypothesis

Variables: Stimulus (4 * 14); Word lists: (14 X 38 X ??)

H_0: When a participant hears a stimulus, they select a random number of random words from each list.
H_1: When a participant hears a stimulus, they select few random words from each list.
H_1: When a participant hears a stimulus, they select few related words from each list.

We can hypothesize the number of genres selected (1 is most likely, 2, 3+ less common)
- use proportion? 10% of available words?

## Instructions

### Jupyter Lab

Using miniconda prompt:

1. Create environment (if first time running analysis)

`> conda env create musicPython`

2. Activate the environment

`> conda activate musicPython`

3. Install the required packages (if first time runnign analysis)

`> conda install pandas matplotlib numpy nodejs nltk jupyterlab`

4. Start jupyter lab

`> jupyter lab`

5. When finished, close jupyter lab, then in prompt:

`> Ctl+C`

6. Then type

`> deactivate`