# meteor-pnpm-monorepo

Public repo to share with MeteorJS to identify a monorepo problem

## Setup

- install [pnpm](https://pnpm.io/installation)
- install [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) (or use `pnpm env`)
- run `nvm use`
- run `pnpm i`
- open a terminal and run `pnpm build` from the root to build the typescript projects
- open another terminal and run `pnpm start` from the root to start meteor

## Idea

The idea is to:

- use `pnpm` workspaces to create isolated packages which can be used by a Meteor Application
- use [typescript references](https://www.typescriptlang.org/docs/handbook/project-references.html) to make the `apps/myapp` responsible for building the dependant packages

### Structure

- apps
  - `myapp`
    - depends on: `package-a`
- packages
  - `package-a`
    - depends on `package-b`
  - `package-b`

## PNPM + Meteor

Meteor and PNPM don't play nicely together out of the box, but there is a way to make this work. Also see [this PR](https://github.com/lessonup/meteor-monorepo-issue/pull/1)

Fixes and findings are thanks to @harryadel

- Set [shared-workspace-lockfile](https://pnpm.io/workspaces#shared-workspace-lockfile) to false in root `.npmrc`.
  Basically Meteor doesn't work naturally with pnpm because it doesn't seem to understand linked node_modules. After running `pnpm install` in Meteor directory, only package-a exists in `node_modules` and the rest is linked from root pnpm-lock which Meteor doesn't like ofc so turns out this option stops this behavior.

- Set [node-linker](https://pnpm.io/npmrc#node-linker) to hoisted in meteor directory not in root `.npmrc`.
  Again, this option stops the sym linking behavior which upsets Meteor but on a more of a local scale compared to the previous one which works in regards to workspaces.

## Open issue

There is 1 open issue where issue doesn't auto reload changes from `package-b`, but it does do that for `package-a`.

This can be work around by using the `METEOR_DISABLE_OPTIMISTIC_CACHING=true` flag.
