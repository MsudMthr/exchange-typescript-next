import { Grid } from "@mui/material";
import axios from "axios";
import { GetServerSideProps } from "next";
import CoinDetail from "../../components/Coin/CoinDetail";
import CoinData from "../../src/interface/coinPageInterface";

type CoinPropType = {
  coin: CoinData;
};

const Coin = ({ coin }: CoinPropType) => {
  console.log(coin);
  return (
    <Grid container spacing={3} className="flex-col-reverse sm:flex-row">
      <Grid item xs={12} sm={6}>
        chart
      </Grid>
      <Grid item xs={12} sm={6} padding={5}>
        <CoinDetail coin={coin} />
        
      </Grid>
    </Grid>
  );
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
