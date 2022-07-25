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
    <Link
      passHref
      href={`/${id}`}
      
    >
      <div className="flex w-full items-center justify-around gap-2 ">
        <Image src={large} alt={name} width={40} height={40} layout="fixed" />
        <p className="capitalize text-[#d2d2d2]">{name}</p>
      </div>
    </Link>
  );
};

export default SearchCard;
