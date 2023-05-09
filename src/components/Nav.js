import React from 'react'
import './style.css'


export const Nav = () => {

  return (
    <div style={{backgroundColor: 'black'}} className='header'>
      {/* <img className="logo" src={logo} data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"/> */}

<div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body"
  style={{fontSize: '25px'
  }}>
    <h5 id="offcanvasTopLabel">
    </h5>
    <a href="#">MARKETING</a><br />
    <a href="#">APPS</a> <br />
    <a href="#">PRESS</a> <br />
    MORE...
  </div>
</div>
    </div>
  )
}
export default Nav;
