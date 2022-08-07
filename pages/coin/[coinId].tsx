import { Grid } from "@mui/material";
import axios from "axios";
import { GetServerSideProps } from "next";
import Image from "next/image";

type CoinPropType = {
  coin: {
    categories: string[];
    symbol: string;
    name: string;
    image: {
      thumb: string;
      small: string;
      large: string;
    };
    description: {
      en: string;
    };
    links: {
      homepage: string[];
      repos_url: {
        github: string[];
      };
    };
  };
};

const Coin = ({ coin }: CoinPropType) => {
  console.log(coin);

  return (
    <Grid container spacing={3} className="flex-col-reverse sm:flex-row" >
      <Grid item xs={12} sm={6}>
        chart
      </Grid>
      <Grid item xs={12} sm={6} padding={5}>
        <div>
          <div className="flex justify-between items-center">
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
        </div>
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
