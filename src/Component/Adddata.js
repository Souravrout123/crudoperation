/** @format */

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddData() {
  const navigate = useNavigate("")
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  const Adduser = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/posts", {
        id: id,
        name: name,
        title: title,
      })
      .then((res) => {
        console.log(res.data);
        navigate(`/`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Employe Form</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name}
           onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="id">ID:</label>
          <input type="text" id="id" name="id" value={id}
           onChange={(e) => setId(e.target.value)} />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={title}
           onChange={(e) => setTitle(e.target.value)} />
        </div>
        <button onClick={Adduser}>Submit</button>
      </form>
    </div>
  );
}

export default AddData;
