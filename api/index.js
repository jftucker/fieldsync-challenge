const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/fetch/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/api/fetch/:id', async (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM users WHERE ID = $1';
  try {
    const result = await db.query(query, [id]);
    if (!result.rows[0]) return res.status(404).send('Resource does not exist');
    return res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/api/save', async (req, res) => {
  const { id, name, email, phone, company } = req.body;
  const query =
    'INSERT into users (id, name, email, phone, company) values($1, $2, $3, $4, $5) RETURNING id, name, email, phone, company';
  try {
    const result = await db.query(query, [id, name, email, phone, company]);
    return res.json(result.rows[0]);
  } catch (err) {
    console.error(err.detail);
    if (err.detail.includes('already exists.'))
      return res.status(409).send('User already exists');
    return res.status(500).send('Internal Server Error');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
