// components/ThemeToggleButton.jsx
import React from "react";
import styled from "styled-components";

const ToggleButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: ${({ theme }) => theme.colors.shadow};

  transition: all 0.3s ease;
`;

const ThemeToggleButton = ({ toggleTheme }) => {
  return <ToggleButton onClick={toggleTheme}>테마 전환</ToggleButton>;
};

export default ThemeToggleButton;
