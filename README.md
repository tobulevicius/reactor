# Reactor - Simplify the React and Tailwind symbiosis.

	 ____                 _
    |  _ \ ___  __ _  ___| |_ ___  _ __
    | |_) / _ \/ _` |/ __| __/ _ \| '__|
    |  _ <  __/ (_| | (__| || (_) | |
    |_| \_\___|\__,_|\___|\__\___/|_|

[![react](https://badges.aleen42.com/src/react.svg)](https://reactjs.org/)
[![tailwind](https://badges.aleen42.com/src/tailwindcss.svg)](https://tailwindcss.com/)

[![npm](https://badges.aleen42.com/src/npm.svg)](https://www.npmjs.com/package/@tobulevicius/reactor)
[![npm version](https://badge.fury.io/js/@tobulevicius%2Freactor.svg)](https://www.npmjs.com/package/@tobulevicius/reactor)
[![npm version](https://badgen.net/npm/dt/@tobulevicius/reactor)](https://www.npmjs.com/package/@tobulevicius/reactor)

Reactor is a tool that sits on top of create-react-app and configures Tailwind and Craco to create ready-to-use TypeScript or JavaScript, Tailwind projects.

Reactor will create a new React project utilising create-react-app (This wheel doesn't need to be reinvented). It will then install and configure both Tailwind and Craco by creating config files and updating the scripts within your `package.json` file so that you're ready to get started straight away.

This tool was born out of frustration on my end when creating new personal projects, the extra steps to trudge through to get Tailwinds ready was a bother on my end. So I figured, in typical developer fashion, I would spend hours creating this tool and learning how hard it is to create your own damn spinner in a terminal that isn't extremely janky (Gave up, found a great package that deals with it for me.) whilst having a breakdown over terminal text colour, to save myself and hopefully you about 2-5 minutes of extra setup.

## Usage
`npx @tobulevicius/reactor [options]`

I recommend using this via npx for the cleanliness. It will do it's thing and then disappear before you know it. On the other hand, you can of course download the package and run it via:

`reactor [options]`

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

---

## Thanks!
Thank you for any users of Reactor and for any support. This is an incredibly simple project, however I hope it makes life a little easier and gets your ideas flowing into code a little quicker!

[![@tobulevicius](https://badgen.net/twitter/follow/tobulevicius)](https://twitter.com/tobulevicius)

[![Generic badge](https://img.shields.io/badge/Thanks%20for%20using-Reactor-magenta.svg)](https://shields.io/)

[![Generic badge](https://img.shields.io/badge/My%20website:-https://emilis.co.uk-deeppink.svg)](https://emilis.co.uk)

## Good-To-Knows
### React installation instant failure.
If the React installation step, or any of them for the matter, fails almost instantly with an exit code of 1. The highest likelyhood is that the folder that you ran the command in is not named to the NPM standard. Spaces and special characters in the name of the folder will cause issues in NPM.