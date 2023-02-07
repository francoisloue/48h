const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const db = require("./database");
const productRouter = require("./src/routes/products.route").router;
const AppError = require("./src/utils/appError");
const errorHandler = require("./src/utils/errorHandler");
const retailerRouter = require("./retailer/retailer.route").router;

const app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use((err, req, es, next) => {
  console.error(err.stack);
  res.status(500).send("somenthing broken bro");
});
app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Mysql API" });
});
app.use("/products", productRouter);
app.use("/api/v1/retailer", retailerRouter);
app.use(errorHandler);
//TODO:
/**
 * app.use("/api/v1/customer", customerRouter);
 * app.use("/api/v1/admin", adminRouter);
 */
app.listen(config.PORT, () => {
  console.log(`Application listening on:http://localhost:${config.PORT}`);
});
