import React from 'react'

import paddy from '../assets/images/paddy.svg'
import wheaticon from '../assets/images/wheat.svg'
import chillicon from '../assets/images/chilli.svg'
import cottonicon from '../assets/images/cotton.svg'
import cornicon from '../assets/images/corn.svg'
import onionicon from '../assets/images/onion.svg'
import tomatoicon from '../assets/images/tomato.svg'
import soyabeanicon from '../assets/images/soyabean.svg'
import geolocationicon from '../assets/images/geolocation.svg'
import rategrowicon from '../assets/images/rategrow.svg'

function TopSecBar() {
  return <>
  <header className="py-3 border-bottom">
    <div className="container-fluid d-flex flex-wrap justify-content-center">
      {/* <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
        <svg className="bi me-2" width="40" height="32"></svg>
        <span className="fs-4">Double header</span>
      </a> */}
      <ul className="nav">
<li className='nav-item' style={{lineHeight:"44px"}}>
    <a><img src={rategrowicon} height='40' width='40'/></a>
</li>
  <li className="nav-item">
    <a className="nav-link disabled"><span><img src={paddy} height="30" width="40"/></span>2000 &#x20b9;</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled"><span><img src={wheaticon} height="30" width="40"/></span>3000 &#x20b9;</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled"><span><img src={chillicon} height="30" width="40"/></span>2055 &#x20b9;</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled"><span><img src={cottonicon} height="30" width="40"/></span>3200 &#x20b9;</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled"><span><img src={cornicon} height="30" width="40"/></span>1520 &#x20b9;</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled"><span><img src={onionicon} height="30" width="40"/></span>1030 &#x20b9;</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled"><span><img src={tomatoicon} height="30" width="40"/></span>1350 &#x20b9;</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled"><span><img src={soyabeanicon} height="30" width="40"/></span>1650 &#x20b9;</a>
  </li>
</ul>
      {/* <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Location
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#"><span><img src={geolocationicon} height='20' width='20'/></span> Nagpur</a></li>
    <li><a className="dropdown-item" href="#"><span><img src={geolocationicon} height='20' width='20'/></span> Amravati</a></li>
    <li><a className="dropdown-item" href="#"><span><img src={geolocationicon} height='20' width='20'/></span> Bhandara</a></li>
    <li><a className="dropdown-item" href="#"><span><img src={geolocationicon} height='20' width='20'/></span> Gondia</a></li>
    <li><a className="dropdown-item" href="#"><span><img src={geolocationicon} height='20' width='20'/></span> Gadchiroli</a></li>
    <li><a className="dropdown-item" href="#"><span><img src={geolocationicon} height='20' width='20'/></span> Pune</a></li>
    <li><a className="dropdown-item" href="#"><span><img src={geolocationicon} height='20' width='20'/></span> Mumbai</a></li>
  </ul>
</div> */}
<div className='col-md-0'>
 <select class="form-select select-forms" id="" aria-label="Floating label select example">
    <option selected>Location</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  </div>
    </div>
  </header>
  
  </>
}

export default TopSecBar