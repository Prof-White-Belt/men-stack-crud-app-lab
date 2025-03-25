import express from "express";
import Submission from "../models/Submission.js";

const router = express.Router();

// GET /submissions - Display all submissions
router.get("/", async (req, res) => {
  const submissions = await Submission.find();
  res.render("index", { submissions });
});

// GET /submissions/new - Show form to create new submission
router.get("/new", (req, res) => {
  res.render("new");
});

// POST /submissions - Create new submission
router.post("/", async (req, res) => {
  const { name, difficulty, description } = req.body;
  const newSubmission = new Submission({ name, difficulty, description });

  await newSubmission.save();
  res.redirect("/submissions");
});

// GET /submissions/:id - Show specific submission
router.get("/:id", async (req, res) => {
  const submission = await Submission.findById(req.params.id);
  res.render("show", { submission });
});

// GET /submissions/:id/edit - Edit submission form
router.get("/:id/edit", async (req, res) => {
  const submission = await Submission.findById(req.params.id);
  res.render("edit", { submission });
});

// PUT /submissions/:id - Update submission
router.put("/:id", async (req, res) => {
  const submission = await Submission.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.redirect(`/submissions/${submission._id}`);
});

// DELETE /submissions/:id - Delete submission
router.delete("/:id", async (req, res) => {
  await Submission.findByIdAndDelete(req.params.id);
  res.redirect("/submissions");
});

export default router;
