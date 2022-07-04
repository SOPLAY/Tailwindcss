import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFill, FaFire, FaPoo } from 'react-icons/fa';
import { HiChat, HiHome, HiLightningBolt, HiPlus } from 'react-icons/hi';
// sidebar
interface TypeSBI {
  icon: any;
  styles: string;
  name: string;
  isActive: boolean;
}
const SideBarIcon = ({ icon, styles, name, isActive }: TypeSBI) => {
  return (
    <div
      className={`sidebar-icon group text-2xl ${styles} ${
        isActive && 'bg-green-600 text-white'
      }`}
    >
      {icon}
      <span className='stidebar-tooltip group-hover:scale-100'>{name} 💡</span>
    </div>
  );
};

const Sidebar = () => {
  const navList = [
    {
      name: 'Home',
      icon: <HiHome />,
      styles: '',
      path: '/',
    },
    {
      name: 'chatting',
      icon: <HiChat />,
      styles: '',
      path: '/chatting',
    },
    {
      name: 'Plus',
      icon: <HiPlus />,
      styles: '',
      path: '/plus',
    },
    {
      name: 'meetings',
      icon: <HiLightningBolt />,
      styles: '',
      path: '/meetings',
    },
  ];
  const router = useRouter();

  return (
    <div className='fixed top-0 left-0 flex flex-col w-16 h-screen m-0 shadow-lg text-secondary bg-primary '>
      {navList.map((value, index) => (
        <Link
          href={
            (process.env.NODE_ENV === 'production' ? '/Tailwindcss' : '') +
            value.path
          }
          key={index}
        >
          <a>
            <SideBarIcon
              icon={value.icon}
              styles={value.styles}
              name={value.name}
              isActive={
                router.asPath.replace('/Tailwindcss', '') === value.path
              }
            />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
