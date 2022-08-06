import Image from "next/image";
import React from "react";
import { fixedOrFloorNum } from "../helper/function";

type CoinDetailProps = {
  coinDetail: {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    price_change_percentage_24h: number;
  };
};

const AllCoinCard = ({ coinDetail }: CoinDetailProps) => {
  const {
    id,
    symbol,
    name,
    image,
    current_price,
    price_change_percentage_24h,
  } = coinDetail;
  return (
    <tr className="text-center">
      <td className="bg-red-500">
        <Image
          src={image}
          width={80}
          height={80}
          layout="fixed"
          alt={id}
          priority
          className="rounded"
        />
      </td>
      <td className="hidden h-20 items-center justify-center sm:flex ">
        <h1 className="max-w-[500px] text-[#d2d2d2]">{name}</h1>
      </td>
      <td>
        <p className="text-[#d2d2d2]">{symbol}</p>
      </td>
      <td className="hidden h-20 items-center justify-center sm:flex">
        <p className="text-center text-[#d2d2d2]">$ {fixedOrFloorNum(current_price)}</p>
      </td>
      <td>
        <p className="text-[#d2d2d2]">{price_change_percentage_24h}</p>
      </td>
    </tr>
  );
};

export default AllCoinCard;
