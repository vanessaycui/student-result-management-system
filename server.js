const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config()
require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

//listen for incoming requests:
app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});

app.use(express.static(path.join(__dirname, 'build')));

app.use('/api', require('./routes/api/students'))
app.use('/api', require('./routes/api/courses'))
app.use('/api', require('./routes/api/results'))

//catch-all route to return the idex.html on non-AJAX request
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


