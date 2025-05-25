// Header.jsx
import styled from "styled-components";
import "./Header.css";
import { IoSunny, IoMoonSharp } from "react-icons/io5";
import { IoIosHome } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';



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
`;

const ToggleButton = styled.button`
  background-color:transparent;
  color: ${({ theme }) => theme.colors.colorWhite};
  border: none;
  padding: 0.4rem 1rem;
  cursor: pointer;
  font-size: 3rem;
`;


//////////////////


const Header = ({ toggleTheme, themeMode }) => {

const [isHovering, setIsHovering] = useState(false);
const navigate = useNavigate();
const [isReturningHome, setIsReturningHome] = useState(false);
const iconColor = themeMode === "lightTheme" ? "#000" : "#fff";

const goHome = () => {
    navigate('/');
  };

  return (
    <HeaderContainer className = "header">
    <button class="custom-btn btn-16" onClick={goHome}
    onMouseEnter={() => setIsReturningHome(true)}
    onMouseLeave={() => setIsReturningHome(false)}
    ><IoIosHome style={{ color: iconColor }} ></IoIosHome></button>


<Title style={{
  color:
    isHovering || isReturningHome
      ? themeMode === "lightTheme"
        ? "#fff"
        : "#000"
      : undefined
}}>
  {isHovering
    ? themeMode === "lightTheme"
      ? "DARK MODE"
      : "LIGHT MODE"
    : isReturningHome
      ? "RETURN TO HOME"
      : (
        <>
          ISSUE ONE
          <div
            style={{
              fontSize: "0.8rem",
              color: themeMode === "lightTheme" ? "#666" : "#aaa",
              position: "absolute",     // 🔥 공간 차지하지 않음
              top: "70%",              // 제목 아래에 표시
              left: "50%",
              transform: "translateX(-50%)",
              pointerEvents: "none",   // 클릭 무시
              whiteSpace: "nowrap",    // 한 줄 유지
              marginTop: "4px"
            }}
          >
            편향 없는 이슈 요약 플랫폼
          </div>
        </>
      )}
</Title>

<button
  className="custom-btn btn-15"
  onClick={toggleTheme}
  onMouseEnter={() => setIsHovering(true)}
  onMouseLeave={() => setIsHovering(false)}
>
  {themeMode === "lightTheme" ? <IoMoonSharp style={{ color: iconColor }} /> : <IoSunny style={{ color: iconColor }} />}
</button>

    </HeaderContainer>
  );
};

export default Header;
