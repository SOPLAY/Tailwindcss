import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

type CardProps = {
  children: React.ReactNode;
  bgGradient: string;
};
const Card: React.FC<CardProps> = ({ children, bgGradient }) => (
  <div
    className={`w-52 h-28 rounded-2xl p-3 bg-white shadow-xl bg-gradient-to-tl ${bgGradient}`}
  >
    <p className={`text-right pr-3 text-white font-bold`}>{children}</p>
  </div>
);

const Home: NextPage = () => {
  const cardData = [
    { title: 'card', bgGradient: 'from-[#FBAB7E] to-[#F7CE68]' },
    { title: 'card', bgGradient: 'from-[#FF5E7E] to-[#FF99AC]' },
    { title: 'card', bgGradient: 'from-[#0093E9] to-[#80D0C7]' },
    { title: 'card', bgGradient: 'from-[#fd1d1d] to-[#833ab4]' },
    { title: 'card', bgGradient: 'from-[#000000] to-[#FC00FF]' },
  ];
  return (
    <>
      <Head>
        <title>Card-Motion</title>
      </Head>
      <div className='h-screen bg-purple-100'>
        <h1 className='my-5 text-3xl text-center font-DoHyeon'>Card-Motion</h1>
        <section className='flex flex-wrap justify-around'>
          {cardData.map((v, i) => (
            <Card bgGradient={v.bgGradient} key={i}>
              {`${v.title.toUpperCase()} ${i + 1}`}
            </Card>
          ))}
        </section>
      </div>
    </>
  );
};

export default Home;
