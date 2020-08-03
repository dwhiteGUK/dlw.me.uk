const { isModuleDeclaration } = require('babel-types');

module.exports = (eleventyConfig) => {

  eleventyConfig.addPassthroughCopy("assets");

  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: 'njk',
    templateFormats: ['html', 'njk', 'md'],
    dir: {
      input: 'src',
      output: '_site',
      includes: 'incudes'
    }
  }
}