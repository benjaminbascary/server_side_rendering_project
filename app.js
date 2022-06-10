import { engine as expressHandlebars } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import randomFortune from './lib/fortuneCookies.js';
import express from 'express';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 3000;

/**
 * STATIC middleware
 */

app.use(express.static(__dirname + '/public'));

/**
 * HandleBars handler
 */

app.engine('handlebars', expressHandlebars({
	defaultLayout : 'main'
}))
app.set('view engine', 'handlebars');

/**
 * Routes
 */

app.get('/', (req, res) => {
	res.render('home');
})

app.get('/about', (req, res) => {
	res.render('about', {fortune: randomFortune});
})

/**
 * 404 and 500 custom pages.
 */

app.use((req, res) => {
	res.status(404);
	res.render('404');
})

app.use((err, req, res, next) => {
	console.error(err);
	res.status(500);
	res.render('500');
})

app.listen(port, () => {
  console.log(`Express running on port ${port};\n` + `Press Ctrl-C to terminate the process.`);
})
