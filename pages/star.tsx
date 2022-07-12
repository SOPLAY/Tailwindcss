import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

const Card = ({ children }: { children: string }) => (
  <li className='box-border inline-block w-32 p-3 m-5 rounded-md h-52 bg-gradient-to-bl to-blue-300 from-blue-500'>
    <p className='pb-2 text-xl border-b-2 border-dashed'>{children}</p>
  </li>
);

const Home: NextPage<IGetStaticProps> = ({ datas }) => {
  return (
    <div
      className={`relative w-full h-full text-white bg-black bg-[url('/assets/image/ch3/bg.jpg')]`}
    >
      <section className='relative min-h-[160vh] overflow-x-hidden '>
        <h2 className=' pt-[35vh] text-center text-5xl font-thin'>
          Star Shotting Pages
        </h2>
      </section>
      <section className='relative '>
        <div>
          <ul className='z-10 justify-center text-center text-white'>
            {datas.map((v, i) => (
              <Card key={i}>{v.title}</Card>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

interface IGetStaticProps {
  datas: {
    title: string;
    text: string;
  }[];
}
export const getStaticProps: GetStaticProps<IGetStaticProps> = async () => {
  const datas = [
    { title: 'card1', text: 'text1' },
    { title: 'card2', text: 'text2' },
    { title: 'card3', text: 'text3' },
    { title: 'card4', text: 'text4' },
  ];
  return {
    props: { datas },
  };
};

export default Home;
