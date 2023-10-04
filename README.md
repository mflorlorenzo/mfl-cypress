
# MFL: Cypress

Basic automated suitcase for practice purposes.

## SETUP

1. Clone the project.
2. `npm install`

## How to run tests:

There are different scripts depending on which spec file and which environment you want to run (homepage, member page, stage, production, etc)

```bash
npm run cy:prod
npm run cy:member:prod
npm run cy:qa
```

## Smoke & Regression test

You can add tests to the "Smoke Test Session" adding a tag into the 'discribe' or 'it' for each one.
If the test does not have the tag, will be part of the regression.

```bash
{tags: 'smoke'}
```

Use the following script to run the Smoke tests session:

```bash
  npm run cy:prod:smoke
  npm run cy:qa:smoke
```

## Custom Commands

There are custom commands created which are located in support/commands.js Using those commands (functions) allows us to write test in extremely simple way and avoid code duplication.


## Authors

- [@mflorlorenzo](https://www.github.com/mflorlorenzo)

