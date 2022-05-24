# meteor-monorepo-issue

Public repo to share with MeteorJS to identify a monorepo problem

## Setup

- install [pnpm](https://pnpm.io/installation)
- install [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- run `nvm use`
- run `pnpm i`
- open a terminal and run `pnpm build` from the root to build the typescript projects
- open another terminal and run `pnpm start` from the root to start meteor

## Problem

Meteor fails to start with the error 

```
Unable to resolve some modules:

  "@snowplow/browser-tracker-core" in         
/Users/foo/Projects/lessonup/meteor-monorepo-issue/apps/myapp/node_modules/@snowplow/browser-tracker/dist/index.module.js
(web.browser)
  "@snowplow/tracker-core" in                 
/Users/foo/Projects/lessonup/meteor-monorepo-issue/apps/myapp/node_modules/@snowplow/browser-tracker/dist/index.module.js
(web.browser)
                                              
If you notice problems related to these missing modules, consider
running:
                                              
  meteor npm install --save @snowplow/browser-tracker-core
@snowplow/tracker-core
```

This only occurs when you actually use something from the `@snowplow/browser-tracker` package at `apps/myapp/imports/ui/App.tsx`. It will be fixed when you install all the child dependencies yourself, but I believe this is not really the solution. Also, I already needed to install the `scheduler` and `@babel/runtime` depedencies, most likely because of the same issues.

Note that changing the `node-linker=hoisted` setting in the `.npmrc` file didn't help as well.
