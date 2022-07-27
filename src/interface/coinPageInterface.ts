interface CoinData {
  data: {
    symbol: string;
    name: string;
    github: {
      large: string;
    };
    market_data: {
      current_price: {
        usd: number;
      };
    };
  };
}

export default CoinData;
