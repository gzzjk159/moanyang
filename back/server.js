const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const http = require("http");
const fs = require("fs");
require("dotenv").config();
const cors = require('cors');

const { sequelize } = require("./models");
const app = express();
sequelize.sync();


const pageRouter = require("./routes/page");
app.use("/", pageRouter);



app.set("views", path.join(__dirname, "view"));
app.set("view engine", "pug");
app.set("port", process.env.PORT || 8000);

app.use(morgan("dev"));

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});
app.listen(app.get("port"),() => {
  console.log(app.get("port"), "번 포트에서 대기중 Project2");
});
