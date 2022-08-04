import React, { useState } from "react";
import Image from "next/image";

import fireSVG from "../../src/assets/fire-svgrepo-com.svg";
import HotCoinCard from "../../src/shared/HotCoinCard";
import { HotCoinCardTypes } from "./home.type";
import InfoTooltip from "./../../src/shared/Tooltip";
import Header from "./header/Header";
import HeaderPartCoins from "../../src/shared/HeaderPartCoins";

type HotCoin = {
  item: HotCoinCardTypes; //type for trend coin
};

// tooltip info for trend coin
const tooltip = {
  header: "Trend Coin",
  text: "trending coin (top 7) in the last 24 hours",
};

const HotCoins = ({ trendCoin }: any) => {
  const [isOpen, setIsOpen] = useState<Boolean>(true);

  return (
    <section
      className={`mx-auto flex w-11/12 flex-col rounded-2xl bg-gradient-to-b overflow-hidden   from-slate-800/30  to-slate-100/0 p-2 transition-all duration-500 md:w-9/12 ${
        !isOpen ? "h-24" : ""
      }`}
    >
      {/* header for trend coin section */}
      <HeaderPartCoins
        tooltip={tooltip}
        image={fireSVG}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        text="Trending Coin"
      />
      {/* the table show trending coin */}
      <table
        className={`table transition-all overflow-hidden duration-500 ${
          !isOpen ? "scale-0" : ""
        } `}
      >
        {!trendCoin && <h1>loading ...</h1>}
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
        <tbody>
          {trendCoin &&
            trendCoin.coins.map((coin: HotCoin) => (
              <HotCoinCard data={coin.item} key={coin.item.id} />
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default HotCoins;
