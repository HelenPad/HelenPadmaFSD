import React, { useState } from "react";
import Products from "./Product";

const App = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const APP_ID = "a99bd604";
  const APP_KEY = "801b3f6953e413a5d229de1043ba6dbd";
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(
      ` https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setData(data.hits));
  };
  return (
    <div>
      <center>
        <h4>Food Recipe App</h4>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />{" "}
          <br />
          <input type="submit" className="btn btn-primary" value="Search" />
        </form>
        {data.length >= 1 ? <Products data={data} /> : null}
      </center>
    </div>
  );
};

export default App;
