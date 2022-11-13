import React from 'react'
import "./About.css"

const About = () => {
  return (
    <>
      <div className="container mb-3 about_container" style={{ minHeight: "100%" }}>
        <div className="main_container container d-flex justify-content-around flex-wrap">
          <div className="left_container mt-5" style={{ width: 500 }}>
            <h2>Meet Harsh Pathak</h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2, lineHeight: 2 }}>Hello, I'am Harsh Pathak. I'm Computer engineer.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aut placeat ab reiciendis repellat laborum magnam molestiae? Minus,
              similique. Iusto nostrum aliquam autem earum atque corporis eligendi a dicta,
              repudiandae necessitatibus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium voluptatem esse iusto earum ipsa asperiores qui quidem provident excepturi corrupti.</p>
          </div>
          <div className="right_container mt-3">
            <img src="harsh.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About