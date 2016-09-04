import express from 'express';

const app = new express();

app.route('/books')
  .get((req, res) => {
    res.json([
      {
        id: 1,
        name: 'Default Book'
      }
    ]);
  });

export default app; 