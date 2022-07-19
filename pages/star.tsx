import gsap, { Power3, Power4, TweenMax } from 'gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Card = ({ children }: { children: string }) => (
  <li className='box-border inline-block w-32 p-3 m-5 duration-300 rounded-md h-52 bg-gradient-to-bl to-blue-300 from-blue-500 hover:-translate-y-4'>
    <p className='py-2 text-left border-b-2 border-dashed text-md'>
      {children}
    </p>
  </li>
);

const Home: NextPage<IGetStaticProps> = ({ datas }) => {
  //gsap registerPlugin ScrollToPlugin
  gsap.registerPlugin(ScrollToPlugin);

  const starRef = useRef<HTMLDivElement>(null);
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  useEffect(() => {
    window &&
      window.addEventListener('scroll', function () {
        if (starRef.current) {
          starRef.current.getElementsByTagName('img')[1].style.transform =
            'translateY(' + -this.scrollY / 3 + 'px)';
          starRef.current.getElementsByTagName('h2')[0].style.transform =
            'translateY(' + this.scrollY / 1.7 + 'px)';
        }
      });

    if (isFirstLoading) {
      if (!starRef.current) return;

      setIsFirstLoading(false);

      // setTimeout(() => {
      //   if (!starRef.current) return;
      //   //첫 방문 로딩 스크롤 구현
      //   starRef.current
      //     .getElementsByTagName('section')[1]
      //     .scrollIntoView({ behavior: 'smooth' });
      //   setIsFirstLoading(false);
      // }, 2000);
    }
  }, [isFirstLoading]);
  // gsap.registerPlugin(ScrollToPlugin);
  useEffect(() => {
    if (starRef.current && isFirstLoading) {
      setIsFirstLoading(false);
      const titleDiv = starRef.current.getElementsByClassName('title')[0];
      for (let i = 0; i < titleDiv.getElementsByTagName('div').length; i++) {
        const _text = titleDiv.getElementsByTagName('div')[i];
        gsap.from(_text, {
          autoAlpha: 0,
          scale: 0,
          delay: Math.random() * 1,
        });
        typeof window !== 'undefined' &&
          gsap.to(window, 3, {
            scrollTo: {
              y: starRef.current.getElementsByTagName('section')[1],
            },
            delay: 1.7,
            ease: Power4.easeInOut,
          });
      }
    }
  }, []);

  return (
    <div
      className={`relative w-full h-full text-white bg-black `}
      ref={starRef}
    >
      <Image src='/assets/image/ch3/bg.jpg' layout='fill' />
      <Image src='/assets/image/ch3/star.png' layout='fill' />

      <section className='relative min-h-[160vh] overflow-x-hidden '>
        <h2 className='title pt-[35vh] text-center text-5xl font-thin font-DoHyeon flex  justify-center '>
          {'Star Shotting Pages'
            .split('')
            .map((v, i) =>
              v === ' ' ? <div key={i}>&nbsp;</div> : <div key={i}>{v}</div>
            )}
        </h2>
      </section>
      <section
        className='relative min-h-[60vh] flex flex-col  justify-between'
        id='targetSec'
      >
        <div>
          <ul className='z-10 justify-center text-center text-white'>
            {datas.map((v, i) => (
              <Card key={i}>{v.title}</Card>
            ))}
          </ul>
          <p className='mt-2 text-xl font-bold text-center font-DoHyeon'>
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
