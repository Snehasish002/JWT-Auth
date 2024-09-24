import React, { useEffect } from 'react'
import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()


  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
      const user = jwt.decode(token)
      if( !user ){
        localStorage.removeItem('token')
        navigate('/login')
      }
    }
  },[])
  return (
    <div>Quote</div>
  )
}

export default Dashboard