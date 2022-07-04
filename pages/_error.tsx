import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const Home: NextPage = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen bg-discordGray-600'>
      <Head>
        <title>404</title>
      </Head>
      <div>
        <h2 className='text-center md:text-3xl'>
          <span className='font-bold text-red-600'>페이지</span>를 찾을 수
          없습니다!!
        </h2>
      </div>
    </div>
  );
};

export default Home;
