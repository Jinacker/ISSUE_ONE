// Header.jsx
import styled from "styled-components";

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
`;

const ToggleButton = styled.button`
  background-color: ${({ theme }) => theme.colors.colorBlue};
  color: ${({ theme }) => theme.colors.colorWhite};
  border: none;
  border-radius: 8px;
  padding: 0.4rem 1rem;
  cursor: pointer;
  font-size: 0.9rem;
`;

const Header = ({ toggleTheme, themeMode }) => {
  return (
    <HeaderContainer>
    <button>Home</button>
      <Title> ISSUE ONE </Title>
      <ToggleButton onClick={toggleTheme}>
        {themeMode === "lightTheme" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </ToggleButton>
    </HeaderContainer>
  );
};

export default Header;
