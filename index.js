// import express from "express";
// import path from "path";
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("*", () => {
  path.join(__dirname, "public", "index.html");
});

app.listen(3000, () => {
  console.log("server running");
});
