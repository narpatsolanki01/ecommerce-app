import  express  from "express";
// import jwd  from "jsonwebtoken";
import cors from "cors";
import web from "./Route/web.js";
import multer from "multer";
import path from "path";
import connect from "./dbconnection/dbconnect.js";
const app = express();
const port = process.env.PORT || 5000;
const datbase = "mongodb://0.0.0.0:27017/ecommerce";
connect(datbase);
app.use(express.json());
app.use(cors());
app.use('/', web);
// Image Store Engine
const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    },
});

const upload = multer({
    storage: storage,
});

app.use("/images", express.static("upload/images"));

app.post("/upload", upload.single("product"),(req, res) =>{
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`,
    });
});
app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});