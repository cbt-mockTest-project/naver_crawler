import { useOuterClick } from "@lib/hooks/useOuterClick";
import React from "react";

interface OuterClickProps {
  callback: Function;
  className?: string;
  children: React.ReactNode;
}

const OuterClick: React.FC<OuterClickProps> = ({
  callback,
  children,
  className,
}) => {
  const innerRef = useOuterClick(callback);
  return (
    <div
      className={className}
      ref={innerRef as React.RefObject<HTMLDivElement>}
    >
      {children}
    </div>
  );
};

export default OuterClick;
