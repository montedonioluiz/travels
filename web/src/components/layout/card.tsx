import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}
export default function Card({ children }: CardProps) {
  return (
    <div className={`border-2 border-zinc-300 rounded p-2`}>{children}</div>
  );
}
