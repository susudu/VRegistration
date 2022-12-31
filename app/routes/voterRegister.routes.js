module.exports = app => {
  const vstats = require("../controllers/voterRegister.controller.js");
  var router = require("express").Router();
  // Insert a new user
  router.post("/", vstats.create);
  app.use('/api/vregister', router);
};