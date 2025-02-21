const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema(
  {
    filename: { type: String, required: true },
    skills: { type: [String], required: true },
    jobPreferences: { type: String, required: true },
    uploadedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Resume", ResumeSchema);

