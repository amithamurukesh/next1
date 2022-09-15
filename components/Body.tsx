import React from "react";
import axios from "axios";
import { FunctionComponent } from "react";
import Button from "./Button";
import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";
interface BodyProps {
  title: string;
}

const Body: FunctionComponent<BodyProps> = ({ title }) => {
  const baseURL = "http://localhost:3001/products";

  const [blog, setBlog] = React.useState(null);
  const [isLoading, setIsloading] = React.useState(false);
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",

      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  React.useEffect(() => {
    setIsloading(true);
    axios.get(baseURL, config).then(
      (response) => {
        setBlog(response.data);
        setIsloading(false);
      }
      
    );
  }, []);
  {
    console.log(blog);
    console.log(1);
  }
  return (
    <div className="h-screen">
      <Header />

      <section className="py-16 bg-my_bg_image h-[70%] sm:h-[80%] md:h-[82%]">

       
        <div className="container mx-auto md:px-10 "> 
          

          <div className=" md:w-1/3 h-50"></div>
          <div className="bg-gray-300 rounded-lg w-full md:2/3 p-10">
            
           
            {!isLoading && blog
              && blog.map((item) => {
                  return (
                    <div>
                      <h4><b>{item.title}</b>  <br></br> {item.description}</h4> {" "}
                     
                    </div>
                  );
                })
              }
          </div>
        </div>
        

        <Button label=" Create" href="/Newpage/Create" isLink />
      </section>
      <Footer />
    </div>
    
  );
};

export default Body;
