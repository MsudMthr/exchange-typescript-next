import React, { useState } from "react";
import HeaderPartCoins from "../../src/shared/HeaderPartCoins";
import bitcoinSVG from "../../src/assets/bitcoin-svgrepo-com.svg";

const AllCoinPriceTooltipText = {
  header: "All coin",
  text: "Show All Coin Detail ",
};

const AllCoinDetails = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(true);
  return (
    <section
      className={`mx-auto flex w-11/12 flex-col rounded-2xl bg-gradient-to-b  from-slate-800/30  to-slate-100/0 p-2 transition-all duration-500 md:w-9/12 ${
        !isOpen ? "h-24" : ""
      }`}
    >
      {/* header for trend coin section */}

      <HeaderPartCoins
        text="Market Coin"
        image={bitcoinSVG}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        tooltip={AllCoinPriceTooltipText}
      />
    </section>
  );
};

export default AllCoinDetails;
