import Image from "next/image";
import { HotCoinCardTypes } from "../../components/home/home.type";

type HotCoinCardProps = {
  data: HotCoinCardTypes;
};

const HotCoinCard = ({ data }: HotCoinCardProps) => {
  const { large, market_cap_rank, name, price_btc, slug, symbol } = data;
  return (
    <tr className="text-center">
      <td>
        <Image src={large} width={80} height={80} layout="fixed" alt={slug} priority className="rounded" />
      </td>
      <td className="hidden sm:flex items-center justify-center h-20">
        <h1 className="text-[#d2d2d2] max-w-[500px]">{name}</h1>
      </td>
      <td>
        <p className="text-[#d2d2d2]">{symbol}</p>
      </td>
      <td className="hidden sm:flex items-center justify-center h-20">
        <p className="text-[#d2d2d2] text-center">{price_btc.toFixed(7)} BTC</p>
      </td>
      <td>
        <p className="text-[#d2d2d2]">{market_cap_rank}</p>
      </td>
    </tr>
  );
};

export default HotCoinCard;
