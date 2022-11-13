import React from 'react'
import Button from 'react-bootstrap/Button';
import "./Home.css"

const Home = () => {
    return (
        <>
            <div className="container home_container">
                <div className='home_innerdiv'>
                    <div className="left_div">
                        <h2>Welcome to <span style={{ color: "#6C63FF" }}>Harsh Pathak</span></h2>
                        <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2 }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Aut placeat ab reiciendis repellat laborum magnam molestiae? Minus,
                            similique. Iusto nostrum aliquam autem earum atque corporis eligendi a dicta,
                            repudiandae necessitatibus.</p>
                        <div className="btn_div mt-4">
                            <Button style={{ letterSpacing: "1px", border: "none", borderRadius: 4, background: "#2F2D69", marginRight: 24 }}>Projects</Button>
                            <Button style={{ letterSpacing: ".5px", border: "none", borderRadius: 4, background: "#6C63FF" }}>YouTube</Button>
                        </div>
                    </div>
                    <div className="right_div">
                        <img src="hp.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home