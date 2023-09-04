import React from 'react'
import Coursebox from './Coursebox'

function CareerGuide() {
    return (
        <React.Fragment>
            <section className="careerGuideSec">
                <h2>CAREER GUIDANCE</h2>
                <h4>A GUIDE FOR STUDENTS AND YOUNG PROFESSIONALS</h4>
                <div className="guideCont">
                    <div className="guideimgCont">
                        <div className="guideImgBox"></div>
                    </div>
                    <div className="guideTextBox">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem totam, expedita error maxime ducimus odit pariatur similique nulla nihil sequi et minima delectus assumenda. Voluptate est maiores molestiae dicta Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis sapiente sint eligendi nemo tempore, sunt perferendis dignissimos corrupti quas sequi ratione necessitatibus ipsam itaque porro iusto ipsum expedita natus repellendus.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem totam, expedita error maxime ducimus odit pariatur similique nulla nihil sequi et minima delectus assumenda. Voluptate est maiores molestiae dicta Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis sapiente sint eligendi nemo tempore, sunt perferendis dignissimos corrupti quas sequi ratione necessitatibus ipsam itaque porro iusto ipsum expedita natus repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla atque veniam inventore. Voluptate nemo ipsum praesentium, nobis autem tenetur nostrum corporis. Fuga, hic nam iste ex exercitationem cum reprehenderit officia! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis nostrum inventore ipsum aperiam dolores asperiores impedit ipsa officiis esse a dignissimos, magnam earum ad quisquam velit. Illo eaque nulla magnam.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem totam, expedita error maxime ducimus odit pariatur similique nulla nihil sequi et minima delectus assumenda. Voluptate est maiores molestiae dicta Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis sapiente sint eligendi nemo tempore, sunt perferendis dignissimos corrupti quas sequi ratione necessitatibus ipsam itaque porro iusto ipsum expedita natus repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore impedit enim consectetur quos quod ratione animi maxime, cum esse itaque quaerat non asperiores alias iusto sequi deserunt. Eveniet alias, architecto, illum sapiente fuga ea, tenetur odit quod assumenda temporibus ex.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem totam, expedita error maxime ducimus odit pariatur similique nulla nihil sequi et minima delectus assumenda. Voluptate est maiores molestiae dicta Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis sapiente sint eligendi nemo tempore, sunt perferendis dignissimos corrupti quas sequi ratione necessitatibus ipsam itaque porro iusto ipsum expedita natus repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis in culpa repellat maxime velit necessitatibus labore fugit eius perferendis ipsa!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem totam, expedita error maxime ducimus odit pariatur similique nulla nihil sequi et minima delectus assumenda. Voluptate est maiores molestiae dicta Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis sapiente sint eligendi nemo tempore, sunt perferendis dignissimos corrupti quas sequi ratione necessitatibus ipsam itaque porro iusto ipsum expedita natus repellendus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque deserunt assumenda enim. Deleniti, assumenda cum aut hic dolores consequuntur optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quas, culpa quos ea explicabo odit necessitatibus facere totam dolor sed? Obcaecati doloremque culpa earum qui reiciendis deserunt sunt unde. Ducimus omnis nemo, sed mollitia quaerat laborum ipsum optio explicabo incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio aspernatur soluta, ipsa consequatur voluptate quidem animi enim illum nemo quaerat corrupti unde quis explicabo mollitia, minima maiores veniam. Pariatur.</p>
                        <div className="exlinkBox">
                            <div className="linkBox"><a href="">Click me</a></div>
                            <div className="linkBox"><a href="">Click me</a></div>
                            <div className="linkBox"><a href="">Click me</a></div>
                            <div className="linkBox"><a href="">Click me</a></div>
                            <div className="linkBox"><a href="">Click me</a></div>
                            <div className="linkBox"><a href="">Click me</a></div>
                        </div>
                     

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

export default CareerGuide