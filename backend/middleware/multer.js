const multer = require("multer");
const path = require("path");

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files in an 'uploads' folder
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
const upload = multer({ storage, fileFilter }).single('resume');
upload(req, res, function(err) {
  if (err) {
    return res.status(400).json({ error: err.message });
  }
  next();  // Proceed to the next middleware (the controller)
});

module.exports = upload;
