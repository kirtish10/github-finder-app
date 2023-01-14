import React from 'react'
import svg from "../../assets/coffee.svg";

function Footer() {

    const footerYear = new Date().getFullYear()

  return (
    <footer className="footer bg-neutral
     p-10 text-primary-content footer-center">
        <div>
        <img src={svg} alt="My Logo"/>
    <p> CopyRight &copy; {footerYear} All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer