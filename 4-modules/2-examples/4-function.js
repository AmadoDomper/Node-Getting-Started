// Top-level API is a function

module.exports = (title , nombre) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <title>${title}</title>
    <h1> My Name is ${nombre} </h1>
  </head>
  <body>
  </body>
  </html>
`;