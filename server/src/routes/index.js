const express = require("express");
const controllers = require("../controller/request.js");
const router = express.Router();

router.route("/").get(controllers.getAll).post(controllers.create);
router
  .route("/:id")
  .get(controllers.getId)
  .put(controllers.update)
  .delete(controllers.delete);
module.exports = router;
