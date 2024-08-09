import React from 'react'
import "./Header.scss"
import logoHeader from '../assets/images/logo-header.png'

function Header() {
  return (
    <div className='header'>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">

          <div className='w-50'>
            <a className="navbar-brand" href="#">
              <img className='header-logo' src={logoHeader} alt="" />
            </a>
          </div>

          <div className='w-50 text-end'>
            <a
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </a>
          </div>

          <div className="collapse navbar-collapse parent-pages" id="navbarSupportedContent">

            <div className='pages'>
              <div className='pages-child' >
                <a aria-current="page" href="#">
                  Home
                </a>
              </div>
              <div className='pages-child' >
                <a href="#">
                  About
                </a>
              </div>
              <div className='pages-child' >
                <a href="#">
                  Destinations
                </a>
              </div>
              <div className='pages-child' >
                <a href="#">Countries</a>
              </div>
              <div className='pages-child' >
                <a href="#">Contact</a>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </div>

  )
}

export default Header
