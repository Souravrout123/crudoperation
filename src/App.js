/** @format */

import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Listing from "./Component/Listing";
import AddData from "./Component/Adddata";
import EditDta from "./Component/Editdata";
import DataAdd from "./Component/Adddata";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Listing />} />
          <Route path="/adddata" element={<AddData />} />
          <Route path="/editdata" element={<EditDta />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
