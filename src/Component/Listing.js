/** @format */

import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Listing = () => {
  const navigate = useNavigate("");
  const [user, setUser] = useState([]);

  function DataAdd() {
    navigate("/adddata");
  }

  async function Redirect(row) {
    console.log("row:-----------", row);
    navigate("/editdata", {
      state: { DATA: row },
    });
  }

  const getlist = async () => {
    const response = await axios.get("http://localhost:3000/posts");
    console.log(response.data);
    setUser(response.data);
  };

  const RemoveData = async (id) => {
    console.log(id);
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      getlist();
    } catch (err) {
      console.log(err);
    }
  };
  const columns = [
    {
      name: "Id",
      selector: (row) => row?.id,
    },
    {
      name: "Title",
      selector: (row) => row?.title,
    },

    {
      name: "Name",
      selector: (row) => row?.name,
    },
    {
      name: "Edit",
      selector: (row) => (
        <button
          onClick={() => {
            Redirect(row);
          }}
        >
          Edit
        </button>
      ),
    },
    {
      name: "Delete",
      selector: (row) => (
        <button
          onClick={() => {
            console.log(row.id, "-----");
            RemoveData(row.id);
          }}
        >
          Delete
        </button>
      ),
    },
  ];

  useEffect(() => {
    getlist();
  }, []);

  return (
    <div>
      <h2>Listing page</h2>

      <button
        onClick={() => {
          DataAdd();
        }}
      >
        AddData
      </button>

      <DataTable columns={columns} data={user} />
    </div>
  );
};

export default Listing;
