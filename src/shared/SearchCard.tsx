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
    <div className="flex w-96 items-center justify-between gap-2">
      <Image src={large} alt={name} width={40} height={40} layout="fixed" />
      <p>{name}</p>
    </div>
  );
};

export default SearchCard;
