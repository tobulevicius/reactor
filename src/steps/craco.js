const helpers = require('../helpers/helpers.js');
const fs = require('fs');

const Install = async () => {
	await helpers.RunCommand('npm install @craco/craco');
}

const UpdatePackage = () => {
	let data = fs.readFileSync(process.cwd() + '/package.json', {encoding: 'utf-8'});
	data = data.replace(/react-scripts start/g, 'craco start');
	data = data.replace(/react-scripts build/g, 'craco build');
	data = data.replace(/react-scripts test/g, 'craco test');
	data = data.replace(/react-scripts eject/g, 'craco eject');
	fs.writeFileSync(process.cwd() + '/package.json', data);
}

const CreateConfig = () => {
	fs.writeFileSync(process.cwd() + '/craco.config.js', `module.exports = {
		style: {
		postcss: {
		plugins: [
			require('tailwindcss'),
			require('autoprefixer'),
		],
		},
	},
}`);
}

module.exports = {
	Install,
	UpdatePackage,
	CreateConfig
}