import { NextPage } from 'next';
import { HtmlContext } from 'next/dist/shared/lib/html-context';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';
import ColorThief from 'colorthief';

const Section = ({ children }: { children: JSX.Element }) => (
  <section className='w-full h-screen overflow-hidden text-black bg-white'>
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
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [bgColor, setBgColor] = useState(['', '']);
  useEffect(() => {
    if (targetRef.current) {
      const targetImg = targetRef.current.getElementsByTagName('img')[1];
      if (targetImg.complete && !bgColor[0]) {
        const colorThief = new ColorThief();
        const temp = colorThief.getPalette(targetImg, 2);
        temp &&
          setBgColor(
            temp.map((v) => `#${v.map((v2) => v2.toString(16)).join('')}`)
          );

        // console.log(temp);
      }
    }
  });

  console.log(bgColor);

  const bgGradient = `from-[${bgColor[0]}] to-[${bgColor[1]}]`;
  return (
    <>
      <Head>
        <title>music</title>
      </Head>

      <div ref={targetRef}>
        <Section>
          <>
            <div
              className={`relative flex items-center justify-center h-full  bg-gradient-to-r  ${
                bgColor[0] && bgGradient
              } active`}
            >
              <div className='relative md:w-[400px] md:h-[400px] w-[250px] h-[250px] box-border group'>
                <div className='absolute z-10 '>
                  <Image
                    src='/assets/image/ch2/music/iu_0.jpg'
                    height={400}
                    width={400}
                    className='img'
                  />
                </div>
                <div className='absolute w-full h-full duration-300 group-hover:translate-x-[60%] translate-x-[45%]'>
                  <Disk />
                </div>
              </div>
            </div>
          </>
        </Section>
      </div>
    </>
  );
};

export default Home;
