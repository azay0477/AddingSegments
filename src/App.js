import './App.css';
import { SegmentData } from './SegmentData';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [modalShow, setModalShow] = useState(false);

  return (
    <div className='main'>
      <div className='headerAllign' >
        <img style={{ height: "47px", width: "63px" }} src='customerlabs-logo.png' alt='PNG' />
        <h1 className='headingFont'>Customer </h1><h1 className='headingFont2'>Lab</h1>
      </div>
      <div className='headerAllignForP'><p style={{ color: "#1bb394" }} > <b>Digital Marketing Infrastructure Platform</b></p></div>
      <div className='btndeg'>
        <Button className="btn btn-light" onClick={() => setModalShow(true)}>
          Save Segment
        </Button>
      </div>
      <SegmentData
        show={modalShow}
        onHide={() => setModalShow(false)} />
    </div>
  );
}

export default App;
