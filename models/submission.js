import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Submission = mongoose.model("Submission", submissionSchema);

export default Submission;
