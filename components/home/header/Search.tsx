import React, { useState , ChangeEvent} from 'react';
import axios from 'axios';
import SearchCard from './../../../src/shared/SearchCard';
const Search = () => {

    const [searchCoinsText , setSearchCoinText] = useState("")
    const [coinList , setCoinList ] = useState([])
    const [isLoading , setIsLoading] = useState(false)

    const searchCoinHandler = (e : ChangeEvent<HTMLInputElement>)  => {
        setSearchCoinText(e.target.value)
        setIsLoading(true)
        axios.get(`/search?query=${searchCoinsText}`)
            .then(res => {
                setCoinList(res.data.coins.splice(10))
                console.log(res);
                setIsLoading(false)
            }).catch(err => console.log(err)
            )
    }

    return (
        <section className='flex flex-col w-full justify-center items-center gap-4'>
            <div className='w-full flex justify-center'>
                <label htmlFor="search" className='hidden'></label>
                <input value={searchCoinsText} onChange={searchCoinHandler} type="search" name="" id="search" placeholder='search ...' className='md:w-4/12 px-2 py-1 rounded outline-none text-[#d2d2d2] bg-gray-500/30 backdrop-blur-md'/>
            </div>
            <div className='bg-violet-700/10 backdrop-blur-md w-11/12 md:w-6/12 flex justify-center min-h-[150px] rounded '>
                {coinList?.map((coin : object) => (
                    console.log(coin);
                    
                    <SearchCard dataCoin={coin}/>
                )
                )}
            </div>
        </section>
    );
};

export default Search;