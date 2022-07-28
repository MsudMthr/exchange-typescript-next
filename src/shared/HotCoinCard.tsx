import Image from "next/image";

type HotCoinCardProps = {
  data : {
    large: string;
  market_cap_rank: number;
  name: string;
  price_BTC: number;
  slug: string;
  score: number;
  symbol: string;
  }
};

const HotCoinCard = (props: HotCoinCardProps) => {
  const { large, market_cap_rank, name, price_BTC, score, slug, symbol } = props.data;
  return <div>
    <Image src={large} width="20" height={"20"} alt={slug} />
  </div>;
};

export default HotCoinCard;
