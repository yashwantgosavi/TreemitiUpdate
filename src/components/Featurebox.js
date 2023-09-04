import React from 'react'
import { useNavigate } from 'react-router-dom'

function Featurebox(props) {

  const navigate = useNavigate();

  function goToFeature(){
    navigate(props.path);
  }

  return (
    <div style={{width:props.width, height:props.height,flexDirection:props.dir }} className="featureBox" onClick={goToFeature}>
            <div className="imgBox2"></div>
            <div style={{width:props.boxSize}} className="feaNameBox">
                <h4 style={{fontSize:props.font}}>{props.text}</h4>
            </div>
        </div>
  )
}

export default Featurebox