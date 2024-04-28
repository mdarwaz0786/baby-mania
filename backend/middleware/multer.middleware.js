import multer from "multer";

// setup storage for uploaded files
const storage = multer.diskStorage(
  {
    destination: (req, file, callback) => {
      callback(null, "backend/uploads/");
    },
    filename: (req, file, callback) => {
      callback(null, file.originalname + "-" + Date.now());
    },
  },
);

// create the multer instance
const upload = multer({ storage: storage });

export default upload;