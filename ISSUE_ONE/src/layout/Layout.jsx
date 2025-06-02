import Footer from './Footer';
import Header from './Header';
import { lightTheme, darkTheme } from "../theme";
import { useRef, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../GlobalStyle";
import { useLocation } from "react-router-dom";
import "./Layout.css";

const Layout = ({ children }) => {
  const location = useLocation(); // ✅ 현재 경로 감지용
  const mainRef = useRef();       // ✅ main 영역 참조

  // ✅ 테마 초기 설정
  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem("theme") || "lightTheme";
  });

  // ✅ 테마 변경 시 body에 클래스 동기화
  useEffect(() => {
    document.body.className = themeMode === "lightTheme" ? "light" : "dark";
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode(prev =>
      prev === "lightTheme" ? "darkTheme" : "lightTheme"
    );
  };

  const theme = themeMode === "lightTheme" ? lightTheme : darkTheme;

  // ✅ 경로 변경 시 main 영역 최상단으로 스크롤
  useEffect(() => {
    setTimeout(() => {
      if (mainRef.current) {
        mainRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 0); // DOM 렌더링 직후
  }, [location.pathname]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className={`layout ${themeMode === "lightTheme" ? "light" : "dark"}`}>
        <Header toggleTheme={toggleTheme} themeMode={themeMode} />
        <div className="wrapper">
          <main className="main" ref={mainRef}>
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
