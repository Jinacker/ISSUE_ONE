import Footer from './Footer';
import Header from './Header';
import { lightTheme, darkTheme } from "../theme";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../GlobalStyle";

const Layout = () => {

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
        <div>
            <Header toggleTheme={toggleTheme} themeMode={themeMode} />
            <main className = "main">메인</main>
            <Footer></Footer>
        </div>
    </ThemeProvider>
    )
}

export default Layout;