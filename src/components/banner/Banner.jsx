import React from 'react'
import "../../App.css"
import "./Banner.css"
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder,", "Frontend Developer,", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <section id='home' className='section'>
      <div className="bannerLeft">
        <div className="intro">
          <h4>WELCOME TO MY WORLD</h4>
          <h1>Hi, I'm{" "}<br></br>
            <span>Mintesinot Tesfaye</span>
          </h1>
          <h2>a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#FCA61F"
            />
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, repellat? Ipsam voluptatum quas facere ut rerum alias odit? Rerum, dolorum!</p>
        </div>
      </div>
      <div className="bannerRight">

      </div>

    </section>

  )
}

export default Banner