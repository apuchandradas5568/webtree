import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect (() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
        const data = await res.json()        
        setUser(data.results[0])
      } catch (error) {
        
      }
    }

    fetchUser()
  }, [])

  console.log(user);
  


  return (
    <div className="card">
      <div className="img">
        <img
          src={user?.picture.large}
          alt="Profile"
        />
      </div>
      <div className="infos">
        <div className="name">
        <div>
          <h5>First Name</h5>
          <p> {user?.name.title} {user?.name.first}</p>
        </div>
        <div>
          <h5>Last Name</h5>
          <p>{user?.name.last}</p>
        </div>
        </div>

        <div className="user-info">
          <h5>Gender</h5>
          <p> {user?.gender}</p>
        </div>

        <div className="user-info">
          <h5>Phone Number</h5>
          <p> {user?.phone}</p>
        </div>

     
      </div>
    </div>
  );
}

export default App;
