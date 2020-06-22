import multer from "multer";

export const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads/");
        },
        filename: function (req, file, cb) {
            cb(null, `${req.body.email}-${file.originalname}`);
        },
    }),
});
