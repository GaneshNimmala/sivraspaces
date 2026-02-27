const express = require("express");
const path = require('path');
const admin = express.Router();
const Catalog = require('../models/Catalog');
const multer = require('multer');


admin.get('/catalogs', async (req, res) => {
    res.render("catalogs");
});

admin.get('/catalogs/read', async (req, res) => {
    try {
        const allCatalogs = await Catalog.findAll();
        console.log("allCatalogs", allCatalogs);
        res.json(allCatalogs); 
      } catch (error) {
        console.error("Error fetching catalogs:", error);
        res.status(500).json({ error: "Failed to fetch catalogs" }); 
      }
});

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadFolder = path.join(__dirname, '..', 'public', 'uploads');
      console.log("_dirname", __dirname);
      console.log("uploadFolder", uploadFolder);
      cb(null, uploadFolder); // Save files in public/uploads
    },
    filename: (req, file, cb) => {
      const uniqueName = `${Date.now()}-${file.originalname}`;
      cb(null, uniqueName); // Save file with a unique name
    }
  });
  
  const upload = multer({ storage });
  
  admin.post('/catalogs/upload', upload.fields([{ name: 'pdf' }]), async (req, res) => {
    try {
      const { title } = req.body;
      const pdfFile = req.files['pdf'][0];
      // const thumbnailFile = req.files['thumbnail'][0];
  
      // Save file details in the database
      await Catalog.create({
        title,
        pdfPath: `/uploads/${pdfFile.filename}`, // Relative path for serving via public folder
        // thumbnailPath: `/uploads/${thumbnailFile.filename}`
      });
      res.redirect('/admin/catalogs/');
    //   res.status(200).send('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading files:', error);
      res.redirect("/admin/catalogs/");
    //   res.status(500).send('File upload failed');
    }
  });

  admin.delete('/catalogs/delete/:id', async (req, res) => {
    try {
      const { id } = req.params;
      console.log("id", id);
      await Catalog.destroy({ where: { id } });
      res.status(200).redirect('/admin/catalogs/');
    } catch (error) {
      console.error('Error deleting catalog:', error);
      res.status(500).send('Failed to delete catalog');
    }
  })
  
module.exports = admin;