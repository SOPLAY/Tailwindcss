import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const Card = ({ children }: { children: string }) => (
  <li className='box-border inline-block w-32 p-3 m-5 rounded-md h-52 bg-gradient-to-bl to-blue-300 from-blue-500'>
    <p className='pb-2 text-xl border-b-2 border-dashed'>{children}</p>
  </li>
);

const Home: NextPage<IGetStaticProps> = ({ datas }) => {
  //Image 태그는 ref 타게팅이 안됨 ?!
  const starRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window &&
      window.addEventListener('scroll', function () {
        if (starRef.current) {
          starRef.current.getElementsByTagName('img')[1];
        }
      });
  });

  return (
    <div className={`relative w-full h-full text-white bg-black `}>
      <div ref={starRef}>
        <Image src='/assets/image/ch3/bg.jpg' layout='fill' />
        <Image src='/assets/image/ch3/star.png' layout='fill' />
      </div>
      <section className='relative min-h-[160vh] overflow-x-hidden '>
        <h2 className=' pt-[35vh] text-center text-5xl font-thin'>
          Star Shotting Pages
        </h2>
      </section>
      <section className='relative min-h-[60vh] flex flex-col  justify-between'>
        <div>
          <ul className='z-10 justify-center text-center text-white'>
            {datas.map((v, i) => (
              <Card key={i}>{v.title}</Card>
            ))}
          </ul>
          <p className='mt-2 text-xl font-bold text-center'>
            Star Shotting, Interactive
          </p>
        </div>

        <Image src='/assets/image/ch3/bottom.png' height={500} width={2000} />
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
