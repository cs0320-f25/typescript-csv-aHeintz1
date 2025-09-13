# Sprint 1: TypeScript CSV

### Task C: Proposing Enhancement

- #### Step 1: Brainstorm on your own.

Parser doesn't handle quoted fields with commas, the empty fields aren't kept, and there is no way to see the different row lengths

- #### Step 2: Use an LLM to help expand your perspective.

LLM suggeseted that large file streaming support, detailed parse errors, and to handle different functions such as semicolon and tab are missing.

- #### Step 3: use an LLM to help expand your perspective.

    Include a list of the top 4 enhancements or edge cases you think are most valuable to explore in the next week’s sprint. Label them clearly by category (extensibility vs. functionality), and include whether they came from you, the LLM, or both. Describe these using the User Story format—see below for a definition. 

    Include your notes from above: what were your initial ideas, what did the LLM suggest, and how did the results differ by prompt? What resonated with you, and what didn’t? (3-5 sentences.) 

    Functionality:
    I think quoted fields with commas need to be handled be so last name, first name aren't in different fields. This idea came from me while looking at the csv file it is must need that names stay together, but reinforced by LLM

    Another crucial need for the csv file is for the colums to be consistent so data wont be misaligned and make the csv file incorrect. This idea what thought about by me. We have to make sure that the data that was inputted into the file keeps with the same data

    Extensibility:
    For the csv we need to tell the parser whether the first row contains headers so the rest of the data falls into place correctly. This was thought about by LLM. This will keep the CSV file from being incorrect

    Having the error objects instead of console logs will handle malformed rows smoother. This was thought of by the LLM. It leaned towards edge cases but really emphasized ease of use. Having this will drastically improve unsability    

### Design Choices

### 1340 Supplement

- #### 1. Correctness

- #### 2. Random, On-Demand Generation

- #### 3. Overall experience, Bugs encountered and resolved
#### Errors/Bugs:
#### Tests:
#### How To…

#### Team members and contributions (include cs logins):

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI):
#### Total estimated time it took to complete project:
#### Link to GitHub Repo:  
