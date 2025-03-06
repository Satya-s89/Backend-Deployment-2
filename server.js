const express = require('express');
const app = express();
const PORT = 5000;

app.get('/hello', (req, res) => {
  res.send('Hello world this is my first backend deployment');
});

app.get('/app-info/:id', (req, res) => {
  try{
    console.log(req.params);
    res.send("sucessfull");
  }catch(error){
    res.status(500).json({error: error.message});
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
