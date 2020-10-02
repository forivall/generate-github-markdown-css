const postcss = require('postcss');

module.exports = postcss.plugin('extract-userstyle', () => root => {
	root.walkAtRules('-moz-document', rule => {
		rule.each(child => rule.before(child));
		rule.remove();
	});
});
