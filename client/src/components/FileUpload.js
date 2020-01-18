import React, { Fragment, useState } from "react";
import Message from "./Message";
import Progress from "./Progress";
import axios from "axios";

import { videoTagString, VideoTag } from "react-video-tag";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const FileUpload = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);
  // const[overlayActive, setoverlayActive] = useState(true)

  
  

  const onChange = e => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
      
  };


  
  

const refreshPage = () => {
  window.location.reload(false);
}
  

  const onSubmit = async e => {
    e.preventDefault();
    e.target.reset();
  
    const formData = new FormData();
    formData.append("file", file);
    
   

    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );

          // Clear percentage
          setTimeout(() => setUploadPercentage(0), 10000);
        }
      });

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage("File Uploaded");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        // console.log(err.response.data.msg)
        setMessage(err.response.data.msg);
      }
    }
  };
  console.log(uploadedFile);

  return (
    <div className="wrapper">
      <div>
        {/* <Fragment> */}
        <p className="SecondHeading">Select the file from your computer</p>
        {message ? <Message msg={message} /> : null}

        <form
          onSubmit={onSubmit}
          
         
         
          id="myForm"
         
        >
          <div className="custom-file mb-4" >
           
            <div class="file-input"  >
              <input type="file" name={filename} onChange={onChange} />
              <span class="button">@</span>
              <label className="" htmlFor="customFile">
                {filename}
              </label>
            </div>
            
          </div>

          <Progress percentage={uploadPercentage} />

          <div className="btnn">
            <input
              type="button"
              name="cancelCourse"
              value="Cancel"
              className="second btn"
              // onClick={myFunction}
              onClick={refreshPage}
             
             
            />
            <input type="submit" value="Upload File" className="first btn " name="upload" />
          </div>
        </form>

        {uploadedFile ? (
          <div className="row mt-5">
            <div className="col-md-6 m-auto">
              <h3 className="text-center">{uploadedFile.fileName}</h3>

              <img
                style={{ width: "100%" }}
                src={uploadedFile.filePath}
                alt=""
              />
              <VideoTag
                style={{ width: "100%" }}
                src={uploadedFile.filePath}
                controls
                autoPlay
              />

              <AudioPlayer
                autoPlay
                style={{ width: "100%" }}
                src={uploadedFile.filePath}
                onPlay={e => console.log("onPlay")}
                // other props here
                className="audio"
                controls
              />
            </div>
          </div>
        ) : null}

        {/* </Fragment> */}
      </div>
    </div>
  );
};

export default FileUpload;
