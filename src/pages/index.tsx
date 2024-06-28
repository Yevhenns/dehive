import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components/Header/Header";
import { Dashboard } from "@/components/Dashboard/Dashboard";
import { TopPerfomer } from "@/components/TopPerfomer/TopPerfomer";
import { Box } from "@chakra-ui/react";



export default function Home() {
  return (
    <>
      <Head>
        <title>DeHive</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box bg='#0F1019'><Header tvl={23456726} />
          <Dashboard />
          <TopPerfomer />
        </Box>
      </main>
    </>
  );
}
