import chalk from 'chalk';
import './style.css';
import express from 'express';
import path from 'path';

let test = () => console.log(123);
const app = express(), DIST_DIR = __dirname, HTML_FILE = path.join(DIST_DIR, 'index.html');

/*
httpServer.createServer((req, res) => {
  res.writeHead(200);
  setTimeout(() => {
    res.write(`I am currently pausing`);
  }, 5000);
  res.write('Just a random check to make sure I get the event loop');
  res.end();
});

httpServer.listen(8080);

console.log(chalk.green(`Listening on port 8080...`));
*/

app.use(express.static(DIST_DIR))
app.get('*', (req, res) => {
    res.sendFile(HTML_FILE);
})
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(chalk.blue(`App listening to ${PORT}....`));
    console.log('Press Ctrl+C to quit.');
})
