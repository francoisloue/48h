const express = require("express");
const cors = require("cors");
const router = require("./src/routes");
const AppError = require("./src/utils/appError");
const errorHandler = require("./src/utils/errorHandler");

const app = express();
app.use(router);
app.all("*", (req, res, next) => {
  next(new AppError(`The URL ${req.originalUrl} does not exist`, 404));
});
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});

module.exports = app;
