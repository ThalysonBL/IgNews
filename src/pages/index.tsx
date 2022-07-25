/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'

import {getStaticProps} from 'next'

import styles from './home.module.scss'
import { SubscribeButton } from './../components/SubscribeButton/index';
import { stripe } from './../services/stripe';


interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({product}: HomeProps) {
  return (
    <>
      <Head>
        <title>
            Home | Ig.news
        </title>
       </Head>
       <main className={styles.contentContainer}>
         <section className={styles.hero}>
            <span>👏 hey, welcome</span>
            <h1>News about the <span> React world,</span></h1>
            <p>
              Get access to all the publications <br/>
              <span> for {product.amount} month</span>
            </p>
            <SubscribeButton priceId={product.priceId}/>
         </section>
         

         <img src="/images/avatar.svg" alt="girl coding" />
       </main>
    </>
  )
}

  export const getStaticProps : getStaticProps = async () =>{
    const price = await stripe.prices.retrieve('price_1L6o7ZEMCdjHQaOk6iHjCPK0')

    const product = {
      priceId: price.id,
      amount: new Intl.NumberFormat('en-US', {
        styles: 'currency',
        currency: 'USD',
      }).format(price.unit_amount / 100) ,
    };
    
    return{ 
      props: {
        product,
      },
      revalidate: 60 * 60 * 24, //24 hours

    }
  }