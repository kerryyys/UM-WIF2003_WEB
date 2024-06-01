import path from "path";
import { fileURLToPath } from "url";
import { StatusCodes } from "http-status-codes";

// Construct __dirname since ES modules don't have it
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("__dirname: " + __dirname);
const filePath = path.join(__dirname, "../public/uploads", "fileName");
console.log("filePath: " + filePath);

export const downloadFile = (req, res) => {
  const fileName = req.query.fileName;
  console.log("fileName in backend: " + fileName);
  if (!fileName) {
    res
      .status(StatusCodes.NOT_ACCEPTABLE)
      .send("fileName query parameter is required!");
  }
  // Construct the file path to the file
  const filePath = path.join(__dirname, "../public/uploads", fileName);

  res.download(filePath, (err) => {
    if (err) {
      console.error("Error serving file from res.download: " + err);
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send("Error serving file...");
    }
  });
};
