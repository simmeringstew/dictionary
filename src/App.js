import { useState, useEffect } from "react";
import axios from "axios";
import TopBar from "./components/TopBar";
import Search from "./components/Search";
import "./App.css";

const App = () => {

  const [search, setSearch] = useState("");
  const changeSearch = (value) => {
    setSearch(value.toLowerCase());
  }

  return(
    <div className="container px-4">
      <TopBar />
      <Search previousSearch={search} changeSearch={changeSearch} />
    </div>
  );
}

export default App;
