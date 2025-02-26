const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve i file statici del frontend dopo il build
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Esempio di API
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Backend in ascolto su http://localhost:${port}`);
});
