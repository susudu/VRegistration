const Register = require("../models/voterRegister.model.js");
// Create and Save a new voter regestration
exports.create = (req, res) => {
  
};

//Create a new object
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  // Create a voter
  const register = new Register({
    fname: req.body.fname,
    lname: req.body.lname,
    gender: req.body.gender,
    dob: req.body.dob,
    age: req.body.age,
    telno: req.body.telno,
    houseno: req.body.houseno,
    streetname: req.body.streetname,
    city: req.body.city,
    rdate: req.body.rdate,
    vstatus: req.body.vstatus
  });
  // Save voter in the database
  Register.create(register, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the voter."
      });
    else res.send(data);
  });
};

