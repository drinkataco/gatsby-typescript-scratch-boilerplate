# Gatsby Advanced Bare-Bones Typescript Starter

![Lint and Tests](https://github.com/drinkataco/gatsby-typescript-scratch-boilerplate/actions/workflows/main.yml/badge.svg)

A more opinionated starter for gatsby, whilst trying to keep the contents and dependencies still somewhat lightweight.

## Core Tech

- Gatsby 4
- React
- markdown
- Typescript
- eslint (airbnb rules)
- tailwind

## Running and Building

To run in development mode run the command `npm run develop`.

To build static files for production run `npm run build`.

Alternatively, you can use the Dockerfile provided to build straight to an nginx environment. A command like `docker run -d -p 8111:80 $(docker build -q .)` should help you.

## Adding Content

Content can be added to [/content](./content) as a markdown file.

Configuration you can add the the frontmatter:

- **title** - The page title
- **description** - The page description

## Default Component List

The template ships with the following main component directories:

- [/src/components/]('./src/components') - this is where page components are stored. Such as [Layout]('./src/components/Layout'), [Header]('./src/components/Header'), and [Navigation]('./src/components/Navigation')
- [/src/pages/]('./src/pages') - this is where page definitions are held. For example, you can include static pages (such as 404, the index)
- [/src/templates](./src/templates') templates for our dynamic content – our markdown files


## Preview

You can preview the gatsby starter at the following link: [gatsby-typescript-scratch-boilerplate.proj.shw.al](https://gatsby-typescript-scratch-boilerplate.proj.shw.al/).

This preview was generated using the [cdk-static-site](https://github.com/drinkataco/cdk-static-site) tool. Check it out!
