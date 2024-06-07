import React from 'react'
import {Link} from 'react-router-dom'
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="Footer">
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        
      </Link>
      <span className="text-muted">© 2024 GoFood, Akash Sharma</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      
    </ul>
    <div>
      
        <Link to="https://github.com/sharmaakash0615"><FaGithub/
        ></Link>
      
    </div>
    <div>
      
        <Link to="https://www.linkedin.com/in/akash-sharma-3b97a8247/"><FaLinkedin/
        ></Link>
      
    </div>
    <div>
      
        <Link to="https://www.instagram.com/akash7125sharma/"><FaInstagram/
        ></Link>
      
    </div>

  </footer>
  </div>
  </div>
  )
}
