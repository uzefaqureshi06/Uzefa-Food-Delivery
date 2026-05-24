import express from "express";
import multer from "multer";
import fs from "fs";

import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/foodController.js";

const foodRouter = express.Router();

// create uploads folder if it doesn't exist
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// image storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// routes
foodRouter.post("/add", upload.single("image"), addFood);

foodRouter.get("/list", listFood);

foodRouter.post("/remove", removeFood);

export default foodRouter;
