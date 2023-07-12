import React from "react";
import styled from "styled-components";
import Header from "./header/Header";

const LayoutBlock = styled.div`
  padding: 10px 10px;
  max-width: 500px;
  margin: 0 auto;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutBlock>{children}</LayoutBlock>
    </>
  );
};

export default Layout;
