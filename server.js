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


app.get('/api/rooms/:id/photos', (req, res) => {
  request(`http://localhost:3006/api/rooms/${req.params.id}/photos`, (error, response, body) => {
    if (error){
      console.log('working')
      res.send(404);
    } else {
      res.status(200).send(body);
    }
  })
})


app.get('/api/rooms/:id/listing', (req, res) => {
  request(`http://localhost:3003/api/rooms/${req.params.id}/listing`, (error, response, body) => {
    if (error){
      console.log('working')
      res.send(404);
    } else {
      res.status(200).send(body);
    }
  })
})


app.get('/api/rooms/:id/reviews', (req, res) => {
  request(`http://localhost:3004/api/rooms/${req.params.id}/reviews`, (error, response, body) => {
    if (error){
      console.log('working')
      res.send(404);
    } else {
      res.status(200);
      res.send(body);
    }
  })
})


app.get('/api/rooms/:id/reviews', (req, res) => {
  request(`http://localhost:3004/api/rooms/${req.params.id}/reviews`, (error, response, body) => {
    if (error){
      console.log('working')
      res.send(404);
    } else {
      res.status(200);
      res.send(body);
    }
  })
})

app.get('/api/rooms/:id/searchReviews', (req, res) => {
  request(`http://localhost:3004/api/rooms/${req.params.id}/searchReviews/?search=${req.query.search}`, (error, response, body) => {
    if (error){
      console.log('working')
      res.send(404);
    } else {
      res.status(200);
      res.send(body);
    }
  })
})

