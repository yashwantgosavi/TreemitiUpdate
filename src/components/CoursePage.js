import React from 'react'
import Coursebox from './Coursebox'
import course from '../data/course'

function CoursePage(props) {
    console.log(course)
    const heading = course.courses[props.index].name;
    let description = course.courses[props.index].description;

    return (
        <React.Fragment>
            <section className='coursePage'>
                <h1 dangerouslySetInnerHTML={{ __html: heading }}></h1>
                <p dangerouslySetInnerHTML={{ __html: description }}></p>
                <div className="offerCont">
                    <h3>What We Offer</h3>
                </div>
                <h3>Our Other Courses</h3>
                <div className="courseCont">
                    <Coursebox  text="Graphics Designing" path="/graphic-designing" width="120px" font="1rem" height="200px" boxSize="100px"></Coursebox>
                    <Coursebox  text="Web Designing" path="/web-designing" width="120px" font="1rem" height="200px" boxSize="100px"></Coursebox>
                    <Coursebox  text="Web Development" path="/web-developement" width="120px" font="1rem" height="200px" boxSize="100px"></Coursebox>
                    <Coursebox  text="Digital Marketing" path="/digital-marketing" width="120px" font="1rem" height="200px" boxSize="100px"></Coursebox>
                    <Coursebox  text="Application Development" path="/app-development" width="120px" font="1rem" height="200px" boxSize="100px"></Coursebox>
                    <Coursebox  text="AI ML Data Science" path="/aiml" width="120px" font="1rem" height="200px" boxSize="100px"></Coursebox>
                    <Coursebox  text="Ui Ux Designing" path="/uiux-designing" width="120px" font="1rem" height="200px" boxSize="100px" ></Coursebox>
                    <Coursebox  text="Dev-ops Specialist" path="/dev-ops-specialist" width="120px" font="1rem" height="200px" boxSize="100px"></Coursebox>

                </div>
            </section>
        </React.Fragment>
    )
}

export default CoursePage
