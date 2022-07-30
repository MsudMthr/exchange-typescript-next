import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/home/header/Header'
import Search from '../components/home/header/Search'
import HotCoins from '../components/home/HotCoins'

const Home: NextPage = () => {
  return (
    <div className=" min-h-screen bg-gradient poppins ">
      <div className='max-w-screen-2xl mx-auto'>
      <Header />
      {/* <Search /> */}
      <HotCoins />
      </div>
    </div>  
  )
}

export default Home
