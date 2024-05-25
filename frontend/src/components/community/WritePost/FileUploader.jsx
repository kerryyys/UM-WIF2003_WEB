import React from "react";
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";

const FileUploader = ({ files, setFiles }) => (
  <div className="tw-mb-4">
    <FilePond
      files={files}
      onupdatefiles={setFiles}
      allowMultiple={true}
      maxFiles={10}
      acceptedFileTypes={["image/*"]}
      name="files"
      labelIdle='Drag & Drop your photos or <span class="filepond--label-action">Browse</span>'
    />
  </div>
);

export default FileUploader;
