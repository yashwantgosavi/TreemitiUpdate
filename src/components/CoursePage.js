import React from 'react'
import Coursebox from './Coursebox'
import course from '../data/course'
import { HashLink } from 'react-router-hash-link';


function CoursePage(props) {
    console.log(course)
    const heading = course.courses[props.index].name;
    let description = course.courses[props.index].description;

    return (
        <React.Fragment>
            <section className='coursePage' id='courseSec'>
                <div className="container" id='coursePage'>
                    <h1 dangerouslySetInnerHTML={{ __html: heading }}></h1>
                    <p dangerouslySetInnerHTML={{ __html: description }}></p>
                    <div className="offerCont">
                        <h3>What We Offer</h3>
                    </div>
                    <h3>Our Other Courses</h3>
                    <div className="courseCont">
                        {course.courses.map((course) =>
                            <Coursebox text={course.title} path={course.titlePath} width="110px" height="200px" boxSize="100px" font="1rem"></Coursebox>
                        )}
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default CoursePage
