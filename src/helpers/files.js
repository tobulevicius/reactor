const tailwindCSS = `@tailwind base;
@tailwind components;
@tailwind utilities;`;

const regularCSS = `body, html {
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
}`;

const HTML = `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>Reactor ❤</title>
	</head>
	<body>
		<noscript>You need to enable JavaScript to run this app.</noscript>
		<div id="root"></div>
	</body>
</html>	
`;

const css = (tailwind) => {
	if(tailwind) return tailwindCSS;
	if(!tailwind) return regularCSS;
}

const reactAppFile = (tailwind) =>{ return `import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<div className='${tailwind ? 'w-screen h-screen flex items-center justify-center' : 'container'}'>
			<h1>Thanks for using Reactor 👍</h1>
		</div>
	</React.StrictMode>,
	document.getElementById('root')
);`
}

module.exports = {css, reactAppFile, HTML}