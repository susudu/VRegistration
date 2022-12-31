const sql = require("./db.js");
// constructor
const Register = function(register) {
  this.fname = register.fname;
  this.lname = register.lname;
  this.dob = register.dob;
  this.age = register.age;
  this.gender = register.gender;
  this.ssn = register.ssn;
  this.house_no = register.house_no;
  this.street_name = register.street_name;
  this.city = register.city;
  this.mobile_no = register.mobile_no;
  this.rdate = register.rdate;
  this.vstatus = register.vstatus;
};
Register.create = (newRegister, result) => {
  sql.query("INSERT INTO user SET ?", newRegister, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created user: ", { id: res.insertId, ...newRegister });
    result(null, { id: res.insertId, ...newRegister });
  });
};
module.exports = Register;