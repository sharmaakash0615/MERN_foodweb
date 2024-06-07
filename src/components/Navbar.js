import React, { useState } from 'react'
import { Link ,useNavigate} from "react-router-dom"
import Badge from "react-bootstrap/Badge"
import {useCart,useDispatchCart} from './ContextReducer'
import Modal from '../Modal';
import Cart from '../screens/Cart';
import '../App.css';

export default function Navbar() {
const[cartview,setcartview]=useState(false)
let data=useCart();
  const navigate=useNavigate();
  const handleLogOut=()=>{
    localStorage.removeItem("authToken")
      navigate("/login")
  }
  return (
    <> 
      <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-dark  ">
        <div className="container-fluid ">
          <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* ul  start-------------------- */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
               <Link className="nav-link active fs-3 fw-bold mt-2" aria-current="page" to="/">Home</Link>
              </li>
            {
            (localStorage.getItem("authToken"))?
              <li className="nav-item">
              <Link className="nav-link active fs-3  mt-2"   aria-current="page" to="/myOrder">MY Orders</Link>
              </li>
              :" "
             
            }
            </ul>
    {/* ul end------------------------------------ */}
            { !(localStorage.getItem("authToken"))?
            <div className='d-flex'>

              <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
              <Link className="btn bg-white text-success mx-1" to="/signup">Signup</Link>

            </div>
             : 
             <div>
             <div className='btn bg-white text-success mx-2 'onClick={()=>{setcartview(true)}}>
              MY Cart{" "}
              <Badge pill bg="danger">{data.length}</Badge>
           </div>
           {cartview?<Modal onClose={()=>setcartview(false)}><Cart/></Modal>:null}
             <div className='btn bg-white text-danger mx-1'onClick={handleLogOut}>
             Logout
           </div>
           </div>
             }
            {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
          </div>
        </div>
      </nav>
      </div>
    </>
  )
}
