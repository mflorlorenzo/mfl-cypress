
# MFL: Cypress

This is an automated suitcase which was build to learn Cypress.




## Installation

Install the projec with npm

```bash
  npm install my-project
```
    
## Running Tests

To run tests, run the following command

```bash
  npm run test
```

Commands for environments:

```bash
  npm run cypress:run_prod
  npm run cypress:run_qa
```

You can run smoke or regression tests adding the following command:

```bash
  npm run cypress:run_prod:smoke
  npm run cypress:run_qa:smoke
```
## Custom Commands

There are custom commands created which are located in support/commands.js Using those commands (functions) allows us to write test in extremely simple way and avoid code duplication.


## Authors

- [@mflorlorenzo](https://www.github.com/mflorlorenzo)

