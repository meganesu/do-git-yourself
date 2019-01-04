const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile('Hello world!');
});

app.post('/api/v1/run-command', (req, res) => {
  const { command } = req.body.command;
  res.json({
    status: 'success',
    command,
  });
});

app.get('/api/v1/commit', (req, res) => {
  res.json({ command: 'commit' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));