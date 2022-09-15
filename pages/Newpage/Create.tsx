import Footer from "../../components/Footer";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
export default function Create() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [post, setPost] = React.useState(null);
  const baseURL = "http://localhost:3001/products";
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",

      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const createBlog = {
      title: enteredTitle,
      description: enteredDescription,
    };

    console.log(createBlog);
    axios
      .post(
        baseURL,
        {
          title: enteredTitle,
          description: enteredDescription,
        },
        config
      )
      .then((response) => {
        setPost(response.data);
      });
    setEnteredTitle("");
    setEnteredDescription("");
  };

  // if (!post) return "No post!";

  return (
    <div>
      <form onSubmit={submitHandler}>
        

        <section className="py-14 ">
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 w-64 p-3 flex items-center mb-3 rounded-lg">
             

              <input
                type="text"
                value={enteredTitle}
                required
                onChange={titleChangeHandler}
                name="Title"
                placeholder="Title"
                className="bg-gray-200  outline-none text-sm flex-1"
              />
            </div>
            <div className="bg-gray-200 w-50 p-40 flex items-center mb-6 rounded-lg">
              
              <input
                type="text"
                value={enteredDescription}
                required
                onChange={descriptionChangeHandler}
                name="description"
                placeholder="Description"
                className="bg-gray-200 outline-none text-sm flex-1"
              />
            </div>

            <a
              href="#"
              className="border-2 border-gray-300 text-violet-400 rounded-full px-12 py-2 inline-block font-semibold hover:bg-violet-500 hover:text-white"
            >
              <button type="submit">Submit</button>
            </a>
            <h2>
              {" "}
              <Link href="/">
                <b>Back to home</b>
              </Link>
            </h2>
          </div>

          {/* <Footer /> */}
        </section>
      </form>
    </div>
  );
}
