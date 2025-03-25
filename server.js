import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import submissionsRouter from "./controllers/submissions.js"; // import the submissions router
import methodOverride from "method-override"; // import method-override
import morgan from "morgan";

dotenv.config(); // Load environment variables from .env file

const PORT = process.env.PORT || "3000";
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true })); // Middleware to parse form data (like POST requests)
app.use(express.json()); // Middleware to parse incoming JSON data
app.use(methodOverride("_method")); // Middleware to support PUT and DELETE using _method parameter
app.set("view engine", "ejs"); // Set EJS as the view engine
app.use (morgan("dev"))
// MongoDB Connection (from your .env file)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
// Routes
app.use("/submissions", submissionsRouter); // Route handling for submissions

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});
