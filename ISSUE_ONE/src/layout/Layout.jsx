import Footer from './Footer';
import Header from './Header';
import { lightTheme, darkTheme } from "../theme";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../GlobalStyle";

const Layout = ({ children }) => {
  // ✅ 초기 테마를 localStorage에서 바로 가져와 렌더링 직전부터 반영
  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem("theme") || "lightTheme";
  });

  useEffect(() => {
    // ✅ body className 및 localStorage 동기화
    document.body.className = themeMode === "lightTheme" ? "light" : "dark";
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode(prev =>
      prev === "lightTheme" ? "darkTheme" : "lightTheme"
    );
  };

  const theme = themeMode === "lightTheme" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <Header toggleTheme={toggleTheme} themeMode={themeMode} />
        <main className="main">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
