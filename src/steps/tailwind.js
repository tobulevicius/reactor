const helpers = require('../helpers/helpers.js');

const Install = async () => {
	await helpers.RunCommand(`npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9`);
}

const CreateConfig = async () => {
	await helpers.RunCommand('npx tailwindcss-cli@latest init');
}

module.exports = {
	Install,
	CreateConfig
}