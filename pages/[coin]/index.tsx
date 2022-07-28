import {
  GetServerSideProps,
  GetServerSidePropsContext,
  PreviewData,
} from "next";
import React, { useState } from "react";
import { ParsedUrlQuery } from "querystring";
import useFetch from "../../src/hook/useFetch";
import CoinData from "../../src/interface/coinPageInterface";
import axios from "axios";



type CoinDetailProps = {
  coinData: object[];
};

const coinDetail = ({ coinData }: CoinDetailProps) => {

  return <div>
    <p>salam</p>
  </div>;
};



export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  let data;
  axios
    .get<CoinData[]>(
      `https://api.coingecko.com/api/v3/coins/id=${params?.coin}?localization=false`
    )
    .then((res) => {
      data = res.data;
    });

    
    return {
      props: {
        coinDetail: data,
      },
    
  }
};

export default coinDetail;