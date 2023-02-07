const express = require("express");
const products = require("../controller/products");
// const verifyToken = require("./services/verifyToken");

exports.router = (function () {
  let apiRouter = express.Router();

  //healthCheck
  apiRouter.route("/").get(products.getAll).post(products.create);
  //   // register retailer
  //   apiRouter.route("/register").post(user.register);
  //   // connection retailer
  //   apiRouter.route("/login").post(user.logIn);
  apiRouter.route("/:id").get(products.getId);
  //   // deconnection user
  //   apiRouter.route("/logout").post(verifyToken, user.logOut);

  //   // reconnect user
  //   apiRouter.route("/reconnect").post(verifyToken, lastView, user.reconnectUser); */

  //   // my info
  //   apiRouter.route("/user/:id").get(verifyToken, user.myInfo);

  //   // edit profile
  //   apiRouter.route("/user/:id/edit").patch(verifyToken, user.updateInfo);

  /*  
 
   // info user
   apiRouter.route("/info/:id").get(verifyToken, user.infoUser);
 
   
 
   // lost password - client
   apiRouter.route("/lost").post(user.lostPassword);
 
   // lost password - website
   apiRouter.route("/lost/reset").post(user.resetPassword); */

  return apiRouter;
})();
