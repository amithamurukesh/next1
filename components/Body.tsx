import { FunctionComponent } from "react";
import Button from "./Button";

interface BodyProps {
  title: string;
}

const Body: FunctionComponent<BodyProps> = ({ title }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-3xl pb-12 text-center">{title}</h1>

        {/* <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
    <div><a className="text-orange-600 hover:text-orange-800">Trivandrum</a> */}

        <div className=" md:w-1/3 h-50"></div>
        <div className="bg-gray-300 w-full md:2/3 p-8">
          <h2 className="text-2xl font-bold mb-3">Blog1</h2>

          <p>jkhskfhkghrekgj</p>
        </div>
      </div>

      <Button label=" Create" href="/Newpage/Create" isLink />
    </section>
  );
};

export default Body;
