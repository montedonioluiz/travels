import "./index.css";

import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}
export default function AuthLayout({ children }: AuthLayoutProps) {
  return <div id="AuthLayoutContainer">{children}</div>;
}
