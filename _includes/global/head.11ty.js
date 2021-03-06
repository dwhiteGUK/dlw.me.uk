module.exports = (blog_title, title) => `
<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>${blog_title} | ${title}</title>
      <meta name="description" content="">
  
      <link rel="stylesheet" href="https://unpkg.com/tailwindcss/dist/tailwind.min.css">
      <!--Replace with your tailwind.css once created-->
  
      <link href="https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap" rel="stylesheet">
  
      <style>
          .quicksand {
              font-family: 'Nunito', sans-serif;
          }
          
          ::selection {
              background: #E9D8FD;
        color:#202684;
  
              /* WebKit/Blink Browsers */
          }
          
          ::-moz-selection {
              background: #E9D8FD;
        color:#202684;
              /* Gecko Browsers */
          }
          
          a:not(.nav) {
              font-weight: bold;
              text-decoration: none;
              padding: 2px;
              background: linear-gradient(to right, #5A67D8, #5A67D8);
              background-repeat: repeat-x;
              background-size: 100% 2px;
              background-position: 0 95%;
              -webkit-transition: all 150ms ease-in-out;
              -moz-transition: all 150ms ease-in-out;
              -ms-transition: all 150ms ease-in-out;
              -o-transition: all 150ms ease-in-out;
              transition: all 150ms ease-in-out;
          }
          
          a:hover {
              color: #B794F4;
              font-weight: bold;
              text-decoration: none;
              padding-bottom: 2px;
              background: linear-gradient(to right, #9F7AEA, #E9D8FD);
              background-repeat: repeat-x;
              background-size: 100% 2px;
              background-position: 50% 95%;
              -webkit-transition: color 150ms ease-in-out;
              -moz-transition: color 150ms ease-in-out;
              -ms-transition: color 150ms ease-in-out;
              -o-transition: color 150ms ease-in-out;
              transition: color 150ms ease-in-out;
          }
          
          a:focus {
              outline: none;
              background: #E9D8FD;
          }
      </style>
  
  </head>
`;