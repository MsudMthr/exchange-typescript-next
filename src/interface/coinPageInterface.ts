interface CoinData {
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
  market_data: {
    current_price: {
      usd: number;
    };
  };
}

export default CoinData;
