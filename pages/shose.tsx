import { NextPage } from 'next';
import React, { useEffect, useRef, useState } from 'react';

const Section = ({ children }: { children?: JSX.Element }) => (
  <section className='w-full h-screen bg-yellow-200'>{children}</section>
);

const Home: NextPage = () => {
  const data = [
    { title: 'page1', text: '스케치' },
    { title: 'page2', text: 'color1' },
    { title: 'page3', text: 'color2' },
    { title: 'page4', text: 'color3' },
    { title: 'page5', text: 'color4' },
    { title: 'page6', text: 'color5' },
    { title: 'page7', text: 'color6' },
  ];

  const [isActivePage, setIsActivePage] = useState(0);

  //useEffect
  useEffect(() => {
    window?.addEventListener('scroll', function () {
      const scrollY = this.scrollY;
      const currentPage = Math.floor(
        (scrollY + window.outerHeight / 2) / window.outerHeight
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
      <ul className='fixed flex flex-col justify-center h-screen text-xl list-disc right-3 text-slate-500'>
        {Array.from({ length: 8 }, (v, i) => i).map((v, i) => (
          <li
            className={`${
              i === isActivePage && 'text-black'
            } duration-300 cursor-pointer`}
            onClick={() => onMovePage(i)}
            key={i}
          />
        ))}
      </ul>
      <div ref={targetPageRef}>
        <Section>
          <div>페이지 타이틀</div>
        </Section>
        {data.map((v, i) => (
          <Section>
            <>
              <div className='pt-32 pl-10'>
                <h1 className='mb-5 text-3xl text-slate-700'>{v.title}</h1>
                <p>{v.text}</p>
              </div>
            </>
          </Section>
        ))}
      </div>
    </>
  );
};

export default Home;
