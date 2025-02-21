const multer = require("multer");
const path = require("path");

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/tmp/"); // Save files in an 'uploads' folder
    // cb(null, "uploads/"); // Save files in an 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

// File filter function
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = [".pdf", ".docx"];
  const ext = path.extname(file.originalname).toLowerCase();
  
  if (allowedFileTypes.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file format. Only PDF and DOCX allowed."), false);
  }
};

// Multer upload instance
const upload = multer({ storage, fileFilter });

module.exports = upload;
