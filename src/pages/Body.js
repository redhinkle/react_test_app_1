import React, { useEffect } from "react";
import { useState } from "react";
import { images } from "../data/images.js";
// import { Lider_GTmetrix as img } from "../images/Lider_GTmetrix.png";

const Body = () => {
  const [name, setName] = useState("Jared");
  const [users, setUsers] = useState([]);
  const [number, setNums] = useState(0);

  const handleName = (e) => {
    const input = document.getElementById("name");
    setName(input.value);
  };

  const getUserData = () => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    fetch(url).then((res) => res.json().then((data) => setUsers(data)));
  };

  const handleNums = (e) => {
    e.preventDefault();
    setNums(number + 1);
  };
  useEffect(getUserData, []);

  useEffect(() => {
    document.title = `${name}`;
  });
  let index = 1;
  const img = images[index];
  return (
    <main>
      <img src={img.src} />
      <p>{img.desc}</p>
      <img src={require("../images/Lider_Speed.png")} />

      <p>Hi {name}</p>
      <input type="text" name="name" id="name" />
      <button onClick={handleName}>Click to change name</button>
      <p>This is a new line</p>
      <p>And this is another line!</p>
      <p>{number}</p>
      <button onClick={handleNums}>Click to add</button>
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
