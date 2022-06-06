import {AppProps} from 'next/app';
//Propriedades que o Component pode receber

import {Header} from '../components/Header'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
  <Header />
  <Component {...pageProps} />
    </>
  )
}

export default MyApp
