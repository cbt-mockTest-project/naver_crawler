import React from "react";
import LayoutView from "./LayoutView";

export interface LayoutContainerProps {
  children: React.ReactNode;
}
export interface LayoutViewProps extends LayoutContainerProps {}

const LayoutContainer: React.FC<LayoutContainerProps> = ({ children }) => {
  const layoutViewProps = {
    children,
  };
  return <LayoutView {...layoutViewProps} />;
};

export default LayoutContainer;
