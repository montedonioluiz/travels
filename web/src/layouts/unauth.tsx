import "./index.css";

import { ReactNode } from "react";

interface UnauthLayoutProps {
  children: ReactNode;
}
export default function UnauthLayout({ children }: UnauthLayoutProps) {
  return (
    <div className="flex justify-center items-center h-screen">{children}</div>
  );
}
