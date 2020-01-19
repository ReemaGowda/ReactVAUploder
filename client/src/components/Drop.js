import React, { useCallback, useState } from "react";
import cuid from "cuid";
import Dropzone from "./Dropzone";

import VideoDrop from "../components/VideoDrop";

function Drop() {
  const [videos, setVideos] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.map(file => {
      const reader = new FileReader();
      reader.onload = function(e) {
        setVideos(prevState => [
          ...prevState,
          { id: cuid(), src: e.target.result }
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  return (
    <main className="Drop">
      <Dropzone onDrop={onDrop} accept={"video/*"} />
      <VideoDrop videos={videos} />
    </main>
  );
}

export default Drop;
