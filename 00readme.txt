simple typescript react with modal

source from: 

https://www.typescriptlang.org/docs/handbook/react-&-webpack.html
https://daveceddia.com/open-modal-in-react/


some deviations from the article:

  npm install --save webpack
  npm install --save webpack-cli


to build the project automatically:

  npm run build


then to start a dev server:

  npm run server


then browse the page:

  http://localhost:8080/index.html


---
alternatively...

to build the project manually:

  webpack


then use a browser and open the file "index.html",
you should get the following:

  Hello from TypeScript and React!


alternatively, you can install the web-server:

  npm install -g --save webpack-dev-server


and start the server with:

  webpack-dev-server


then browse the page:

  http://localhost:8080/index.html


