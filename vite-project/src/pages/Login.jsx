import { useState } from "react";
import "../index.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event){
    event.preventDefault()
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'content-Type':'application/json',
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    const data = await response.json()

    console.log(data)
  }

  return (
    <div className="form">
      <h1>Login</h1>
      <form onSubmit={loginUser} className="form-data">
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
        <input className="reg" type="submit" value="Login" />
      </form>
    </div>
  );
}

export default App;
