import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Title from '../components/Title';
import Card from '../components/Card';
import Burger from '../components/Burger';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Title/>
        <Burger/>
        <Card href='./gamesDisplay' href2='./aiChat'/>
      </main>
    </>
  );
}
