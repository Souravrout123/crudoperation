/** @format */

import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const EditDta = () => {
  const locationDet = useLocation();
  let editDetails = locationDet.state?.DATA;

  console.log(editDetails, "-----------------");

  const navigate = useNavigate("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  let Updateid =editDetails?.id;

  console.log(Updateid,"---------------");

  const UpdateData = async (e, Updateid) => {
    //debugger
    e.preventDefault();
    console.log(id);
    axios
      .patch(
        // "http://localhost:3000/posts/",
        `${"http://localhost:3000/posts"}/${Updateid}`,
        {
          id: id,
          name: name,
          title: title,
        }
      )
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Employe Edit form</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={editDetails?.name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            name="id"
            defaultValue={editDetails?.id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={editDetails?.title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <button onClick={(e) => UpdateData(e, editDetails.id)}>Submit</button>
      </form>
    </div>
  );
};

export default EditDta;
