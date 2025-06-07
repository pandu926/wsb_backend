const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/upload/"); // Menyimpan file di folder uploads
  },
  filename: function (req, file, cb) {
    // Menamai file sesuai waktu unggah dan ekstensi asli
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

module.exports = upload;
