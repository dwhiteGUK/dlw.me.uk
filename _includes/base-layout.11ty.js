const head = require("./global/head.11ty.js");
const contact = require("./global/contact.11ty.js");
const menu = require("./global/menu.11ty.js");

exports.data = {
  blog_title: "dlw"
};

exports.render = function ({ blog_title, title, content }) {
  return `<!DOCTYPE html>
  <html lang="en">  
  ${head(blog_title, title)}
  <body class="bg-gray-100 text-gray-700 font-sans quicksand">
  
      <div class="p-6 sm:p-10 md:p-16 flex flex-wrap">
          ${menu()}
          
          ${content}

          ${contact()}
  
      </div>
  
      <!-- Pin to top right corner -->
      <div class="absolute top-0 right-0 h-12 w-18 p-4">
          <button class="js-change-theme focus:outline-none">🌙</button>
      </div>
  
      <script>
          //Toggle mode
          const toggle = document.querySelector('.js-change-theme');
          const body = document.querySelector('body');
          //const profile = document.getElementById('profile');
  
          toggle.addEventListener('click', () => {
              if (body.classList.contains('text-gray-700')) {
                  toggle.innerHTML = "☀️";
                  body.classList.remove('text-gray-700');
                  body.classList.add('text-gray-300');
                  body.classList.remove('bg-gray-100');
                  body.classList.add('bg-gray-900');
              } else {
                  toggle.innerHTML = "🌙";
                  body.classList.remove('text-gray-300');
                  body.classList.add('text-gray-700');
                  body.classList.remove('bg-gray-900');
                  body.classList.add('bg-gray-100');
  
              }
          });
      </script>
  
  </body>
  
  </html>`;
};