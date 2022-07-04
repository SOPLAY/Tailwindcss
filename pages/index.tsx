import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center w-full min-h-screen py-2 text-white'>
        <div className='mx-auto'>
          <h1 className='font-sans text-5xl '>
            <span className='font-bold text-blue-500'>TailWindCss</span> 연습
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
