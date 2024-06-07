import React from 'react'

export default function Carousel() {
  return (
    <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:'contain!important'}}>
  <div className="carousel-inner">
  <div className="carousel-caption" style={{zIndex:"10"}}>
  <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
    </form>
  </div>

    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." style={{"width":"50px","height":"400px",filter:"brighness(30%)"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..."style={{"width":"50px","height":"400px",filter:"brighness(30%)"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/157472912/photo/ice-cream-composition-on-a-bowl.jpg?s=1024x1024&w=is&k=20&c=WRb5JZpe8si-1X8Vn_fGnIsUTvozKD-V5XqnAq5U4A0=" className="d-block w-100" alt="..."style={{"width":"50px","height":"400px",filter:"brighness(30%)"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </div>
  )
}

