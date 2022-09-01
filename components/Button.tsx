import Link from "next/link";
import { FunctionComponent } from "react";
import { RouteProps } from "react-router-dom";

/* Define your props */
interface Props {
  href: string;
  label: string;
  isLink?: boolean;
}

/* Define component with type  */
const Button: FunctionComponent<Props> = ({ isLink, label, href }) => {
  return (
    <div className=" flex items-center justify-center border-2 p-3 w-80 m-8  border-violet text-violet-400 rounded-full  font-semibold hover:bg-violet-500 hover:text-violet-300 text-center">
      <Link href={href}>{label}</Link>
    </div>
  );
};

export default Button;
