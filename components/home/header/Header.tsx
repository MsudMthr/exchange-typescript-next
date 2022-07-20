import React from 'react';
import HeaderItem from './headerItem';

const Header = () => {
    return (
        <header>
        <h1 className='text-center  font-bold my-4 text-[#dcdcdc]'>Live prices</h1>
        <section className='flex items-center justify-around flex-wrap max-w-lg mx-auto flex-col sm:flex-row gap-3'>
          <HeaderItem percent={7.09} text="Market Cap" price={1.6}/>
          <HeaderItem percent={1.97} text="24H Volume" price={191}/>
          <HeaderItem percent={0.45} text="BTC Dominance" price={60.9}/>
        </section>
      </header>
    );
};

export default Header;