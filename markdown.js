const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');

const markdownLibrary = markdownIt({
  html: true,
  breaks: true,
  linkify: true
}).use(markdownItAnchor, {
  permalink: markdownItAnchor.permalink.headerLink()
});

module.exports = markdownLibrary;
