import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
const Section = ({
  children,
  style,
}: {
  children?: JSX.Element;
  style?: string;
}) => (
  <section className={`w-full h-screen bg-white ${style}`}>{children}</section>
);
const Home: NextPage = () => {
  const data = [
    {
      title: `블레이저 미드 '77 빈티지'`,
      text: `나이키 블레이저 미드 '77 빈티지는 빈티지한 중창 마감 처리로 나이키 올드 스쿨 농구화의 느낌을 살렸으며, 마치 수년간 보관해온 듯한 룩을 연출합니다.`,
    },
    {
      title: `에어맥스 95`,
      text: `나이키 에어맥스 95에는 놀랄만큼 편안한 착화감과 편안함과 시선을 사로 잡는 스타일, 그리고 재생 소재가 어우러져 있습니다. 펠트,메쉬 그리고 인조 가죽의 풍부한 텍스처를 선보이며 클래식 러닝 DNA에 새로운 디자인을 선사합니다. 적당히 두툼한 디자인과 부드러운 에어 쿠셔닝, 그리고 나이키 그라인드 고무 밑창으로 트렌드를 선도합니다. 이 제품은 중량 기준 20% 이상 재생 소재로 제작했습니다.`,
    },
    {
      title: `리액트 비전 3M`,
      text: `나이키 리액트 비전은 나이키 리액트 기술과 더없이 폭신한 설포로 차원이 다른 편안함을 제공합니다. 다양한 텍스처와 과장된 비율이 3M™ 디테일과 결합되어 초현실적인 독특한 감각을 더해 줍니다.`,
    },
  ];
  const [isActivePage, setIsActivePage] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    sectionRef.current &&
      window &&
      window.addEventListener('scroll', function () {
        const scrollY = this.scrollY;
        const currentPage = Math.floor(
          (scrollY + window.outerHeight / 1.3) / window.outerHeight
        );
        currentPage !== isActivePage && setIsActivePage(currentPage);
      });
  });
  const onMovePage = (index: number) => {
    sectionRef.current &&
      window &&
      window.scrollTo({
        top: sectionRef.current.getElementsByTagName('section')[index]
          .offsetTop,
        behavior: 'smooth',
      });
  };
  return (
    <>
      <Head>
        <title>nike page</title>
      </Head>
      {/* nav */}
      <ul className='fixed z-10 flex flex-col justify-center h-screen text-3xl list-disc right-1 text-slate-500'>
        {Array.from({ length: 4 }, (v, i) => i).map((v, i) => (
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
      <div ref={sectionRef} className='overflow-x-hidden'>
        <Section>
          <div className='flex items-center justify-center h-screen'>
            <h1 className='z-10 font-bold text-7xl'>Nike page</h1>
          </div>
        </Section>
        {data.map((v, dataIndex) => (
          <Section key={dataIndex} style='pt-32'>
            <>
              <div className='relative z-10 w-1/2 min-w-[340px] md:p-10 p-4 ml-5 bg-white/80 backdrop-blur-sm '>
                <h2 className='mb-5 text-3xl font-bold '>{v.title}</h2>
                <p>{v.text}</p>
              </div>
              <div className='relative '>
                {Array.from({ length: 2 }, (v, i) => i + 1).map((v, i) => (
                  <div
                    key={i}
                    className={`fixed duration-700 opacity-1 md:w-1/3 w-1/2 images  
                    ${
                      i === 1
                        ? `top-1/3 left-1/4 ${
                            isActivePage !== dataIndex + 1 &&
                            '-translate-x-32 -translate-y-32 -rotate-12'
                          } `
                        : `top-1/2 right-[10%] ${
                            isActivePage !== dataIndex + 1 &&
                            'translate-x-32 translate-y-32 -rotate-12'
                          } `
                    }
                    ${
                      isActivePage === dataIndex + 1
                        ? 'opacity-1 visible'
                        : 'opacity-0 invisible'
                    }
                    `}
                  >
                    <Image
                      src={`/assets/image/ch2/nike_${dataIndex + 1}_${v}.JPG`}
                      height='1100'
                      width='1700'
                    />
                  </div>
                ))}
              </div>
            </>
          </Section>
        ))}
      </div>
    </>
  );
};

export default Home;
