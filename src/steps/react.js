const helpers = require('../helpers/helpers.js');

const Install = async (typescript) => {
	await helpers.RunCommand(`npx create-react-app ./${typescript ? ' --template typescript' : ''}`);
}

module.exports = { Install }