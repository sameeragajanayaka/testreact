import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Contact() {
    const Navigate=useNavigate();
  return (
    <div>
      <h1>Contact</h1>
      <button onClick={()=>Navigate(-1)}>Click</button>
    </div>
  )
}
