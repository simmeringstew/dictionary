import { useState, useEffect } from "react";
import axios from "axios";
import TopBar from "./components/TopBar";
import Search from "./components/Search";
import Data from "./components/Data";
import "./App.css";

import wordData from "./testData.json";

const App = () => {

  const [search, setSearch] = useState("");
  const changeSearch = (value) => {
    setSearch(value.toLowerCase());
  }
  const [data, setData] = useState([...wordData]);


  // proper use effect for getting data from the api
  // useEffect(() => {
  //   if (search !== "") {
  //     axios
  //       .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
  //       .then(response => {
  //         setData(response.data);
  //       })
  //       .catch(error => {
  //         setData(["error"]);
  //       });
  //   } else {
  //     setData([]);
  //   }
  // }, [search]);


  return(
    <div className="container px-4">
      <TopBar />
      <Search previousSearch={search} changeSearch={changeSearch} />
      <Data data={data[0]} />
    </div>
  );
}

export default App;
