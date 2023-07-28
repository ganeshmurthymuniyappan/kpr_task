// app.js
const express = require('express');
const app = express();
const PORT = 3000;

const users = [ {id:1,name:'ganesh',stepCount:100},
  {id:2,name:'moorthy',stepCount:1000}]

app.get('/api/name/1', (req, res) => {
  res.json({users});
});

// app.get('/api/2', (req, res) => {
//   res.json({users.(1) });
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
