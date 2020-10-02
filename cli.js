#!/usr/bin/env node
'use strict';
const meow = require('meow');
const githubMarkdownCss = require('.');

const cli = meow(`
	Usage
		github-markdown-css-dark [my-dark-theme.user.css] > <filename>

	Dark theme user.css can be a local file or url.
`);

(async () => {
	console.log(await githubMarkdownCss({darkStyle: cli.input[0]}));
})();
