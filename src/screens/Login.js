import React,{useState} from 'react'
import { Link,useNavigate} from 'react-router-dom'
export default function Login() {
  const [credentials, setcredentials] = useState({email: "", password: "" })
 
  const navigate=useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify({ email: credentials.email, password: credentials.password }))
        const response = await fetch("http://localhost:5000/api/loginuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({  email: credentials.email, password: credentials.password })

        })
        const json = await response.json();
        console.log(json)

        if (!json.success) {
            alert("enter valid credentials")
        }
        if (json.success) {
            localStorage.setItem("userEmail",credentials.email)
            localStorage.setItem("authToken",json.authToken)
            console.log(localStorage.getItem("authToken"))
             navigate("/");
        }

    }

    const onchange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }
  return (
    <div className="Login">
       
      
    <div>
      <div className="  container d-flex justify-content-center align-items-center">
                <form onSubmit={handleSubmit}>
                    
                   <span >Login</span>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"name="email" value={credentials.email} onChange={onchange} />
                        <div id="emailHelp" className="form-text" >We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" name="password" value={credentials.password} onChange={onchange} />
                    </div>

                    

                    <button type="submit" className="m-3 btn btn-success">Submit</button>
                    <Link to="/signup" className="m-3 btn btn-danger">Signup</Link>
                    if new user
                </form>
            </div>
            </div>
    </div>

  )
}
