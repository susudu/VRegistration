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
    dob: req.body.dob,
    age: req.body.age,
    gender: req.body.gender,
    ssn: req.body.ssn,
    houseno: req.body.house_no,
    streetname: req.body.street_name,
    city: req.body.city,
    mobileno: req.body.mobile_no,
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

