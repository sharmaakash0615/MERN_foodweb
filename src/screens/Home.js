import '../App.css';
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Carousel from '../components/Carousel'





   export default function Home() {
  const[search,setsearch]=useState('')
  const[foodcat,setfoodcat]=useState([]);
  const[foodItem,setfoodItem]=useState([]);
  
 const loaddata=async()=>{

  let response=await fetch("http://localhost:5000/api/foodData",{
   
  method:"POST",
  headers:{
    'Content-type':'application/json'
  }
  });

  response=await response.json();
  setfoodItem(response[0]);
  setfoodcat(response[1]);
  console.log(response[0],response[1]);
 } 
  useEffect(()=>{
    loaddata()
  },[])
  return (
  
    <diV>
    <div>< Navbar/></div>
    <div className="Home">
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:'contain!important'}}>
  <div className="carousel-inner">
  <div className="carousel-caption" style={{zIndex:"10"}}>
  <div className="d-flex justify-content-centre">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search}onChange={(e)=>{setsearch(e.target.value)}}/>
      <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
    </div>
  </div>

    <div className="carousel-item active">
      <img src="https://img.freepik.com/premium-photo/cold-spicy-ice-cream-with-chilli-berries-photography_131346-3756.jpg?w=900" className="d-block w-100" alt="..." style={{"width":"5px","height":"500px",filter:"brighness(30%)"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/premium-photo/satay-with-fresh-thai-basil-leaves-spicy-delicious-asian-cuisine-picture-photography_1020697-227043.jpg?w=900" className="d-block w-100" alt="..."style={{"width":"5px","height":"500px",filter:"brighness(30%)"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-photo/view-3d-delicious-looking-burger_23-2150914673.jpg?t=st=1717777419~exp=1717781019~hmac=d6c943d6ef2c7c03c7dbb94e233aa94caedee475c6f37f5c82d8604612a90275&w=360" className="d-block w-100" alt="..."style={{"width":"5px","height":"700px",filter:"brighness(30%)"}}/>
      
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
    <div className="container">
      {
        foodcat!=[]?
        foodcat.map((data)=>{
          return(
            <div className='row mb-3'>
           <div key={data.id} className='fs-3 m-3'>{data.   CategoryName}</div>
           <hr/>
           {foodItem!=[]?foodItem.filter((item)=>
           (item.CategoryName==data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
           .map(filterItem=>{
            return(
            <div key={filterItem._id} className='col-12 col-md-6 col-lg-3'>
                <Card foodItem={filterItem} 
                options={filterItem.options[0]} >

                </Card>
                 </div>
            )
           }):<div>No such data found</div>}
            </div>
          )
        }):""    
      }
     
    </div>
    </div>

   <div>
    <Footer/>
    </div>
    </diV>
  
  
 
  )
}
