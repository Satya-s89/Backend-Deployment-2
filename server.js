const express = require('express');
const app = express();
const PORT = 5000;

app.get('/hello', (req, res) => {
  res.send('Hello world this is my first backend deployment');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});