import { homePage, aboutPage, serverError, notFound, toursRequest } from './lib/handlers.js';
import { headerRequest } from './lib/headersRequest.js';
import { engine as expressHandlebars } from 'express-handlebars';
import { fileURLToPath } from 'url';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 3000;


/**
 * middleware
 */

app.disable('x-powered-by');
app.use(bodyParser.urlencoded({ extended : false }));
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

app.get('/', homePage);

app.get('/about', aboutPage);

app.get('/headers', headerRequest);

app.get('/api/tours', toursRequest);

/**
 * 404 and 500 custom pages.
 */

app.use(notFound);

app.use(serverError);

app.listen(port, () => {
  console.log(`Express running on port ${port};\n` + `Press Ctrl-C to terminate the process.`);
})
