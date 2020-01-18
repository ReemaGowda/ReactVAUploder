import React from 'react';
import FileUpload from './components/FileUpload';
import './App.scss';
import DropZone from './components/DropZone';


const App = () => (
  <div className='divClass'>
    <DropZone>
          <div className="zone">
          <div id="dropZ">
            <h1 className="headingfirst">Drag your File here</h1>
            {/* <i className="fas fa-file-import"></i> */}
          
          <i className="fas fa-file-import"></i>
         
          </div>
          </div>
        </DropZone>
    <FileUpload />
   
  </div>
);

export default App;
