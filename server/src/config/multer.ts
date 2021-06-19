import multer from "multer";
import path from "path";
import {v4 as uuid }from 'uuid'

const storage = multer.diskStorage({
  destination: 'uploads',
  filename:(req,file,cb) => {
    cb(null, uuid() + path.extname(file.originalname));
  }
});

export default multer({storage});


// import multer from "multer";
// import path from "path";

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, "../public/upload"));
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${file.filename}-${Date.now()}.${file.mimetype.split("/")[1]}`);
//   },
// });