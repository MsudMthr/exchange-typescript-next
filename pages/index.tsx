import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/home/header/Header'
import Search from '../components/home/header/Search'

const Home: NextPage = () => {
  return (
    <div className=" min-h-screen bg-gradient poppins">
      <Header />
      <Search />
    </div>  
  )
}

export default Home
