import React from 'react'
import { HashLink } from 'react-router-hash-link';
function Navbar() {

  return (
    <React.Fragment>
      <nav>
        <div className="container">
          <div className="logoBox">
            <img src="" alt="" />
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
        </div>

        {/* <div className="buttonBox">
          <button>Login</button>
          <button>Sign Up</button>
        </div> */}
      </nav>
    </React.Fragment>
  )
}

export default Navbar