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
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="relative flex w-full flex-col items-center justify-center gap-4 mb-10">
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
      <table
        className={
          coinList.length && searchCoinsText.length
            ? `table mx-auto  max-h-64 w-6/12   overflow-auto rounded bg-violet-700/10 py-5 backdrop-blur-md md:w-6/12 `
            : "hidden"
        }
      >
        {coinList?.map((coin, index) => (
          <SearchCard dataCoin={coin} key={index} />
        ))}
      </table>
    </section>
  );
};

export default Search;
