import { useRef, useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import { IconUpload } from "@tabler/icons-react";
import { useDropzone } from "react-dropzone";
import { cn } from "../utils/cn";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/predict";  // Local FastAPI server

const mainVariant = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: 20,
    y: -20,
    opacity: 0.9,
  },
};

const secondaryVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const ImageUpload = ({ onChange }) => {
  const [files, setFiles] = useState([]);
  const [recognizedText, setRecognizedText] = useState("");  // For recognized text
  const [processedImage, setProcessedImage] = useState(null);  // For processed image
  const [loading, setLoading] = useState(false);  // For loading indicator
  const fileInputRef = useRef(null);

  // Function to call the API
  const handleProcessImage = async () => {
    if (files.length > 0) {
      const file = files[0];
      const formData = new FormData();
      formData.append("file", file);

      try {
        setLoading(true);  // Show loading indicator
        const response = await axios.post(API_URL, formData);
        setRecognizedText(response.data.text);
        setProcessedImage("data:image/jpeg;base64," + response.data.image);
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        setLoading(false);  // Hide loading indicator
      }
    } else {
      alert("Please upload an image first!");
    }
  };

  const handleFileChange = (newFiles) => {
    setFiles(newFiles);
    setRecognizedText("");  // Clear previous results
    setProcessedImage(null);  // Clear previous image
    onChange && onChange(newFiles);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const { getRootProps, isDragActive } = useDropzone({
    multiple: false,
    noClick: true,
    onDrop: handleFileChange,
    onDropRejected: (error) => {
      console.log(error);
    },
  });

  return (
    <div className="w-full flex flex-col items-center" {...getRootProps()}>
      <motion.div
        className="p-10 group/file block rounded-lg w-full relative overflow-hidden"
      >
        <input
          ref={fileInputRef}
          id="file-upload-handle"
          type="file"
          onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
          className="hidden"
        />

        <div className="flex gap-4 mb-4">  {/* Container for buttons with gap */}
          <button
            onClick={handleClick}
            className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition"
          >
            Upload Image
          </button>

          <button
            onClick={handleProcessImage}
            className={`py-2 px-4 rounded-md transition ${
              files.length > 0 ? "bg-purple-600 hover:bg-purple-700 text-white" : "bg-gray-500 text-gray-300 cursor-not-allowed"
            }`}
            disabled={loading || files.length === 0}
          >
            {loading ? "Processing..." : "Process Image"}
          </button>
        </div>

        {loading && <p className="text-gray-300 mt-4">Processing...</p>}  {/* Loading indicator */}

        <div className="relative w-full mt-10 max-w-xl mx-auto">
          {files.length > 0 &&
            files.map((file, idx) => (
              <motion.div
                key={"file" + idx}
                layoutId={idx === 0 ? "file-upload" : "file-upload-" + idx}
                className={cn(
                  "relative overflow-hidden z-40 bg-white/10 flex flex-col items-start justify-start md:h-24 p-4 mt-4 w-full mx-auto rounded-md",
                  "shadow-sm"
                )}
              >
                <div className="flex justify-between w-full items-center gap-4">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    layout
                    className="text-base text-gray-300 truncate max-w-xs"
                  >
                    {file.name}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    layout
                    className="rounded-lg px-2 py-1 w-fit flex-shrink-0 text-sm text-gray-300 bg-purple-600 shadow-input"
                  >
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </motion.p>
                </div>
              </motion.div>
            ))}

          {/* Display Recognized Text */}
          {recognizedText && (
            <div className="mt-6 text-white">
              <h3 className="text-lg font-bold">Recognized Text:</h3>
              <pre className="bg-gray-800 p-4 rounded-md whitespace-pre-wrap">{recognizedText}</pre>
            </div>
          )}

          {/* Display Processed Image */}
          {processedImage && (
            <div className="mt-6">
              <h3 className="text-lg font-bold text-white">Processed Image:</h3>
              <img
                src={processedImage}
                alt="Processed"
                className="rounded-md mt-2 border border-gray-700"
              />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
