const express = require('express');
const db = require('./db');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/fetch/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
