import React from "react";
import Upload, { UploadFile } from "../components/Upload/upload";
import Icon from "../components/Icon/icon";
import Button from "../components/Button/button";

const defaultFileList: UploadFile[] = [
  {
    uid: "123",
    size: 1234,
    name: "hello.md",
    status: "uploading",
    percent: 30
  },
  { uid: "122", size: 1234, name: "xyz.md", status: "success", percent: 30 },
  { uid: "121", size: 1234, name: "eyiha.md", status: "error", percent: 30 }
];

const checkFileSize = (file: File) => {
  if (Math.round(file.size / 1024) > 50) {
    alert("file too big");
    return false;
  }
  return true;
};
const filePromise = (file: File) => {
  const newFile = new File([file], "new_name.docx", { type: file.type });
  return Promise.resolve(newFile);
};

function UploadTest() {
  const onProgress = (percentage: any, file: any) => {
    console.log("onProgress", percentage, file);
  };
  const onSuccess = (value: any) => {
    console.log("onSuccess");
    console.log(value);
  };
  const onError = (value: any) => {
    console.log("onError", value);
  };
  const onChange = (value: any) => {
    console.log("onChange", value);
  };
  const checkFileSize = (file: File) => {
    if (Math.round(file.size / 1024) > 100) {
      console.log("file too big!");
      return false;
    }
    return true;
  };
  const filePromise = (file: File) => {
    const newFile = new File([file], "new_name.docx", { type: file.type });
    return Promise.resolve(newFile);
  };

  const onRemove = (uploadFile: UploadFile) => {
    console.log("onRemove", uploadFile);
  };

  return (
    <div>
      <Upload
        // action="https://jsonplaceholder.typicode.com/posts/"
        action="http://api.rscl.cc/upload"
        onProgress={onProgress}
        onSuccess={onSuccess}
        onError={onError}
        onChange={onChange}
        // beforeUpload={filePromise}
        onRemove={onRemove}
        name="fileName"
        data={{ key: "value" }}
        headers={{ "X-Powered-By": "vinkingship" }}
        accept=".jpg"
        multiple
        drag
      >
        <Icon icon="upload" size="5x" theme="secondary" />
        <br />
        <p>Drag file over to upload</p>
      </Upload>
    </div>
  );
}

export default UploadTest;
