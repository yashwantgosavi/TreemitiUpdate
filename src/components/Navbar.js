import React from 'react'
import { HashLink } from 'react-router-hash-link';


function Navbar() {
  return (
    <React.Fragment>
      <nav>
        <div className="container"  id='navbar'>
          <div className="logoBox">
            <h3>Logo</h3>
            <img src="../images/treemiti-white-logo.png" alt="" />
          </div>
          <ul>
            <li ><HashLink smooth to="/#home">Home</HashLink></li>
            <li ><HashLink smooth to="/#courseSec">Courses</HashLink></li>
            <li ><HashLink smooth to="/#aboutSec">About Us</HashLink></li>
            <li ><HashLink smooth to="/#reviewSec">Testimonials</HashLink></li>
            <li ><HashLink smooth to="/#placementSec">Placements</HashLink></li>
            <li ><HashLink smooth to="/#careerGuideSec">Guidance</HashLink></li>
            <li ><HashLink smooth to="/#contactSec">Contact</HashLink></li>
          </ul>
        <div className="buttonBox">
          {/* <button className='navBtn' id='loginBtn'>Login</button>
          <button className='navBtn' id='signUpBtn'>Sign Up</button> */}
        </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Navbar