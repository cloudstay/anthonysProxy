const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;
const request = require('request');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(morgan('dev'));
app.use('/rooms/:id', express.static('public'));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());



app.get('/api/rooms/:id/info', (req, res) => {
  request(`http://localhost:3001/api/rooms/${req.params.id}/info`, (error, response, body) => {
    if (error){
      console.log('working')
      res.send(404);
    } else {
      res.status(200).send(body);
    }
  })
})


// app.get('/api/rooms/:id/info', (req, res) => {
//   request(`http://localhost:3002/api/rooms/${req.params.id}/info`, (error, response, body) => {
//     if (error){
//       console.log('working')
//       res.send(404);
//     } else {
//       res.status(200).send(body);
//     }
//   })
// })


// app.get('/api/rooms/:id/info', (req, res) => {
//   request(`http://localhost:3003/api/rooms/${req.params.id}/info`, (error, response, body) => {
//     if (error){
//       console.log('working')
//       res.send(404);
//     } else {
//       res.status(200).send(body);
//     }
//   })
// })


// app.get('/api/rooms/:id/info', (req, res) => {
//   request(`http://localhost:3004/api/rooms/${req.params.id}/info`, (error, response, body) => {
//     if (error){
//       console.log('working')
//       res.send(404);
//     } else {
//       res.status(200).send(body);
//     }
//   })
// })
