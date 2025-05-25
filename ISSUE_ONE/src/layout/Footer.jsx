import React from 'react'
import "./Footer.css"

import {AiOutlineSmile} from "react-icons/ai"; // 리액트 아이콘 쓰는법

const Footer = () => {
  return (
    <div id = 'wrapper'>
    <div className = "footer">
    <nav>
      <a href = "https://github.com/KSEB-4-E" target ="_blank">Github</a> |
      <a href = "https://github.com/KSEB-4-E/FE" target ="_blank">FE</a>
    </nav>
    <p>
    <span>Copyright 2025. KSEB_4th_E_Team.</span><br/>
    <span>All rights reserved. <AiOutlineSmile></AiOutlineSmile></span><br></br>
    </p>
    </div>
    </div>
  )
}

export default Footer