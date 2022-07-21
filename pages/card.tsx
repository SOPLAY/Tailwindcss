import gsap, { Power3 } from 'gsap';
import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';

type CardProps = {
  children: React.ReactNode;
  bgGradient: string;
};

const Card: React.FC<CardProps> = ({ children, bgGradient }) => (
  <div
    className={`absolute w-[200px] h-28 rounded-2xl p-3 bg-white shadow-[5px_5px_12px_rgba(0,0,0,0.3)] bg-gradient-to-tl ${bgGradient}`}
  >
    <p className={`text-right pr-3 text-white/50  font-bold`}>{children}</p>
  </div>
);

type ButtonProps = { children: React.ReactNode; onClick: () => void };
const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button
    className='px-3 py-1 m-2 text-white rounded-md bg-black/80'
    onClick={() => onClick()}
  >
    {children}
  </button>
);

const CardPage = ({
  cardData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const sectionRef = useRef<HTMLElement>(null);

  const [windowSize, setWindowSize] = useState({
    height: 0,
    width: 0,
  });

  const cardSetting = () => {
    sectionRef.current?.querySelectorAll('div').forEach((card, i) =>
      gsap.to(card, 1, {
        top: windowSize.height / 2 - i * 40,
        left: windowSize.width / 2 - 200 + i * 40,
        rotation: 0,
        ease: Power3.easeInOut,
        delay: i * 0.1,
      })
    );
  };

  const onRandom = () => {
    sectionRef.current?.querySelectorAll('div').forEach((card, i) =>
      gsap.to(card, 1, {
        top: Math.random() * windowSize.height,
        left: Math.random() * (windowSize.width - 100),
        rotation: Math.random() * 180,

        ease: Power3.easeInOut,
        delay: i * 0.2,
      })
    );
  };

  //로드후 최초 실행
  useEffect(() => {
    if (window) {
      setWindowSize({ height: window.innerHeight, width: window.innerWidth });
      window.addEventListener('resize', () => {
        setWindowSize({ height: window.innerHeight, width: window.innerWidth });
      });
    }
  }, []);

  //사이즈 변화 감지시 실행
  useEffect(() => {
    cardSetting();
  }, [windowSize]);

  return (
    <>
      <Head>
        <title>Card-Motion</title>
      </Head>
      <div className='relative h-screen bg-purple-100'>
        <h1 className='my-5 text-3xl text-center font-DoHyeon'>Card-Motion</h1>
        <section className='flex flex-wrap justify-around' ref={sectionRef}>
          {cardData.map((v, i) => (
            <Card bgGradient={v.bgGradient} key={i}>
              {`${v.title.toUpperCase()} ${i + 1}`}
            </Card>
          ))}
        </section>
        <div className='fixed w-full text-center bottom-[2%] '>
          <Button onClick={() => onRandom()}>Random</Button>
          <Button onClick={() => cardSetting()}>Reset</Button>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  type ICardData = { title: string; bgGradient: string };
  const cardData: ICardData[] = [
    { title: 'card', bgGradient: 'from-[#FBAB7E] to-[#F7CE68]' },
    { title: 'card', bgGradient: 'from-[#FF5E7E] to-[#FF99AC]' },
    { title: 'card', bgGradient: 'from-[#0093E9] to-[#80D0C7]' },
    { title: 'card', bgGradient: 'from-[#fd1d1d] to-[#833ab4]' },
    { title: 'card', bgGradient: 'from-[#000000] to-[#FC00FF]' },
  ];
  return {
    props: {
      cardData,
    },
  };
};

export default CardPage;
