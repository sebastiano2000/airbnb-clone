import { useState, useEffect } from "react";
import Head from 'next/head';
import Header from './../components/Header';
import Banner from './../components/Banner';
import SmallCard from './../components/SmallCard';
import MediumCard from './../components/MediumCard';
import LargeCard from './../components/LargeCard';
import Footer from './../components/Footer';
import { exploreData, cardsData } from "./data"

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="https://a0.muscache.com/airbnb/static/icons/android-icon-192x192-c0465f9f0380893768972a31a614b670.png" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">
            Explore Nearby
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2
          lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img} 
                img={img}
                distance={distance}
                location={location} 
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">
            Live Anywhere
          </h2>

          <div className="flex space-x-3 overflow-scroll
          scrollbar-hide p-3 ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard 
                key={img}
                img={img}
                title={title}
              />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://raw.githubusercontent.com/edwintantawi/airbnb-web-clone/main/public/assets/banner.jpg"
          title="The Greatest Outdoors"
          description="Whishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>  

      <Footer />   
    </div>
  )
}
