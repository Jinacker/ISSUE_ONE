/* eslint-disable no-unused-vars */
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Notfound from "./pages/Notfound";
import LoadingSearch from "./pages/LoadingSearch";

function App() {
  const nav = useNavigate();
  const location = useLocation();

  const [query, setQuery] = useState("");

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      nav(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  // ✅ 뒤로 가기 방지
  useEffect(() => {
    const handlePopState = () => {
      // 뒤로 가기 눌러도 현재 경로 유지
      nav(location.pathname, { replace: true });
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [nav, location]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loading" element={<LoadingSearch />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

// 빌드 3
export default App;
