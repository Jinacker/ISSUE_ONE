/* eslint-disable no-unused-vars */
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Loading from "./pages/Loading";
import Search from "./pages/Search";
import Notfound from "./pages/Notfound";

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/search");
  };

  const [query, setQuery] = useState("");

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      nav(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/load" element={<Loading />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      </div>
  );
}

export default App;
