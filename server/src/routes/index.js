const express = require("express");
const controllers = require("../controller/request");
const router = express.Router();

router.route("/").get(controllers.get).post(controllers.create);
router
  .route("/:id")
  .get(controllers.get)
  .put(controllers.update)
  .delete(controllers.delete);
module.exports = router;
