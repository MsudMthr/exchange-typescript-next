import {
  GetServerSideProps,
  GetServerSidePropsContext,
  PreviewData,
} from "next";
import React from "react";
import { ParsedUrlQuery } from "querystring";
import useFetch from "./../../src/hook/useFetch";
import CoinData from "../../src/interface/coinPageInterface";
import axios from "axios";

interface CoinDataResponseServer {
  data: CoinData;
}

export const getServerSideProps: GetServerSideProps<
  {
    [key: string]: any;
  },
  ParsedUrlQuery,
  PreviewData
> = (context) => {
  const [coinData, setCoinData] = useState<any>();
  const { query } = context;
  console.log({ context, query });

  //? const {data , error} = useFetch<Coin>("/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false")
  // console.log(data);
  //   const { data } = axios.get(
  //     `/coins/${query.coin}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false`
  //   );

  axios
    .request<CoinData>({
      url: `/coins/${query.coin}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false`,
      transformResponse: (r: CoinDataResponseServer) => r.data,
    })
    .then((response) => {
      const { data } = response;
      setCoinData(data);
    });

  return {
    props: {
      coinDetail: { coinData },
    },
  };
};

const coinDetail = ({ coinData }) => {
  console.log(coinData);

  return <div></div>;
};

export default coinDetail;
