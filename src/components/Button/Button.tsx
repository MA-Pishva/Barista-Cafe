import { ReactNode } from "react";
import "./_button.scss";

interface ButtonProps {
  children: ReactNode;
  type?: "btn-primary" | "btn-outline";
}

const Button = ({ children, type = "btn-primary" }: ButtonProps) => {
  return <button className={`${type}`}>{children}</button>;
};

export default Button;
