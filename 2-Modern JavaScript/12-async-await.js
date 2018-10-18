const https = require('https');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

function fetch (url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (rd) => data = data + rd);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    });
  });
}

fetch('https://www.javascript.com/')
  .then(data => {
    console.log(data.length + " Hola a todos 1");
  });

  (async function read() {
    const data = await fetch('https://www.javascript.com/');

    console.log(data.length + " Hola a todos 2");
  })();