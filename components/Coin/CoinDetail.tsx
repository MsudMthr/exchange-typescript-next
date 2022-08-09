import React, { useState } from "react";

import CoinData from "../../src/interface/coinPageInterface";
import Image from "next/image";
import CoinModal from "./CoinModal";
type CoinDetailProps = {
  coin: CoinData;
};

const CoinDetail = ({ coin }: CoinDetailProps) => {
  console.log(coin);
  const [isOpenModal, setIsOpenModal] = useState<Boolean>(true);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={coin.image.large}
            alt={coin.symbol}
            width={50}
            height={50}
          />
          <h1>{coin.name}</h1>
        </div>
        <p>{coin.symbol}</p>
      </div>
      <p>
        price : <span>${coin.market_data.current_price.usd}</span>
      </p>
      <CoinModal coin={coin} />
    </div>
  );
};

export default CoinDetail;
