import React, { FC } from "react";
import Image from "next/image";

type SearchCardProps = {
  dataCoin: {
    name: string;
    large: string;
    price: number;
  };
};

const SearchCard: FC<SearchCardProps> = ({
  dataCoin: { name, large, price },
}) => {
  return (
    <div className="flex w-full items-center justify-around gap-2 ">
      <Image src={large} alt={name} width={40} height={40} layout="fixed" />
      <p className="text-[#d2d2d2] capitalize">{name}</p>
    </div>
  );
};

export default SearchCard;
