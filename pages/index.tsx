import type { GetServerSideProps, NextPage } from "next";

import Head from "next/head";
import Image from "next/image";
import Header from "../components/home/header/Header";
import Search from "../components/home/header/Search";
import HotCoins from "../components/home/HotCoins";
import { HotCoinCardTypes } from "../components/home/home.type";
import axios from "axios";



const Home: NextPage = () => {

  return (
    <div className=" bg-gradient poppins min-h-screen ">
      <div className="mx-auto max-w-screen-2xl">
        <Header />
        {/* <Search /> */}
        <HotCoins  />
      </div>
    </div>
  );
};

export default Home;


