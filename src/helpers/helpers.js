const chalk = require('chalk');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const fs = require('fs');

async function RunCommand(command) {
	try {
		await exec(command + " >nul 2>&1");
	} catch (e) {
		console.error(e);
	}
}

const InformationText = (message, color) => {
	console.log(chalk`{${color} ${message}}`);
}

const HelperText = () => {
	console.log(chalk`Reactor
{greenBright
Usage:
reactor [--typescript or -t] [--tailwind or -tw] 
}
{blueBright
Flags:
--typescript or -t: Typescript React project, default is JavaScript.
--tailwind or -tw: Install and configure Tailwind; clean-up src folder.
}`);
}

const CleanupProject = async (typescript, tailwind) => {
	// Recreate src folder and remove readme.
	fs.rmdirSync(process.cwd() + '/src', { recursive: true });
	fs.mkdirSync(process.cwd() + '/src');
	fs.unlinkSync(process.cwd() + '/README.md');

	if(tailwind) {
		fs.writeFileSync(process.cwd() + '/src/index.css', `@tailwind base;
@tailwind components;
@tailwind utilities;`);
	} else {
		fs.writeFileSync(process.cwd() + '/src/index.css', `body, html {
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	height: 100vh;
	width: 100vw;
}

.container {
	height: 100vh;
	width: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;
}

.container h1 {
	font-size: 1em;
}`);
	}

	// Create basic typescript or javascript file with a react starter within.
	fs.writeFileSync(process.cwd() + `/src/${typescript ? 'index.tsx' : 'index.js'}`, `import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<div className='${tailwind ? 'w-screen h-screen flex items-center justify-center' : 'container'}'>
			<h1>Thanks for using Reactor 👍</h1>
		</div>
	</React.StrictMode>,
	document.getElementById('root')
);`);
}

module.exports = {
	RunCommand,
	InformationText,
	HelperText,
	CleanupProject
}