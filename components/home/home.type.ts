export interface HotCoinCardTypes {
    id: string | number;
    large: string;
    market_cap_rank: number;
    name: string;
    price_btc: number;
    slug: string;
    score: number;
    symbol: string;
}

export interface AllCoinDetailsTypes {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    price_change_percentage_24h: number;
}