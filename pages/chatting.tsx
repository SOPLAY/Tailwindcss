import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Section = ({ children }: { children: JSX.Element }) => (
  <section className='w-full h-screen text-white bg-black/90'>
    {children}
  </section>
);

const Home: NextPage = () => {
  const data = [
    {
      title: 'Page 1',
      image: '/assets/image/ch2/sample1.png',
      ref: useRef<HTMLDivElement>(null),

      text: '우는 인간이 튼튼하며, 하는 그들은 구할 무엇을 구하지 운다. 찬미를 전인 이상의 석가는 보라. 따뜻한 어디 듣기만 풍부하게 웅대한 산야에 그것은 그들에게 있음으로써 황금시대다. 내려온 작고 발휘하기 심장의 옷을 따뜻한 그들의 뛰노는 있는가? 속에서 하여도 싶이 있음으로써 싹이 어디 인간에 무한한 얼마나 피다. 찾아다녀도, 방황하였으며, 때에, 못할 간에 곳으로 그림자는 때문이다. 같은 오아이스도 이상의 사랑의 얼마나 것이다.보라, 위하여서. 인간이 노래하며 풀이 유소년에게서 대중을 것은 인생을 청춘의 봄바람이다. 만천하의 따뜻한 그들에게 못할 청춘의 이상 모래뿐일 것이다.',
    },
    {
      title: 'Page 2',
      image: '/assets/image/ch2/sample2.png',
      ref: useRef<HTMLDivElement>(null),

      text: '가슴이 부패를 소담스러운 얼음 곧 위하여 방황하였으며, 열락의 피어나는 황금시대다. 거선의 그들의 풍부하게 것이다. 인생에 있을 풍부하게 피가 황금시대다. 하였으며, 위하여, 청춘 황금시대다. 얼음 우리 귀는 있는 품고 용기가 찾아다녀도, 돋고, 듣는다. 하였으며, 넣는 뜨고, 방지하는 길지 쓸쓸한 뜨거운지라, 거선의 말이다. 인생의 이상은 들어 쓸쓸하랴? 심장의 현저하게 없으면, 가치를 철환하였는가? 없으면, 같이, 할지니, 위하여 피는 그들을 영락과 어디 청춘은 뿐이다. 이상을 봄바람을 굳세게 이것이다.',
    },
    {
      title: 'Page 3',
      image: '/assets/image/ch2/sample3.png',
      ref: useRef<HTMLDivElement>(null),
      text: '꽃이 무엇을 노래하며 바로 꽃 철환하였는가? 위하여, 가슴에 인생에 불어 석가는 그들은 구하기 것이다. 이상 우리 설레는 품에 무한한 실현에 것이다. 우리의 못하다 풀이 있다. 동산에는 이상 사랑의 인간의 없는 산야에 갑 봄바람이다. 인생에 못하다 그들에게 가지에 그들의 것이다. 방황하였으며, 청춘의 밝은 피가 인생의 것이다. 속에 만물은 목숨이 수 우리 풀이 있는 가치를 철환하였는가? 피가 불러 인생에 피가 끓는 것이다. 곳이 열락의 무한한 그들의 따뜻한 칼이다.',
    },
    {
      title: 'Page 4',
      image: '/assets/image/ch2/sample4.png',
      ref: useRef<HTMLDivElement>(null),
      text: '작고 그것을 설산에서 것은 보배를 인도하겠다는 못할 그러므로 얼음과 때문이다. 인간의 끓는 생의 어디 것은 피어나는 보라. 우리의 찾아 시들어 불어 있는가? 사는가 풍부하게 곳으로 부패뿐이다. 인도하겠다는 지혜는 가치를 말이다. 너의 못하다 품에 것이다. 청춘은 심장의 이 이상 그들의 철환하였는가? 피는 이상은 실현에 인간은 꾸며 우리 아니더면, 것이다. 인간에 이상, 긴지라 것은 철환하였는가? 열매를 물방아 목숨이 이상 풀이 이상은 것이다. 착목한는 이는 힘차게 것이다.',
    },
  ];

  const [targetVisible, setTargetVisible] = useState(0);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    typeof window !== 'undefined' &&
      window.addEventListener('scroll', function (event) {
        const scrollY = this.scrollY;
        data.forEach((v, i) => {
          if (v.ref.current) {
            const target = v.ref.current;
            if (
              scrollY > target.offsetTop - window.outerHeight / 2 &&
              scrollY <
                target.offsetTop - window.outerHeight / 2 + target.offsetHeight
            ) {
              setTargetVisible(i + 1);
            }
          }
        });
      });
  });

  return (
    <>
      <Head>
        <title>interactive chat</title>
      </Head>
      <Section>
        <div className='flex items-center justify-center h-full' ref={titleRef}>
          <h1 className='z-10 text-7xl'>페이지 타이틀</h1>
          <div
            className={`fixed duration-700 left-1/3 top-1/4  scale-150 ${
              0 === targetVisible ? 'opacity-1' : 'opacity-0'
            }`}
          >
            <Image
              src={'/assets/image/ch2/sample0.png'}
              width={1920}
              height={1080}
              alt={`title 이미지`}
              className=' image'
            />
          </div>
        </div>
      </Section>
      {data.map((v, i) => (
        <Section key={i}>
          <div className='box-border relative mx-20' ref={v.ref}>
            <h2 className='z-10 pb-3 mt-32 text-xl font-bold text-discordGray-600'>
              {v.title}
            </h2>
            <p className='z-10 w-2/5'>{v.text}</p>
            <div
              className={`fixed duration-700 left-1/3 top-1/4 scale-150 ${
                i + 1 === targetVisible ? 'opacity-1' : 'opacity-0'
              }`}
            >
              <Image
                src={v.image}
                width={1920}
                height={1080}
                alt={`${v.title} 이미지`}
                className='image'
              />
            </div>
          </div>
        </Section>
      ))}
    </>
  );
};

export default Home;
