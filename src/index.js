const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const mongoose = require("./db.js");
const routes = require("./routes/users.js");
const demoRoutes = require("./routes/demographics.js");
const medicationRoutes = require("./routes/medicationList.js");
const eventListRoutes =  require("./routes/appointmentHistory")
const patientVitalRoutes =  require("./routes/patientVital")

const app = express();
app.use(bodyParser.json());

///connection with Angular Frontend

app.all("*", (req, res, next) => {
  console.log(req.method)
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS"
  );
  console.log(req.headers["access-control-allow-headers"]);
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Origin, Access-Control-Allow-Methods, Content-type,Authorization"
  );
  if (req.method === "OPTIONS") {
    return res.status(200).send("Ok");
  }

  return next();
});
//app.use(cors({ origin: "http://localhost:4200" }));
app.listen(3000, () => console.log("Server started at port:3000"));

app.use("/users", routes);
app.use("/patientDemo", demoRoutes);
app.use("/medicationList", medicationRoutes);
app.use("/eventList",eventListRoutes);
app.use("/physician",patientVitalRoutes);