// Header.jsx
import styled from "styled-components";
import "./Header.css";
import { IoSunny, IoMoonSharp } from "react-icons/io5";
import { IoIosHome } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.header`
  width: 100vw;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.colorMain};
  color: ${({ theme }) => theme.colors.colorMainFont};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${({ theme }) => theme.colors.colorShadow};
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  z-index: 100;
  position: relative;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) =>
    theme.colors.colorMainFont === "#000" ? "#666" : "#aaa"};
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  margin-top: 12px;

  @media screen and (max-width: 768px) {
    font-size: 0.65rem;
  }
`;

const Header = ({ toggleTheme, themeMode }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isReturningHome, setIsReturningHome] = useState(false);
  const navigate = useNavigate();
  const iconColor = themeMode === "lightTheme" ? "#000" : "#fff";

  const goHome = () => {
    navigate("/");
  };

  return (
    <HeaderContainer className="header">
      <button
        className="custom-btn btn-16"
        onClick={goHome}
        onMouseEnter={() => setIsReturningHome(true)}
        onMouseLeave={() => setIsReturningHome(false)}
      >
        <IoIosHome style={{ color: iconColor }} />
      </button>

      <Title
        style={{
          color:
            isHovering || isReturningHome
              ? themeMode === "lightTheme"
                ? "#fff"
                : "#000"
              : undefined,
        }}
      >
        {isHovering
          ? themeMode === "lightTheme"
            ? "DARK MODE"
            : "LIGHT MODE"
          : isReturningHome
          ? "RETURN TO HOME"
          : "ISSUE ONE"}
        <Subtitle>편향 없는 이슈 요약 플랫폼</Subtitle>
      </Title>

      <button
        className="custom-btn btn-15"
        onClick={toggleTheme}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {themeMode === "lightTheme" ? (
          <IoMoonSharp style={{ color: iconColor }} />
        ) : (
          <IoSunny style={{ color: iconColor }} />
        )}
      </button>
    </HeaderContainer>
  );
};

export default Header;
