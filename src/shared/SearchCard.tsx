import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

type SearchCardProps = {
  dataCoin: {
    name: string;
    large: string;
    id: string;
  };
};

const SearchCard: FC<SearchCardProps> = ({ dataCoin: { name, large, id } }) => {
  return (
    <Link passHref href={`/coin/${id}`}>
      <tr className=" w-full text-center ">
        <td className="">
          <Image src={large} alt={name} width={40} height={40} layout="fixed" className="flex-1" />
        </td>
        <td className="">
          <p className="capitalize text-[#d2d2d2]">{name}</p>
        </td>
      </tr>
    </Link>
  );
};

export default SearchCard;
