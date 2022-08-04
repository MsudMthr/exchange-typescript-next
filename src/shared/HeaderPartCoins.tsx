import React, { useState } from "react";
import Image from "next/image";
import InfoTooltip from "./Tooltip";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

type Tooltip = {
  header: string;
  text: string;
};

type HeaderPartCoinsPropsType = {
  tooltip: Tooltip;
  image: string;
  isOpen: Boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<Boolean>>;
  text: string;
};

const HeaderPartCoins = ({
  tooltip,
  image,
  isOpen,
  setIsOpen,
  text,
}: HeaderPartCoinsPropsType) => {
  return (
    <div className="mb-2 flex flex-1 items-center justify-between gap-2 rounded-tl-2xl rounded-bl-sm bg-gradient-to-r from-slate-400/10 to-white/0 py-2 px-10 backdrop-blur-md ">
      <div className="flex items-center gap-2">
        <h1 className="text-lg font-medium text-white ">{text}</h1>
        <Image
          src={image}
          alt="hot coin"
          width={"30"}
          height={"30"}
          className={"hover:animate-pulse"}
        />
      </div>
      <div className="flex items-center">
        <InfoTooltip text={tooltip} />
        <KeyboardArrowUpIcon
          className={`text-white transition-all ${!isOpen && "" } `}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </div>
  );
};

export default HeaderPartCoins;
