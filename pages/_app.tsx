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
      <div className='flex min-h-screen pl-16 bg-discordGray-600'>
        {/* Sidebar w-16 */}
        <Sidebar />
        <div>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
