import React from "react";
import { LayoutViewProps } from "./LayoutContainer";

const LayoutView: React.FC<LayoutViewProps> = ({ children }) => {
  return <div className="flex flex-col max-w-5xl mx-auto">{children}</div>;
};

export default LayoutView;
