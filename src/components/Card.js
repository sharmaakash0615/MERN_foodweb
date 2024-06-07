import React, { useEffect, useRef, useState } from 'react'
import {useCart,useDispatchCart} from './ContextReducer'
import '../App.css';
export default function Card(props) {

    let options=props.options;
    let priceOptions=Object.keys(options)
     let dispatch=useDispatchCart();
     let data=useCart();
     let foodItem=props.foodItem;  
    const priceRef=useRef();
    const[qty,setqty]=useState("1")
    const[size,setsize]=useState("")
    
    //   code for update cart--------------------
     const handleAddToCart=async()=>{

       
            let food=[];
           for(const item of data)
            {
             if(item.id===props.foodItem._id){
               food=item;
               
               break;
             }
            }

            if(food!=[])
              {
             if(food.size===size)
                {
                await dispatch({type:"UPDATE",id:foodItem._id,price:finalPrice,qty:qty}) 
                return;   
                }
          else if(food.size!==size)  
        {  
       await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,img:props.foodItem.img,price:finalPrice,qty:qty,size:size})
       return 
        }
        return;
        }
       
        await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,img:props.foodItem.img,price:finalPrice,qty:qty,size:size})
   
    }
    
    let finalPrice=qty*parseInt(options[size])

    useEffect(()=>{
       setsize(priceRef.current.value) 
    },[])
    return (
        <div>
            <div className='border-success'>
                <div className="card mt-3 " style={{ "width": "18rem;", "maxHeight": "360px" }} />
                <img src={props.foodItem.img} className="card-img-top" alt="No Image" style={{height:"120px",objectFit:"fill"}} />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    <p className="card-text">This is some important text</p>
                    <div className="container w-100" >
                        <select className='m-2 h-100 bg-success'onChange={(e)=>setqty(e.target.value)}>
                            {
                                Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })
                            }
                        </select>
                        <select className="m-2 h-100 bg-success" ref={priceRef}onChange={(e)=>setsize(e.target.value)}>
                           {
                       priceOptions.map((data)=>{
                        return <option value={data} key={data}>{data}</option>
                         })

                           }
                        </select>
                        <div className="d-inline h-100 fs-5">
                        ₹{finalPrice}/-
                        </div>
                    </div>
                    <hr/>
                    <button className={`btn btn-success justify-centre ms-2`}onClick={handleAddToCart}>AddToCart</button>
                </div>
            </div>
        </div>
    )
}
