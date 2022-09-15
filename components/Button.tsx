import Link from "next/link";
import { FunctionComponent } from "react";
//import { RouteProps } from "react-router-dom";

/* Define your props */
interface Props {
  href: string;
  label: string;
  isLink?: boolean;
}

/* Define component with type  */
const Button: FunctionComponent<Props> = ({ isLink, label, href }) => {
  return (
    <div className=" absolute inset-x-0 bottom-0 h-14 flex  items-center justify-center border-2 p-3 w-60 m-12 mb-[120px] text-2xl border-violet-600 text-violet-500 rounded-full  font-semibold hover:bg-violet-500 hover:text-gray-300 text-center">
      <Link href={href}>{label}</Link>
    </div>
  );
};

export default Button;
