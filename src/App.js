import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/").then(function (response) {
      setData(response.data);
    });
  }, []);

  return <div className="App">{data}</div>;
}

export default App;
