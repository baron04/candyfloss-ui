import React, { FC, useState } from "react";
import classNames from "classnames";

interface DarggerProps {
  onFile: (files: FileList) => void;
}

export const Dragger: FC<DarggerProps> = props => {
  const { onFile, children } = props;
  const [dragOver, setDragOver] = useState(false);
  const kclass = classNames("viking-uploader-dragger", {
    "is-dragover": dragOver
  });
  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    setDragOver(false);
    onFile(e.dataTransfer.files);
  };

  const handleDrag = (e: React.DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault();
    setDragOver(over);
  };

  return (
    <div
      className={kclass}
      onDragOver={e => {
        handleDrag(e, true);
      }}
      onDragLeave={e => {
        handleDrag(e, false);
      }}
      onDrop={handleDrop}
    >
      {children}
    </div>
  );
};

export default Dragger;
