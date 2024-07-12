import React, { useEffect, useState } from 'react'
import './partone.css'
import { Link,useNavigate} from 'react-router-dom'

export default function PartOne(props) {
  const name="Sameera"
  const [count,setCount] = useState(0);
  const increament = () =>{
    setCount(count+1);
  }
  const decreament = () =>{
    setCount(count-1);
  }
  useEffect(()=>{
    console.log("new count is : "+count+" ");
  },[count]
)
  const Navigate=useNavigate();
  return (
    <div>
      <h2 className='myName'>Hi. I'm {name} {props.secndname}</h2>
      <Link to={"/contact"}>{props.children}</Link>
      <button onClick={()=>Navigate("/contact")}>Click</button>
      <h2>Count = {count}</h2>
      <button onClick={decreament}>( - )</button>
      <button onClick={increament}>( + )</button>
    </div>
  )
}
