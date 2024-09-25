import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode"; // Use jwt-decode for browser compatibility
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const navigate = useNavigate();
  const [quote, setQuote] = useState("");
  const [tempQuote,setTempQuote] = useState('')

  async function populateQuote() {
    const req = await fetch("http://localhost:3000/api/quote", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });

    const data = await req.json(); // Await the response to be properly parsed
    if (data.status === "ok") {
      setQuote(data.quote);
    } else {
      alert(data.error);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwtDecode(token); // Use jwt_decode to decode the token
      if (!user) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        populateQuote();
      }
    }
  }, [navigate]); // Add navigate to the dependency array

  async function updateQuote(e) {
    e.preventDefault();
    const req = await fetch("http://localhost:3000/api/quote", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        quote: tempQuote
      })
    });

    const data = await req.json(); // Await the response to be properly parsed
    if (data.status === "ok") {
      
      setQuote(tempQuote);
      setTempQuote('')
    } else {
      alert(data.error);
    }
  }
  

  return (
    <div className="dashboard">
      <h1>Your Quote: {quote || "No qoute found :)"}</h1>
      <form onSubmit={updateQuote}>
        <input
          className="update"
          type="text"
          placeholder="Quote"
          value={tempQuote}
          onChange={(e) => setTempQuote(e.target.value)}
        />
        <input className="update-btn" type="submit" value="Update quote" />
      </form>
    </div>
  );
};

export default Dashboard;
