import React, { Component } from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = ({ onDrop, accept }) => {
  // Initializing useDropzone hooks with options
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept
  });

  return (
    <div {...getRootProps()}>
      <input className="dropzone-input" {...getInputProps()} />

      <div className="zone">
        <div id="dropZ">
          <a href="#" class="close" />
          <h1 className="headingfirst">Drag your File here</h1>

          <i className="fas fa-file-import"></i>

          {isDragActive ? (
            <p className="dropzone-content">Release to drop the files here</p>
          ) : (
            <p className="dropzone-content">
              {/* Drag 'n' drop some files here, or click to select files */}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropzone;
