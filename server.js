const express = require('express');
const bodyParser = require('body-parser');

//create express app
const app = express();

//parse requests of content type
app.use(bodyParser.urlencoded({ extended: true }));

//parse requests of content type application-json
app.use(bodyParser.json());

//define a simple route
app.get('/', (req, res) => {
    res.json({'message':'Welcome to the server'});
});

//Require the routes
require('./app/routes/vehicle.routes')(app)

//listen for requests
app.listen(3001, () => {
    console.log('Server is listening on port 3001');
});

//configuring the databse
const dbconfig = require('./database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//connnecting the databse
mongoose.connect(dbconfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Succesfully connected to the DB');
})
.catch(err => {
    console.log('Could not connected to the DB');
    process.exit();
});


