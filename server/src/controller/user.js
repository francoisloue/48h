const AppError = require("../utils/appError");
const con = require("../services/db");
const crypto = require("crypto");

exports.getAll = (req, res, next) => {
  con.query("SELECT * FROM Users", function (err, data, fields) {
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
    req.body.instance,
    req.body.username,
    req.body.password,
  ];
  console.log(values);
  con.query(
    "INSERT INTO Users (idUser, username, password, type) VALUES(?)",
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
    "SELECT * FROM Users WHERE id = ?",
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
  con.query(
    "UPDATE Users SET status='completed' WHERE id=?",
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
    "DELETE FROM Users WHERE id=?",
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
