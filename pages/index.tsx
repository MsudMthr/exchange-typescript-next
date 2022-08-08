import type { GetServerSideProps, NextPage } from "next";

import Header from "../components/home/header/Header";
import Search from "../components/home/header/Search";
import HotCoins from "../components/home/HotCoins";
import axios from "axios";
import AllCoinDetails from "../components/home/AllCoin";

const Home: NextPage = ({ trendCoin, allCoin }: any) => {
  return (
    <div className=" bg-gradient poppins min-h-screen ">
      <div className="mx-auto max-w-screen-2xl">
        <Header />
        <Search />
        <HotCoins trendCoin={trendCoin} />
        <AllCoinDetails allCoin={allCoin} />
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.query);
  const { query } = context;
  const trendCoins = await axios.get("/search/trending");
  const allCoin = await axios.get(
    `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=${
      query.page ? query.page : 1
    }&sparkline=false&price_change_percentage=24h`
  );
  return {
    props: {
      trendCoin: trendCoins.data,
      allCoin: allCoin.data,
    },
  };
};
