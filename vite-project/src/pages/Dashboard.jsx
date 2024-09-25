import React, { useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'  // Use jwt-decode for browser compatibility
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()

  async function populateQuote() {
    const req = await fetch('http://localhost:3000/api/quote', {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      }
    })

    const data = await req.json()  // Await the response to be properly parsed
    console.log(data)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const user = jwtDecode(token)  // Use jwt_decode to decode the token
      if (!user) {
        localStorage.removeItem('token')
        navigate('/login')
      } else {
        populateQuote()
      }
    }
  }, [navigate])  // Add navigate to the dependency array

  return (
    <div className='dashboard'>Welcome</div>
  )
}

export default Dashboard
