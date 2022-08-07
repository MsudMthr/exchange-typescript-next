import axios from "axios";
import { GetServerSideProps } from "next";

type CoinPropType = {
  coin: object;
};

const Coin = ({ coin }: CoinPropType) => {
  console.log(coin);

  return <div></div>;
};

export default Coin;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { coinId },
  } = context;
  const { data } = await axios.get(
    `/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
  );
  return {
    props: {
      coin: data,
    },
  };
};
