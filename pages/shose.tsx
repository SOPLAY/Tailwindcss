import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';

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
    window?.addEventListener('scroll', function () {});
  });

  return (
    <>
      <ul className='fixed right-0 flex flex-col justify-center h-screen text-lg list-disc text-slate-500'>
        {Array.from({ length: 8 }, (v, i) => i).map((v, i) => (
          <li className={`${i === isActivePage && 'text-black'}`} key={i} />
        ))}
      </ul>
      <Section>
        <div>페이지 타이틀</div>
      </Section>
      <Section>
        <div>asd</div>
      </Section>
    </>
  );
};

export default Home;
