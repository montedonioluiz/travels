import "./index.css";

import { ReactNode } from "react";

interface UnauthLayoutProps {
  children: ReactNode;
}
export default function UnauthLayout({ children }: UnauthLayoutProps) {
  return (
    <div id="UnauthLayoutContainer">
      <div className="flex flex-row min-h-screen justify-center items-center">
        {/* TODO need to center vertically */}
        {children}
      </div>
    </div>
  );
}
