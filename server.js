const express = require('express');
const http = require('http');
const app = express();

// Initiate server
const server = http.createServer(app);

// // Ensure https://
// if(process.env.NODE_ENV === 'production' && process.env.SSL_NO_REDIRECT !== 'true') {
//   const sslRedirect = require('heroku-ssl-redirect');
//   app.use(sslRedirect());
// }

// Serve assets
app.use('/', express.static(__dirname + '/build'));

app.use((req, res) => {
  // 404
  res.status(404).send('Not Found');
});

// Start listening on port 3000 or provided by server
server.listen(process.env.PORT || 3000, () => {
  console.log('App is listening at %s on port %s',
    server.address().address,
    server.address().port);
});
