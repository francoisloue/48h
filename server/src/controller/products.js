const AppError = require("../utils/appError");
const con = require("../services/db");
const crypto = require("crypto");

exports.getAll = (req, res, next) => {
  con.query("SELECT * FROM Product", function (err, data, fields) {
    if (err) return next(new AppError(err));
    res.status(200).json({
      status: "succes",
      length: data?.length,
      data: data,
    });
  });
};

exports.create = (req, res, next) => {
  if (!req.body) return next(new AppError("No form data found", 404));
  const values = [
    crypto.randomUUID(),
    req.body.description,
    req.body.price,
    req.body.content,
  ];
  con.query(
    "INSERT INTO Product (idProduct, description, price, content) VALUES(?)",
    [values],
    function (err, data, fields) {
      if (err) return next(new AppError(err, 500));
      res.status(201).json({
        status: "success",
        message: "user created!",
      });
    }
  );
};

exports.getId = (req, res, next) => {
  if (!req.params.id) {
    return next(new AppError("No user id found", 404));
  }
  con.query(
    "SELECT * FROM Product WHERE idProduct = ?",
    [req.params.id],
    function (err, data, fields) {
      if (err || data?.length <= 0) return next(new AppError(err, 500));
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    }
  );
};

exports.update = (req, res, next) => {
  if (!req.params.id) {
    return next(new AppError("No user id found", 404));
  }
  let toChange = req;
  con.query(
    `UPDATE Product SET ${toChange} WHERE id=?`,
    [req.params.id],
    function (err, data, fields) {
      if (err) return next(new AppError(err, 500));
      res.status(201).json({
        status: "success",
        message: "user updated!",
      });
    }
  );
};

exports.delete = (req, res, next) => {
  if (!req.params.id) {
    return next(new AppError("No user id found", 404));
  }
  con.query(
    "DELETE FROM Product WHERE id=?",
    [req.params.id],
    function (err, fields) {
      if (err) return next(new AppError(err, 500));
      res.status(201).json({
        status: "success",
        message: "user deleted!",
      });
    }
  );
};
