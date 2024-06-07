import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

export default function Signup() {
    const navigate=useNavigate();
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" })
 
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation }))

        const response = await fetch("http://localhost:5000/api/creatuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })

        })
        const json = await response.json();
        console.log(json)

        if (!json.success) {
            alert("enter valid credentials")
         
        }
        if (json.success) {
          
            navigate("/login");
        }
       
    }

    const onchange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <>
        <div className="Signup">
            <div className="container d-flex justify-content-center align-items-center">
               
                <form onSubmit={handleSubmit}>

                <span >Signup</span>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">User Name</label>
                        <input type="text" className="form-control" name="name" value={credentials.name} onChange={onchange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"name="email" value={credentials.email} onChange={onchange} />
                        <div id="emailHelp" className="form-text" >We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" name="password" value={credentials.password} onChange={onchange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">User Address</label>
                        <input type="text" className="form-control" name="geolocation" value={credentials.geolocation} onChange={onchange} />
                    </div>

                    <button type="submit" className="m-3 btn btn-success" >Submit</button>
                    
                    <Link to="/login" className="m-3 btn btn-danger">Login</Link>
                    if user is alredy signup
                    <br></br>
                  
                    <Link to="/"className='btn m-3 btn-info'>Back to Home</Link>
                  
                </form>
              
            </div>
            </div>
        </>
    )
}
