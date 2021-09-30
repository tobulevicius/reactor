# Reactor
[![forthebadge](https://forthebadge.com/images/badges/0-percent-optimized.svg)]()
[![forthebadge](https://forthebadge.com/images/badges/you-didnt-ask-for-this.svg)]()
[![forthebadge](https://forthebadge.com/images/badges/made-with-crayons.svg)]() 
[![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://github.com/tobulevicius/reactor)

[![npm version](https://badge.fury.io/js/@tobulevicius%2Freactor.svg)](https://www.npmjs.com/package/@tobulevicius/reactor)

Reactor is a tool that sits on top of create-react-app and configures Tailwind and Craco to create ready-to-use TypeScript or JavaScript, Tailwind projects.

Reactor will create a new React project utilising create-react-app (This wheel doesn't need to be reinvented). It will then install and configure both Tailwind and Craco by creating config files and updating the scripts within your `package.json` file so that you're ready to get started straight away.

This tool was born out of frustration on my end when creating new personal projects, the extra steps to trudge through to get Tailwinds ready was a bother on my end. So I figured, in typical developer fashion, I would spend hours creating this tool and learning how hard it is to create your own damn spinner in a terminal that isn't extremely janky (Gave up, found a great package that deals with it for me.) whilst having a breakdown over terminal text colour, to save myself and hopefully you about 2-5 minutes of extra setup.

## Usage
`npx @tobulevicius/reactor [options]`

## Options
`--typescript` or `-t`  
Creates a TypeScript enabled React project. If this option is not supplied the project will default to JavaScript.  
`--tailwind` or `-tw`  
Enables Tailwind installation and configuration. If this option is not supplied the project will not have Tailwind configured.

## Examples
`npx @tobulevicius/reactor -t -tw`  
Will create a React project that has TypeScript enabled and Tailwind installed and configured.

`npx @tobulevicius/reactor -tw`  
Will create a JavaScript React project that has Tailwind installed and configured.