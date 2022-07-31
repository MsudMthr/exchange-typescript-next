import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import useSWR from "swr";

import fireSVG from "../../src/assets/fire-svgrepo-com.svg";
import HotCoinCard from "../../src/shared/HotCoinCard";
import { HotCoinCardTypes } from "./home.type";
import InfoTooltip from "./../../src/shared/Tooltip";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";



type HotCoin = {
  item: HotCoinCardTypes; //type for trend coin
};

//fetcher funcion for trend coin with useSWR
const fetcher = async () => {
  const { data } = await axios.get("/search/trending");
  return data;
};

// tooltip for trend coin
const tooltip = {
  header: "Trend Coin",
  text: "trending coin (top 7) in the last 24 hours",
};

const HotCoins = () => {
  const { data, error } = useSWR("get trend coins", fetcher);
  const [isOpen, setIsOpen] = useState<Boolean>(true);

  return (
    <section
      className={`mx-auto flex w-11/12 flex-col rounded-2xl bg-gradient-to-b  from-slate-800/30  to-slate-100/0 p-2 transition-all duration-500 md:w-9/12 ${
        !isOpen && "h-24"
      }`}
    >
      {/* header for trend coin section */}
      <div className="mb-2 flex flex-1 items-center justify-between gap-2 rounded-tl-2xl rounded-bl-sm bg-gradient-to-r from-slate-400/10 to-white/0 py-2 px-10 backdrop-blur-md ">
        <div className="flex items-center">
          <h1 className="text-lg font-medium text-white">Hot Coins</h1>
          <Image
            src={fireSVG}
            alt="hot coin"
            width={"30"}
            height={"30"}
            className={"hover:animate-pulse"}
          />
        </div>
        <div className="flex items-center">
          <InfoTooltip text={tooltip} />
          <KeyboardArrowUpIcon
            className={`text-white ${!isOpen && "rotate-180"} transition-all`}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
      {!data && <h1>loading ...</h1>}
      <table
        className={`table transition-all duration-500 ${!isOpen && "scale-0"} `}
      >
        <thead className="py-2">
          <tr className="text-center text-lg font-medium text-[#d2d2d2]  ">
            <td>image</td>
            <td className="hidden justify-center sm:flex">name</td>
            <td>symbol</td>
            <td className="hidden justify-center sm:flex">price(BTC)</td>
            <td>market rank</td>
            <td></td>
          </tr>
        </thead>
        {data &&
          data.coins.map((coin: HotCoin) => (
            <HotCoinCard data={coin.item} key={coin.item.id} />
          ))}
      </table>
    </section>
  );
};

export default HotCoins;
