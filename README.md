# DX

[![CI](https://github.com/neofinancial/dx/actions/workflows/ci.yml/badge.svg)](https://github.com/neofinancial/dx/actions/workflows/ci.yml)

A collection of DX tools and apps

## Get in touch

If you have questions or need help you can contact the DX Squad in our [Slack channel (#squad-dx)](https://neofinancial.slack.com/archives/C011HAS9DTP) or by mentioning `@dx-squad`. You can also make a bug report or start a discussion on GitHub using the links below.

## Bug reports

If you've found a bug in on of our apps you can report it here. Please make sure you [search the issues](https://github.com/neofinancial/dx/issues) first to see if someone else has already reported the bug.

- [Build Monitor](https://github.com/neofinancial/dx/issues/new?assignees=&labels=build+monitor%2C+needs+triage&template=build-monitor-template.md)
- [Code Coverage](https://github.com/neofinancial/dx/issues/new?assignees=&labels=code+coverage%2C+needs+triage&template=code-coverage-template.md)
- [Contributor Stats](https://github.com/neofinancial/dx/issues/new?assignees=&labels=contributor+stats%2C+needs+triage&template=contributor-stats-template.md)
- [Neo Bot](https://github.com/neofinancial/dx/issues/new?assignees=&labels=neo+bot%2C+needs+triage&template=neo-bot-template.md)
- [Neo CLI](https://github.com/neofinancial/dx/issues/new?assignees=&labels=neo+cli%2C+needs+triage&template=neo-cli-template.md)
- [General](https://github.com/neofinancial/dx/issues/new?assignees=&labels=bug%2C+needs+triage&template=bug-report-template.md)

## Discussions

Share ideas and ask and answer questions with the DX Squad and other developers.

- [General](https://github.com/neofinancial/dx/discussions/categories/general) - Chat about anything and everything here
- [Feature Requests](https://github.com/neofinancial/dx/discussions/categories/feature-requests) - Request a new feature or enhancement in an existing app
- [Ideas](https://github.com/neofinancial/dx/discussions/categories/ideas) - Share ideas for new tools, workflows, apps, etc.
- [Q&A](https://github.com/neofinancial/dx/discussions/categories/q-a) - Ask the team for help
- [Show and tell](https://github.com/neofinancial/dx/discussions/categories/q-a) - Show off something you've made

## Projects

### Apps

Web applications

- [coverage-dashboard](apps/coverage-dashboard) - Test coverage dashboard
- [dev-dashboard](apps/dev-dashboard) - The dev portal

### Packages

Shared libraries used by other apps

- [dx-components](packages/dx-components) - Shared React components used by DX web apps
- [icims-caching-job](packages/icims-caching-job) - A serverless app that fetches and caches jobs from the iCIMS API (this should be moved into a `services` directory eventually as it's not a shared library)
- [shiftleft-client](packages/shiftleft-client) - A client library for the ShiftLeft API

### Tools

CLI apps and scripts

- [github](tools/github) - A CLI for making changes across GitHub repos
- [github-screenshotter](tools/github-screenshotter) - A script to take screenshots of pages on GitHub
- [github-scripts](tools/github-scripts) - A script to pull code review data from GitHub
- [outline](tools/outline) - A CLI to get page data from Outline
- [twilio](tools/twilio) - A CLI to manage Twilio device bindings

## External Projects

Some DX projects are not included in this repo

### Apps

- [build-monitor](https://github.com/neofinancial/build-monitor) - An app to view build pipelines and releases
- [contributor-stats](https://github.com/neofinancial/contributor-stats) - An app to display developer stats and profiles
- [dev-center](https://github.com/neofinancial/dev-center) - GraphQL graph explorer
- [service-dashboard](https://github.com/neofinancial/service-dashboard) - Service status dashboard

### Packages

- [config-dug](https://github.com/neofinancial/config-dug) - Config loader library

### Tools

- [awsx](https://github.com/neofinancial/awsx) - A CLI to switch AWS profiles
- [ccscan](https://github.com/neofinancial/ccscan) - A tool to scan files for credit card numbers
- [dev-environment](https://github.com/neofinancial/dev-environment) - Docker development environment
- [eslint-config-neo](https://github.com/neofinancial/eslint-config-neo) - Shared ESLint config
- [neo-bot](https://github.com/neofinancial/neo-bot) - Neo Slack bot
- [neo-cli](https://github.com/neofinancial/neo-cli) - The Neo development CLI
- [neo-migration](https://github.com/neofinancial/neo-migration) - A CLI tool to run MongoDB database migrations
- [neo-test](https://github.com/neofinancial/neo-test) - A Jest wrapper for running tests in groups

### Services

- [build-monitor-collector](https://github.com/neofinancial/build-monitor-collector) - A service that collects GitHub and CodePipeline events
- [contributor-stats-service](https://github.com/neofinancial/contributor-stats-service) - A service that collects GitHub and Shortcut/JIRA events

### GitHub Actions

- [coverage-upload-action](https://github.com/neofinancial/coverage-upload-action) - Collect and upload test coverage
- [mongo-memory-server-action](https://github.com/neofinancial/mongo-memory-server-action) - Run GitHub Actions with an in-memory MongoDB database
- [ticket-check-action](https://github.com/neofinancial/ticket-check-action) - Enforce that PRs have associated ticket numbers

## Development

1. Clone this repo
1. Install dependencies with `npm install`
1. Login to Turborepo `npx turbo login`

---

DX Squad ❤️ You
