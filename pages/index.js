import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body";
import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}
