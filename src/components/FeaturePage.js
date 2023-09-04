import React from 'react'
import Featurebox from './Featurebox'
import Coursebox from './Coursebox'
import course from '../data/course'

function FeaturePage(props) {

    const heading = course.features[props.index].name;
    let description = course.features[props.index].description;

    return (
        <React.Fragment>
            <section className='featurePage'>
                <h1>TREEMITI STUDENT SUPPORT</h1>
                <div className="feaCont">       
                    <Featurebox text="Career Guidance" path="/career-guidance" width="180px" font="1rem" height="60px" boxSize="80px" dir= "row"></Featurebox>
                    <Featurebox text="Industrial Syllabus" path="/industrial-syllabus" width="180px" font="1rem" height="60px" boxSize="80px" dir= "row"></Featurebox>
                    <Featurebox text="Experienced Faculties" path="/experienced-faculties" width="180px" font="1rem" height="60px" boxSize="80px" dir= "row"></Featurebox>
                    <Featurebox text="Trusted Certifications" path="/trusted-certifications" width="180px" font="1rem" height="60px" boxSize="80px" dir= "row"></Featurebox>
                    <Featurebox text="Personel Development" path="/personel-development" width="180px" font="1rem" height="60px" boxSize="80px" dir= "row"></Featurebox>
                    <Featurebox text="Placement Assistance" path="/placement-assistance" width="180px" font="1rem" height="60px" boxSize="80px" dir= "row"></Featurebox>
                </div>
                <div className="feaDescCont">
                    <div className="feaImgBox"></div>
                    <div className="feaTextBox">
                    <h4 dangerouslySetInnerHTML={{ __html: heading }}></h4>
                    <p dangerouslySetInnerHTML={{ __html: description }}></p>
                    </div>
                </div>
                <h3>Our Courses</h3>
                <div className="courseCont">
                    <Coursebox text="Graphics Designing" path="/graphic-designing" width="120px" font="1rem" height="200px" boxSize="100px"></Coursebox>
                    <Coursebox text="Web Designing" path="/web-designing" width="120px" font="1rem" height="200px" boxSize="100px"></Coursebox>
                    <Coursebox text="Web Development" path="/web-developement" width="120px" font="1rem" height="200px" boxSize="100px"></Coursebox>
                    <Coursebox text="Digital Marketing" path="/digital-marketing" width="120px" font="1rem" height="200px" boxSize="100px"></Coursebox>
                    <Coursebox text="Application Development" path="/app-development" width="120px" font="1rem" height="200px" boxSize="100px"></Coursebox>
                    <Coursebox text="AI ML Data Science" path="/aiml" width="120px" font="1rem" height="200px" boxSize="100px"></Coursebox>
                    <Coursebox text="Ui Ux Designing" path="/uiux-designing" width="120px" font="1rem" height="200px" boxSize="100px" ></Coursebox>
                    <Coursebox text="Dev-ops Specialist" path="/dev-ops-specialist" width="120px" font="1rem" height="200px" boxSize="100px"></Coursebox>
                </div>
            </section>
        </React.Fragment>
    )
}

export default FeaturePage




// function CoursePage(props) {
//     const heading = courses[props.index].name;
//     let description = courses[props.index].description;

//     return (
//         <React.Fragment>
//             <section className='coursePage'>
//                 <h1 dangerouslySetInnerHTML={{ __html: heading }}></h1>
//                 <p dangerouslySetInnerHTML={{ __html: description }}></p>
//                 <div className="offerCont">
//                     <h3>What We Offer</h3>
//                 </div>
//                 <h3>Our Other Courses</h3>
//
//             </section>
//         </React.Fragment>
//     )
// }


