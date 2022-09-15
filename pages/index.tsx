
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      {/* <Header></Header> */}
      <Body title="My Blog Application"></Body>
      {/* <Footer></Footer> */}
    </div>
  );
}
