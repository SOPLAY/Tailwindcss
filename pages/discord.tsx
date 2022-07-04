import Sidebar from '@components/common/Sidebar';
import { NextPage } from 'next';
import React from 'react';

//main
const Home: NextPage = () => {
  return (
    <div className='flex'>
      <Sidebar />
    </div>
  );
};

export default Home;
