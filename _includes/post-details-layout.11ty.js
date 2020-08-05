exports.data = {
  blog_title: "My Rad Blog"
};

exports.render = function (data) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${blog_title} | ${data.title}</title>
  </head>
  <body>
    <h1>${data.title}</h1>
    ${data.content}
  </body>
</html>`;
};