const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const dotenv = require("dotenv");
const sequelize = require("./config/database");

// Load environment variables
dotenv.config();
const app = express();

// Middleware for JSON and form data
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Session middleware
app.use(
  session({
    secret: "apple", // Replace with a secure secret in production
    resave: true,
    saveUninitialized: true,
  })
);

sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });
(async ()=>{
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();


// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Load models
// const User = require("./models/User");

// Routes
const indexRouter = require("./routes/index");
const contactusRouter = require("./routes/contactus");
// const catalogRouter = require("./routes/catalog");
const adminRouter = require("./routes/admin");

// Use routes
app.use("/", indexRouter);
app.use("/contactus", contactusRouter);
// app.use("/catalog", catalogRouter);
app.use("/admin", adminRouter)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
