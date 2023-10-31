const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs/promises");

const app = express();

app.use(cors());

const storage = multer.diskStorage({
    destination: path.join(__dirname, "tmp"),
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + file.originalname);
    },
});

const upload = multer({
    storage,
    // limits: {
    //     fileSize: 4096,
    // },
});

app.post("/upload", upload.single("image"), (req, res) => {
    // console.log(req.file);

    const { filename } = req.file;
    try {
        const tmpPath = path.resolve(__dirname, "tmp", filename);
        const publicPath = path.resolve(__dirname, "public", filename);

        fs.rename(tmpPath, publicPath);
        return res.json({ ok: true });
    } catch (error) {
        console.error("error while moving file to /public", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

app.post("/uploadMany", upload.array("images"), (req, res) => {
    console.log("files : ", req.files);

    return res.json({ ok: true });
});

app.listen(3000, () => console.log("Server started"));
