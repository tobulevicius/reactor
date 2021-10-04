const chalk = require('chalk');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');
const files = require('./files');

/**
 * Runs a console command.
 * @param {string} command The command to run.
 */
async function RunCommand(command) {
	try {
		await exec(command + " >nul 2>&1");
	} catch (e) {
		console.error(e);
	}
}

/**
 * Print some colourful text to the console.
 * @param {string} message The message to output.
 * @param {string} color The chalk colour to use.
 */
const InformationText = (message, color) => {
	console.log(chalk`{${color} ${message}}`);
}

/**
 * Prints out the help statement.
 */
const HelperText = () => {
	console.log(chalk`Reactor
{greenBright
Usage:
npx @tobulevicius/reactor [--typescript or -t] [--tailwind or -tw] 
}
{blueBright
Flags:
--typescript or -t: Typescript React project, default is JavaScript.
--tailwind or -tw: Install and configure Tailwind.
}`);
}

/**
 * Remakes the src and public folders with Reactor-made files. Cleans up the project structure and makes it a little less sore on the eyes.
 * @param {boolean} typescript Whether this is a TS project or not.
 * @param {boolean} tailwind Whether Tailwinds is being installed.
 */
const CleanupProject = async (typescript, tailwind) => {
	// Delete existing src and public
	fs.rmdirSync(process.cwd() + '/src', { recursive: true });
	fs.rmdirSync(process.cwd() + '/public', {recursive: true});

	// Remake the folders.
	fs.mkdirSync(process.cwd() + '/src');
	fs.mkdirSync(process.cwd() + '/public');

	// Get rid of the default React readme.
	fs.unlinkSync(process.cwd() + '/README.md');
	
	// Create a new CSS file in the src folder. If tailwind is enabled this file will be used for the component imports.
	fs.writeFileSync(process.cwd() + '/src/index.css', files.css(tailwind));

	// Create a new react base file. If tailwind is enabled this will use tailwind classes for styling.
	fs.writeFileSync(process.cwd() + `/src/${typescript ? 'index.tsx' : 'index.js'}`, files.reactAppFile(tailwind));

	// Create a new HTML file for the clean public folder. Removes all of the default imagery and icons and metadata tags.
	fs.writeFileSync(process.cwd() + '/public/index.html', files.HTML);
}

module.exports = {
	RunCommand,
	InformationText,
	HelperText,
	CleanupProject
}