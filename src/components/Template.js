import React from 'react'
import Coursebox from './Coursebox'
import Featurebox from './Featurebox'
import { useNavigate } from 'react-router-dom'
import course from '../data/course'

function Template(props) {

  const navigate = useNavigate();

  function goToCareerGuide() {
    navigate(props.guidePath);
  }

  return (
    <React.Fragment>
      <header className='mainSec' id='home'>
        <h1>This is Header</h1>
      </header>
      <section className='courseSec mainSec' id='courseSec'>
        <div className="container" id='courses'>
          <h2>CAREER COURSES</h2>
          <div className="boxCont">
            {course.courses.map((course, id) =>
              <Coursebox text={course.title} path={course.titlePath}></Coursebox>
            )}
          </div>
        </div>
      </section>
      <section className="aboutSec mainSec" id="aboutSec">
        <div className="container" id='about'>
          <h2>ABOUT TREEMITI</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error id tempora necessitatibus mollitia molestias quae dolores similique aliquam tempore fuga. Atque ea consectetur quasi perspiciatis provident autem quod repellendus at? Laboriosam </p>
          <p>recusandae ipsa iusto totam. Inventore aut, optio sint eveniet vitae dolores sunt, recusandae quibusdam explicabo illum impedit reiciendis corporis, ipsa saepe excepturi repudiandae consectetur ducimus fugit. Corporis neque dolor, odio quibusdam autem vitae tenetur laborum! Dolores fuga recusandae fugit, facilis sunt placeat earum vitae quasi architecto iste vero possimus nemo? Et veritatis corporis nemo unde reprehenderit facere.</p>
          <p>Eum itaque perferendis  minima, corrupti harum quas ex facilis beatae totam quibusdam iure ipsum dolorum repellendus molestiae mollitia impedit a? Eaque autem saepe ut iusto pariatur dolorum nemo ullam facere. Dolorum, expedita obcaecati omnis harum nemo veniam iure voluptates magni culpa excepturi quis soluta dolorem! Quo, pariatur quia ut quibusdam vitae commodi nesciunt, explicabo error officia dolorem excepturi! Illo ducimus fugit nesciunt, deserunt totam est.</p>
          <h3>Why Join Treemiti ?</h3>
          <div className="featureCont">
            {course.features.map((feature) =>
              <Featurebox text={feature.name} path={feature.titlePath}></Featurebox>
            )}
          </div>
        </div>
      </section>
      <section className="reviewSec mainSec" id='reviewSec'>
        <div className="container" id='reviews'>
          <h2>REVIEWS ON TREEMITI</h2>
          <div className="reviewCont">
            <div className="reviewBox"></div>
            <div className="reviewBox"></div>
          </div>
        </div>
      </section>
      <section className="placementSec" id='placementSec'>
        <div className="container" id='placement'>
          <h2>OUR PLACEMENTS</h2>
          <div className="slider">
            <h3>Its Slider</h3>
          </div>
        </div>
      </section>
      <section className="careerGuideSec mainSec" id='careerGuideSec'>
        <div className="container" id='careerGuide'>
          <h2>CAREER GUIDANCE</h2>
          <div className="guideCont">
            <div className="guideText">
              <h4>Why Career Guidance ?</h4>
              <p>In today's world when numerous fields are available to build career knowing which one suited best for ourself is very important. One can excel himself / herself with the field which keep his / her interest alive. Many a times students are not able to decide which is the right field for them. Even parents are not able to understand which is the best suited field for their child. This all happen due to unawareness of current and future requirements in the various fields.</p>
              <p>We at Treemiti Informatics help students to take right decision related to their career by knowing their interest, aptitude, attitude and comfort with various tests guided by knowledgeable counselor. We also conduct number of workshops and seminars to create awareness about old and newly trending career opportunities in the industry.</p>
              <p>If you think the same way as we think contact us for career guidance. World of unleash opportunities are waiting for you</p>
              <button className="guideBtn" onClick={goToCareerGuide} >Click for more information</button>
            </div>
            <div className="guideForm">
              <h3>Guidance Registration Form</h3>
            </div>
          </div>
        </div>
      </section>
      <section className='contactSec mainSec' id='contactSec'>
        <div className="container" id='contact'>
          <h2>Contact Treemiti</h2>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Template