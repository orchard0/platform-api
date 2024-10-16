const app = require('./server/index');
const { PORT = 9090 } = process.env;

app.listen(PORT, () =>
	console.log(
		`Bismillah ar-Rahman ar-Raheem. Listening on http://localhost:${PORT}`
	)
);
