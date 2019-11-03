module.exports = (app) => {
    const vehicle = require('../controllers/vehicle.controller.js');

    //create a new entry
    app.post('/records', vehicle.create);

    //retrive all data
    app.get('/records', vehicle.getAll);
}
