import React from "react";
import styled from "styled-components";

const HeaderBlock = styled.div`
  max-width: 500px;
  margin: 0 auto;
  height: 50px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 5px;
  position: sticky;
  top: 0;
`;

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return <HeaderBlock>게시글 순위</HeaderBlock>;
};

export default Header;
