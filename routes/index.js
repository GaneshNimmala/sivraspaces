const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});




router.get("/services/construction", (req, res) => {
  res.render("construction");
});

router.get("/services/interior-design", (req, res) => {
  res.render("interiordesign");
});

router.get("/services/marketing", (req, res) => {
  res.render("marketing");
});

router.get("/pdfviewer", (req, res) => {
  res.render("pdfviewer");
});

router.get("/contactus", (req, res) => {
  res.render("contactus");
});

router.get("/catalog-upload", (req, res) => {
  res.render("catalogupload");
});

module.exports = router;
