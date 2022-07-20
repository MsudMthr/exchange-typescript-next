import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/home/header/Header'

const Home: NextPage = () => {
  return (
    <div className="grid  min-h-screen bg-gradient poppins">
      <Header />
      
    </div>
  )
}

export default Home
