import { NextPage } from 'next';
import React from 'react';
import { IconType } from 'react-icons';
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFill, FaFire, FaPoo } from 'react-icons/fa';
// sidebar
interface TypeSBI {
  icon: any;
  styles: string;
  name: string;
}
const SideBarIcon = ({ icon, styles, name }: TypeSBI) => {
  return (
    <div className={`sidebar-icon group ${styles}`}>
      {icon}
      <span className='stidebar-tooltip group-hover:scale-100'>{name} 💡</span>
    </div>
  );
};

const Sidebar = () => {
  const navList = [
    {
      name: 'navItem1',
      icon: <FaFire size={20} />,
      styles: '',
    },
    {
      name: 'navItem2',
      icon: <BsPlus size={30} />,
      styles: '',
    },
    {
      name: 'navItem3',
      icon: <BsFillLightningFill size={20} />,
      styles: '',
    },
    {
      name: 'navItem4',
      icon: <FaPoo size={20} />,
      styles: '',
    },
  ];
  return (
    <div className='fixed top-0 left-0 flex flex-col w-16 h-screen m-0 shadow-lg text-secondary bg-primary '>
      {navList.map((value, index) => (
        <SideBarIcon
          key={index}
          icon={value.icon}
          styles={value.styles}
          name={value.name}
        />
      ))}
    </div>
  );
};

//main
const Home: NextPage = () => {
  return (
    <div className='flex'>
      <Sidebar />
    </div>
  );
};

export default Home;
