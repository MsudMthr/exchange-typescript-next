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

type CoinDetailProps = {
  coinData : object[]
}


const coinDetail = ({ coinData } : CoinDetailProps) => {
  console.log(coinData);

  return <div></div>;
};

export default coinDetail;

const getServerSideProps : GetServerSideProps = async (context) => {

  const {params} = context;
  console.log(params);
  // const {data} : object = axios.get(`https://api.coingecko.com/api/v3/coins/${params?.coin}?localization=false`)
  // console.log(data);
  
  return {
    props : {
      coinDetail : data
    }
  }
}