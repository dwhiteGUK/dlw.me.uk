exports.data = {
  layout: "base-layout.11ty.js",
  title: 'Home of dlw running'
};

exports.render = function ({ collections }) {
  return `
      <div class="w-full md:w-1/2 order-1 md:order-2">
          <div class="max-w-md leading-loose tracking-tight">
              <h1 class="font-bold my-12">Home of dlw running</h1>
              <ul>
              ${collections.blog.map((blog) => `<li><a href="${blog.url}">${blog.data.title}</a></li>`).join("\n")}
              </ul>
          </div>
      </div>`;
};