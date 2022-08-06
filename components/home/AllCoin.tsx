import React, { useState } from "react";
import { useRouter } from "next/router";

import { Pagination } from "@mui/material";

import AllCoinCard from "../../src/shared/AllCoinCard";
import HeaderPartCoins from "../../src/shared/HeaderPartCoins";
//detail types for one coin
import { AllCoinDetailsTypes } from "./home.type";

import bitcoinSVG from "../../src/assets/bitcoin-svgrepo-com.svg";

//tooltip text
const AllCoinPriceTooltipText = {
  header: "All coin",
  text: "Show 15 market Coin Detail per page  ",
};

type AllCoinDetailsProps = {
  allCoin: AllCoinDetailsTypes[];
};

const AllCoinDetails = ({ allCoin }: AllCoinDetailsProps) => {
  const router = useRouter();

  const changePageHandler = (e: any, value: number): void => {
    router.push(`?page=${value}&#market`);
  };

  const [isOpen, setIsOpen] = useState<Boolean>(true);
  return (
    <section
      id="market"
      className={`mx-auto flex w-11/12 flex-col rounded-2xl bg-gradient-to-b  from-slate-800/30  to-slate-100/0 p-2 transition-all duration-500 md:w-9/12 ${
        !isOpen ? "h-24" : ""
      }`}
    >
      {/* header for all coin section */}

      <HeaderPartCoins
        text="Market Coin"
        image={bitcoinSVG}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        tooltip={AllCoinPriceTooltipText}
      />
      <table
        className={`table transition-all duration-300 ${!isOpen && "scale-0"}`}
      >
        <thead className="py-2">
          <tr className="text-center text-lg font-medium text-[#d2d2d2]  ">
            <td>image</td>
            <td className="hidden justify-center sm:flex">name</td>
            <td>symbol</td>
            <td className="hidden justify-center sm:flex">price</td>
            <td>Price Change</td>
          </tr>
        </thead>
        <tbody>
          {allCoin.map((coin: AllCoinDetailsTypes) => (
            <AllCoinCard key={coin.id} coinDetail={coin} />
          ))}
        </tbody>
      </table>
      <Pagination
        count={20}
        color="primary"
        onChange={changePageHandler}
        className={`flex justify-center invert  ${!isOpen && "hidden"}  `}
        defaultPage={1}
        page={router.query.page ? +router.query.page : 1}
      />
    </section>
  );
};

export default AllCoinDetails;
