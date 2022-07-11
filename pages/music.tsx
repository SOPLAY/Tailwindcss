import { NextPage } from 'next';
import { HtmlContext } from 'next/dist/shared/lib/html-context';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';
import ColorThief from 'colorthief';

const Section = ({ children }: { children: JSX.Element }) => (
  <section className='w-full h-screen overflow-hidden text-black '>
    {children}
  </section>
);

const Disk = () => (
  <div className='flex items-center justify-center w-full h-full overflow-hidden rounded-full shadow-[0_0_25px_5px_rgba(0,0,0,0.5)] bg-gradient-to-tl from-black via-black/80 to-black animate-spin-slow '>
    <div className='w-1/3 min-w-[50px] min-h-[50px] bg-blue-400 border-2 border-white border-dashed rounded-full h-1/3 flex items-center justify-center'>
      <div className='w-2 h-2 bg-black rounded-full' />
    </div>
  </div>
);

const Home: NextPage = () => {
  const data = [
    { image: '/assets/image/ch2/music/iu_0.jpg' },
    { image: '/assets/image/ch2/music/iu_1.jpg' },
    { image: '/assets/image/ch2/music/iu_2.jpg' },
    { image: '/assets/image/ch2/music/iu_3.jpg' },
    { image: '/assets/image/ch2/music/iu_4.jpg' },
  ];
  const targetRef = useRef<HTMLDivElement>(null);

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (targetRef.current) {
      const targetImg = targetRef.current
        .getElementsByClassName('active')[0]
        .getElementsByTagName('img')[1];
      if (targetImg) {
        const colorThief = new ColorThief();
        const temp = colorThief.getPalette(targetImg, 2);
        if (temp) {
          targetRef.current.getElementsByTagName('section')[
            currentPage
          ].style.background = `linear-gradient(120deg,${temp
            .map((v) => `#${v.map((v2) => v2.toString(16)).join('')}`)
            .join(',')})`;
        }
      }
    }
  });

  const onClickBtn = (type: 'prev' | 'next' = 'prev') => {
    const target = type === 'prev' ? currentPage - 1 : currentPage + 1;
    setCurrentPage(
      target % data.length < 0 ? data.length - 1 : target % data.length
    );
  };
  return (
    <>
      <Head>
        <title>music</title>
      </Head>

      <div ref={targetRef} className='relative'>
        {data.map((v, i) => (
          <section
            key={i}
            className={`fixed w-full h-screen overflow-hidden text-black duration-300 pr-16 ${
              i === currentPage ? 'active' : 'opacity-0'
            }`}
          >
            <div
              className={`relative flex flex-col items-center justify-center h-full `}
            >
              <div className='relative md:w-[400px] md:h-[400px] w-[250px] h-[250px] box-border group'>
                <div className='absolute z-10 '>
                  <Image
                    src={v.image}
                    height={400}
                    width={400}
                    className='img'
                    priority={true}
                  />
                </div>
                <div
                  className={`absolute w-full h-full duration-700 group-hover:translate-x-[60%] delay-100 ${
                    i === currentPage ? 'translate-x-[45%]' : ''
                  }`}
                >
                  <Disk />
                </div>
              </div>
            </div>
          </section>
        ))}
        <div className='fixed bottom-[10%] pr-16 w-full text-center '>
          <button className='music-btn' onClick={() => onClickBtn('prev')}>
            PREV
          </button>
          <ul className='relative inline-block h-full text-center text-black '>
            {data.map((v, i) => (
              <li
                key={i}
                className={`relative  inline-block w-[10px] h-[10px] my-auto md:mx-2 mx-1  text-center rounded-full duration-300 ease-out 
                      cursor-pointer
                      ${i === currentPage ? 'bg-black/90' : 'bg-black/30'}`}
                onClick={() => setCurrentPage(i)}
              >
                <span className='hidden'>1</span>
              </li>
            ))}
          </ul>
          <button className='music-btn' onClick={() => onClickBtn('next')}>
            NEXT
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
