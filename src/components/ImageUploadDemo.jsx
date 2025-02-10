import { useState } from "react"
import React from "react"
import { ImageUpload } from "./ImageUpload"

const ImageUploadDemo = () => {
    const [files, setFiles] = useState([])

    const handleFileUpload = (files) => {
      setFiles(files)
      console.log(files)
    }

  return (
<div className="w-full max-w-4xl my-12 m-auto min-h-96 border-[1px] border-dashed  text-gray-300 rounded-lg overflow-hidden max-sm:w-[95%] mx-auto ">
      <ImageUpload onChange={handleFileUpload} />
    </div>
  );
}
export default ImageUploadDemo;
