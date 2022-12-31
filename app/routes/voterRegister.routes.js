module.exports = app => {
  const vstats = require("../controllers/voterStats.controller.js");
  var router = require("express").Router();
  // Insert a new user
  router.post("/", vstats.create);
  app.use('/api/vregister', router);
};