const express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Student = require('./api/models/studentModel')
bodyParser = require('body-parser');

var routes = require('./api/routes/studentRoutes'); //importing route

const cors = require('cors');
app.use(cors());

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/class');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app); //register the route

app.listen(port, () => {
    console.log("Class API server started at " + port);
});