const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const css = fs.readFileSync(`${__dirname}/../client/style.css`);

const getIndex = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(index);
  res.end();
};

const getCSS = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/css' });
  res.write(css);
  res.end();
};

module.exports = {
  getIndex,
  getCSS,
};
