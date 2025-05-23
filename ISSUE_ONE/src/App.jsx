/* eslint-disable no-unused-vars */
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import GlobalStyle from "./GlobalStyle";

import Home from "./pages/Home";
import Loading from "./pages/Loading";
import Search from "./pages/Search";
import Notfound from "./pages/Notfound";
import Header from "./components/Header"; // ✅ Header 컴포넌트 분리된 경우

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

  // ✅ 다크모드 상태
  const [themeMode, setThemeMode] = useState("lightTheme");

useEffect(() => {
  const savedTheme = localStorage.getItem("theme") || "lightTheme";
  setThemeMode(savedTheme);
  document.body.className = savedTheme === "lightTheme" ? "light" : "dark"; // ✅ 추가
}, []);

useEffect(() => {
  document.body.className = themeMode === "lightTheme" ? "light" : "dark"; // ✅ 추가
}, [themeMode]);

  const toggleTheme = () => {
    const newTheme = themeMode === "lightTheme" ? "darkTheme" : "lightTheme";
    setThemeMode(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const theme = themeMode === "lightTheme" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      {/* ✅ 상단 헤더에 토글 버튼 포함 */}
      <Header toggleTheme={toggleTheme} themeMode={themeMode} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/load" element={<Loading />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
