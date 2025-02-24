import React from 'react'
import Typewriter from "typewriter-effect";
function Type() {
  return (
    <Typewriter
  
    options={{
      strings: [
        "Full Stack Developer(MERN)",
        "Embedded-Developer",
        "Front-End-Developer",
        "Back-End-Developer"
      ],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
    }}
  />
  )
}

export default Type