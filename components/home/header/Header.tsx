import React, { useEffect, useState } from "react";
import useSWR from "swr";
import axios from "axios";
import Image from "next/image";
import HeaderItem from "./headerItem";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper";

//fetcher data function for get market data
const fetcher = async (e: string) => {
  const { data } = await axios.get(
    `/coins/markets?vs_currency=${e}&order=market_cap_desc`
  );
  return data.slice(0, 10);
};

const Header = () => {
  const [marKetCurrency, setMarketCurrency] = useState("usd");

  const { data, error } = useSWR("getMarketData", () =>
    fetcher(marKetCurrency)
  );

  const oneBillion = 1_000_000_000;
  return (
    <header>
      <h1 className="py-4  text-center font-bold text-[#dcdcdc]">
        Live prices
      </h1>
      <section className="mx-auto flex max-w-lg flex-col flex-wrap items-center justify-around gap-3 sm:flex-row">
        {!data && <h1>Loading</h1>}
        {error && <h1 className="text-red-500">Oops Something Went Wrong </h1>}
        {data && !error && (
          <>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              speed={2500}
              spaceBetween={50}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: false }}
              className="h-40 w-60 sm:w-80 md:w-full "
            >
              {data.map((coin: any) => (
                <SwiperSlide
                  className="flex h-16 w-full items-center  justify-center gap-1 sm:gap-5 "
                  key={coin.id}
                >
                  <div className="flex flex-col items-center justify-center gap-2">
                    <Image
                      src={coin.image}
                      alt={coin.name}
                      layout="fixed"
                      height={70}
                      width={70}
                      className="h-20"
                    />
                    <p className="text-[#dcdcdc]">{coin.name}</p>
                  </div>
                  <HeaderItem
                    percent={+coin.market_cap_change_percentage_24h.toFixed(2)}
                    text="Market Cap"
                    price={+(coin.market_cap / oneBillion).toFixed(1)}
                    Billion={true}
                  />
                  <HeaderItem
                    percent={+coin.price_change_percentage_24h.toFixed(2)}
                    text="Price"
                    price={+coin.current_price}
                    Billion={false}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </section>
    </header>
  );
};

export default Header;
