import multer from "multer";

const storage = multer.memoryStorage(); // You can configure this to use diskStorage if you prefer

const upload = multer({ storage });

export default upload;
