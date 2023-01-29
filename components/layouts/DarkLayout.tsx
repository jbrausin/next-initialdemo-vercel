import React, { FC } from "react";

type DarkLayoutProps = {
  children: React.ReactNode;
};

export const DarkLayout: FC<DarkLayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        padding: "10px",
        borderRadius: "5px",
        width: "90vw",
      }}
    >
      <h3>Dark-Layout</h3>
      <div>{children}</div>
    </div>
  );
};
