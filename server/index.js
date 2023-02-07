const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const config = require("./config");

const retailerRouter = require("./retailer/retailer.route").router;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Mysql API" });
});

app.use("/api/v1/retailer", retailerRouter);
//TODO:
/**
 * app.use("/api/v1/customer", customerRouter);
 * app.use("/api/v1/admin", adminRouter);
 */
app.listen(config.PORT, () => {
  console.log(`Application listening on:http://localhost:${config.PORT}`);
});
