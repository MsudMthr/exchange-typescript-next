import '../styles/globals.css'
import type { AppProps } from 'next/app'
import axios from 'axios'

axios.defaults.baseURL= "https://api.coingecko.com/api/v3"

function MyApp({ Component, pageProps }: AppProps) {
 
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
