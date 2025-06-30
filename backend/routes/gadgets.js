const express = require('express');
const pool = require('../config/db');
const router = express.Router();

const authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM gadgets');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', authenticate, async (req, res) => {
  const { name, description, price, quantity, image_url } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO gadgets (name, description, price, quantity, image_url) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, description, price, quantity, image_url]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/:id', authenticate, async (req, res) => {
  const { id } = req.params;
  const { name, description, price, quantity, image_url } = req.body;
  try {
    const result = await pool.query(
      'UPDATE gadgets SET name = $1, description = $2, price = $3, quantity = $4, image_url = $5 WHERE id = $6 RETURNING *',
      [name, description, price, quantity, image_url, id]
    );
    if (result.rows.length === 0) return res.status(404).json({ message: 'Gadget not found' });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/:id', authenticate, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM gadgets WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) return res.status(404).json({ message: 'Gadget not found' });
    res.json({ message: 'Gadget deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;