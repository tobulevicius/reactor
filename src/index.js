#!/usr/bin/env node

// Imports.
const helpers = require('./helpers/helpers.js');
const react = require('./steps/react.js');
const tailwind = require('./steps/tailwind.js');
const craco = require('./steps/craco.js');
const CLI = require('clui'), Spinner = CLI.Spinner;
const figlet = require('figlet');
const chalk = require('chalk');

const spinFrames = ['\\', '|', '/', '-'];

async function Run(ts, tw) {
	let progress = new Spinner(`Creating ${ts ? 'TypeScript' : 'JavaScript'} React Project.`, spinFrames);
	progress.start();
	await react.Install(ts)

	if(tw) {
		progress.stop();
		progress.message('Installing Tailwind.');
		progress.start();
		await tailwind.Install()
		
		progress.stop();
		progress.message('Creating Tailwind Config.');
		progress.start();
		await tailwind.CreateConfig()

		progress.stop();
		progress.message('Craco Install and Setup.');
		progress.start();
		await craco.Install()
		craco.UpdatePackage();
		craco.CreateConfig();
	}

	progress.stop();
	progress.message('Initialising Reactor Template.');
	progress.start();
	helpers.CleanupProject(ts, tw);
	progress.stop();
}

const Main = async () => {
	// Grab args.
	const [,, ...args] = process.argv;
	
	// Flags.
	let ts = false;
	let tw = false;
	let help = false;
	
	// Extract flags if they exist.
	args.forEach(argument => {
		if(argument === '--typescript' || argument === '-t'){
			ts = true;
		}
		
		if(argument === '--tailwind' || argument === '-tw'){
			tw = true;
		}
	
		if(argument === '--help' || argument === 'help' || argument === '-h' || argument === '?') {
			help = true;
		}
	});
	
	if(!help) {
		figlet('Reactor', function(err, data) {
			if (err) {
				console.log('Something went wrong...');
				console.dir(err);
				return;
			}
			helpers.InformationText(data, 'yellow')
		});
	
		await Run(ts, tw);

		helpers.InformationText('Thanks for using Reactor to create your project!\n', 'yellow')
		console.log(chalk`Use {blueBright.bold npm run start} to start the development server.`);
		console.log(chalk`Use {blueBright.bold npm run build} to build your project.`);
		console.log(chalk`\nCreated with {red <3} by {yellow Emilis Tobulevicius}`);
		console.log(chalk`\nWebsite: {yellow.underline https://emilis.co.uk}`);
	} else {
		helpers.HelperText();
	}
}

Main();