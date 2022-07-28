import React, { useState, ChangeEvent } from "react";
import axios from "axios";
import SearchCard from "./../../../src/shared/SearchCard";
const Search = () => {
  const [searchCoinsText, setSearchCoinText] = useState("");
  const [coinList, setCoinList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchCoinHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchCoinText(e.target.value);
    setIsLoading(true);
    axios
      .get(`/search?query=${searchCoinsText}`)
      .then((res) => {
        setCoinList(res.data.coins.splice(1, 5));
        console.log(res);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="flex w-full flex-col items-center justify-center gap-4 relative">
      <div className="flex w-full justify-center">
        <label htmlFor="search" className="hidden"></label>
        <input
          value={searchCoinsText}
          onChange={searchCoinHandler}
          type="search"
          name=""
          id="search"
          placeholder="search ..."
          className="rounded bg-gray-500/30 px-2 py-1 text-[#d2d2d2] outline-none backdrop-blur-md md:w-4/12"
        />
      </div>
      <div
        className={
          coinList.length && searchCoinsText.length
            ? `flex  max-h-64 overflow-auto py-5 w-11/12 flex-col items-center gap-2 justify-center rounded bg-violet-700/10 backdrop-blur-md md:w-6/12 `
            : "hidden"
        }
      >
        {coinList?.map((coin, index) => (
          <SearchCard dataCoin={coin} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Search;
