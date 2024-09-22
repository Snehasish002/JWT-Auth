import { useState } from "react";
import "../index.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event){
    event.preventDefault()
    const response = await fetch('http://localhost:3000/api/users/register', {
      method: 'POST',
      headers: {
        'content-Type':'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })

    const data = await response.json()

    console.log(data)
  }

  return (
    <div className="form">
      <h1>Register</h1>
      <form onSubmit={registerUser} className="form-data">
        <input
          className="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <input
          className="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          className="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <input className="reg" type="submit" value="Register" />
      </form>
    </div>
  );
}

export default App;
