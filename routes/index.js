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

router.get("/services/kitchen-interiors", (req, res) => {
  res.render("services/kitchen-interiors");
});

router.get("/services/wardrobe", (req, res) => {
  res.render("services/wardrobe");
});

router.get("/services/tv-unit", (req, res) => {
  res.render("services/tv-unit");
});

router.get("/services/cupboard-works", (req, res) => {
  res.render("services/cupboard-works");
});

router.get("/services/pooja-unit", (req, res) => {
  res.render("services/pooja-unit");
});

router.get("/services/upvc-windows", (req, res) => {
  res.render("services/upvc-windows");
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
