import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Section = ({ children }: { children?: JSX.Element }) => (
  <section className='w-full h-screen bg-[#e8e19b]'>{children}</section>
);

const Home: NextPage = () => {
  const data = [
    { title: 'Step 1.', text: '스케치' },
    { title: 'Step 2.', text: '1차 색칠' },
    { title: 'Step 3.', text: '2차 색칠' },
    { title: 'Step 4.', text: '3차 색칠' },
    { title: 'Step 5.', text: 'base 색칠' },
    { title: 'Step 6.', text: '세부 색칠' },
    { title: 'Step 7.', text: '완성!' },
  ];

  const [isActivePage, setIsActivePage] = useState(0);

  //useEffect
  useEffect(() => {
    window?.addEventListener('scroll', function () {
      const scrollY = this.scrollY;
      const currentPage = Math.floor(
        (scrollY + window.outerHeight / 1.3) / window.outerHeight
      );
      currentPage !== isActivePage && setIsActivePage(currentPage);
    });
  });

  const targetPageRef = useRef<HTMLDivElement>(null);

  const onMovePage = (index: number) => {
    targetPageRef.current &&
      window &&
      window.scrollTo({
        top: targetPageRef.current.getElementsByTagName('section')[index]
          .offsetTop,
        behavior: 'smooth',
      });
  };
  return (
    <>
      <Head>
        <title>Drawing shoes</title>
      </Head>
      {/* nav */}
      <ul className='fixed z-10 flex flex-col justify-center h-screen text-3xl list-disc right-1 text-slate-500'>
        {Array.from({ length: 8 }, (v, i) => i).map((v, i) => (
          <li
            className={`${
              i === isActivePage && 'text-black'
            } duration-300 cursor-pointer my-[-5px] `}
            onClick={() => onMovePage(i)}
            key={i}
          >
            <span className='invisible'>-</span>
          </li>
        ))}
      </ul>
      {/* content */}
      <div ref={targetPageRef}>
        <Section>
          <div className='relative flex items-center justify-center h-screen z-[100]'>
            <h1 className='w-5/6 text-4xl font-bold text-center'>
              How&nbsp;to&nbsp;Drawing shoes
            </h1>
          </div>
        </Section>
        {data.map((v, i) => (
          <Section key={i}>
            <>
              <div className='relative z-50 pt-32 pl-10'>
                <h1 className='z-10 mb-5 text-3xl text-slate-700'>{v.title}</h1>
                <p>{v.text}</p>
              </div>
              <div
                className={`fixed bottom-12 right-12 max-w-[750px] md:w-3/5 w-1/2 md:h-1/2 overflow-hidden duration-700 ${
                  isActivePage !== 0 &&
                  (isActivePage === i + 1 || isActivePage === i)
                    ? 'opacity-1'
                    : 'opacity-0'
                }`}
              >
                <Image
                  src={`/assets/image/ch2/pic_${i + 1}.jpg`}
                  width='1000'
                  height='1000'
                  className='scale-110 translate-y-1/4 md:-translate-y-1/4'
                />
              </div>
            </>
          </Section>
        ))}
      </div>
    </>
  );
};

export default Home;
