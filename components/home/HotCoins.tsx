import axios from "axios";
import Image from "next/image";
import React from "react";
import useSWR from "swr";

import fireSVG from "../../src/assets/fire-svgrepo-com.svg";
import HotCoinCard from "../../src/shared/HotCoinCard";

type HotCoin = {
    item : object
}

const fetcher = async () => {
    const {data} = await axios.get("/search/trending")
    return data;
}

const HotCoins = () => {

    const { data , error  } = useSWR("get hot coins" , fetcher)
    console.log({data , error});


  return (
    <section className="mx-auto flex md:w-9/12 w-11/12 flex-col rounded bg-white p-2">
      <div className="flex items-center">
        <h1>Hot Coins</h1>
        <Image src={fireSVG} alt="hot coin" width={"30"} height={"30"} className={"hover:animate-pulse"} />
      </div>
        {!data && <h1>loading ...</h1>}
        {
            data && data.coins.map((coin : HotCoin) =><HotCoinCard data={coin.item} key={coin.item.id}/>
            )
        }
    </section>
  );
};

export default HotCoins;
