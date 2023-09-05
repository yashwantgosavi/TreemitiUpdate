import React from 'react'
import { useNavigate } from 'react-router-dom'
import course from '../data/course'
import { HashLink } from 'react-router-hash-link';


function Coursebox(props) {

  const navigate = useNavigate();

  function goToCourse() {
    navigate(props.path);
  }

  return (
    <React.Fragment>
        <div style={{ width: props.width, height: props.height }} onClick={goToCourse} className="courseBox">
          <div className="imgBox"></div>
          <div style={{ width: props.boxSize }} className="textBox">
            <h3 style={{ fontSize: props.font }}>{props.text}</h3>
          </div>
        </div>
    </React.Fragment>
  )
}

export default Coursebox