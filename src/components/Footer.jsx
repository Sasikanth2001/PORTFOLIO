import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className='text-center text-white fs-4 pt-5  '>
      <p>
        Copyright &copy; {year} - All Rights Reserved
        <br/>
        <span className='text-primary'>Sasikanth Developer</span>


      </p>
    </footer>
  )
}

export default Footer
