const Vehicle = require('../models/vehicle.model');

//Create and save a new entry
exports.create = (req, res) => {
    //validate request
    if(!req.body){
        return res.status(400).send({
            message: "Cannot be empty"
        })
    }

    //Create entry
    const entry = new Vehicle({
        lane: req.body.lane,
        count: req.body.count,
        time: req.body.time
    })

    //save in the databse
    entry.save()
    .then(data => {
        res.send(data)
    }).catch(err => {
        res.send(500).send({
            message: err.message || "Some error occured while create the entry"
        });
    });

};

//Retrieve and return all 
exports.getAll = (req, res) => {
    Vehicle.find()
    .then(entries => {
        res.send(entries);
    })
    .catch(er => {
        res.status(500).send({
            message: err.message || "Something went wrong"
        });
    });
};
