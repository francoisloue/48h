const AppError = require("../utils/appError");
const con = require("../services/db");
const crypto = require("crypto");
const argon = require("argon2");

const getAll = async (req, res, next) => {
  con.query("SELECT * FROM Users", function (err, data, fields) {
    if (err) return next(new AppError(err));
    res.status(200).json({
      status: "succes",
      length: data?.length,
      data: data,
    });
  });
};

const create = async (req, res, next) => {
  if (!req.body) return next(new AppError("No form data found", 404));
  try {
    const hash = await argon.hash(req.body.password);
  } catch (err) {
    return next(new AppError(err, 500));
  }
  const values = [crypto.randomUUID(), req.body.username, hash, req.body.type];
  con.query(
    "INSERT INTO Users (idUser, username, pwd, type) VALUES(?)",
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

const getId = async (req, res, next) => {
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

const update = async (req, res, next) => {
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

const Delete = async (req, res, next) => {
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

module.exports = {
  getAll,
  getId,
  update,
  Delete,
  create,
};
