import React, { useEffect } from "react";
import { useState } from "react";
// import { Lider_GTmetrix as img } from "../images/Lider_GTmetrix.png";

const Body = () => {
  const [name, setName] = useState("Jared");
  const [users, setUsers] = useState([]);
  const handleName = (e) => {
    const input = document.getElementById("name");

    setName(input.value);
  };

  const getUserData = () => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    fetch(url).then((res) => res.json().then((data) => setUsers(data)));
  };
  useEffect(getUserData, []);

  useEffect(() => {
    document.title = `${name}`;
  });
  return (
    <main>
      <img src={require("../images/image(14).png")} />
      <p>Hi {name}</p>
      <input type="text" name="name" id="name" />
      <button onClick={handleName}>Click to change name</button>
      <div id="container">
        <ul className="userList">
          {users.map((user) => (
            <li key={user.id}>
              <a href={`/mailto:/${user.email}`}> {user.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Body;
