import express from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ app });
const handle = app.getRequestHandler();

// Route handlers
import { startedGame } from './controllers/game';
import { user } from './controllers/users';

app
	.prepare()
	.then(() => {
		const server = express();

		server.get('/game/:step', startedGame.bind(app));
		server.get('/users/:login', user.bind(app));

		server.get('*', (req, res) => handle(req, res));
		server.listen(3000, err => {
			if (!err) {
				console.log('Ready to http://localhost:3000');
			}
		});

	})
	.catch(ex => {
		console.error(ex.stack);
		process.exit(1);
	});
