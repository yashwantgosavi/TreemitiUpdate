import React from 'react'
import Coursebox from './Coursebox'
import course from '../data/course'


function CareerGuide() {
    return (
        <React.Fragment>
            <section className="careerGuideSec">
                <div className="container" id='careerGuide'>
                    <h2>CAREER GUIDANCE</h2>
                    <h4>A GUIDE FOR STUDENTS AND YOUNG PROFESSIONALS</h4>
                    <div className="guideCont">
                        <div className="guideimgCont">
                            <div className="guideImgBox"></div>
                        </div>
                        <div className="guideTextBox">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem totam, expedita error maxime ducimus odit pariatur similique nulla nihil sequi et minima delectus assumenda. Voluptate est maiores molestiae dicta Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis sapiente sint eligendi nemo tempore, sunt perferendis dignissimos corrupti quas sequi ratione necessitatibus ipsam itaque porro iusto ipsum expedita natus repellendus.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem totam, expedita error maxime ducimus odit pariatur similique nulla nihil sequi et minima delectus assumenda. Voluptate est maiores molestiae dicta Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis sapiente sint eligendi nemo tempore, sunt perferendis dignissimos corrupti quas sequi ratione necessitatibus ipsam itaque porro iusto ipsum expedita natus repellendus. Lorem ipsum dolor sit amet co adipisicing elit. Facilis nostrum inventore ipsum aperiam dolores asperiores impedit ipsa officiis esse a dignissimos, magnam earum ad quisquam velit. Illo eaque nulla magnam.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem totam, expedita error maxime ducimus odit pariatur similique nulla nihil sequi et minima delectus assumenda. Voluptate est maiores molestiae dicta Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis sapiente sint eligendi nemo tempore, sunt perferendis dignissimos corrupti quas sequi ratione necessitatibus ipsam itaque porro iusto ipsum expedita natus repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore impedit enim consectetur quos quod ratione animi maxime, cum esse itaque quaerat non asperiores alias iusto sequi deserunt. Eveniet alias, architecto, illum sapiente fuga ea, tenetur odit quod assumenda temporibus ex.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem totam, expedita error maxime ducimus odit pariatur similique nulla nihil sequi et minima delectus assumenda. Voluptate est maiores molestiae dicta Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis sapiente sint eligendi nemo tempore, sunt perferendis dignissimos corrupti quas sequi ratione necessitatibus ipsam itaque porro iusto ipsum expedita natus repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis in culpa repellat maxime velit necessitatibus labore fugit eius perferendis ipsa!</p>
                        </div>
                    </div>
                    <h3>Our Courses</h3>
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

export default CareerGuide