import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Sidebar from '@components/common/Sidebar';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tailwindcss 연습</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Sidebar />
      <div className='flex min-h-screen ml-16 bg-discordGray-600'>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
