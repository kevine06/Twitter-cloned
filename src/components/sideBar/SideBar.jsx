import  { useContext } from 'react'
import SideBarMenu from './SideBarMenu';
import SideBarButton from './SideBarabutton';
import { Link } from 'react-router-dom';
import IconSideBarHome from '../icons/sideBar-icon.png';
import IconSideBarExplore from '../icons/sidebar-icon-Yes.png';
import IconSideBarNotification from '../icons/sidebar-icon-cloche.png';
import IconSideBarMessage from '../icons/sidebar-icon-message.png';
import IconSideBarBookmaks from '../icons/sidebar-icon-save.png';
import IconSideBarList from '../icons/sidebar-icon-bare.png';
import IconSideBarProfil from '../icons/sidebar-icon-contact.png';
import IconSideBarMore from '../icons/sidebar-icon-plus.png';
import { UserContext } from '../../context/UserContext';


function SideBarIcon({ TwitterLogoSideBar }) {
  return (
    <img className="icon" src={TwitterLogoSideBar} alt='twitter' />
  )
}

export default function SideBars() {
  return (
    <div className='sidebar'>
      <SideBarIcon TwitterLogoSideBar='src/components/icons/iconTwitter.svg' />
      <Link to='/' className='ButtonSeeMoreTrending'><SideBarMenu icon={IconSideBarHome} h2='Home' /></Link>
      <SideBarMenu icon={IconSideBarExplore} h2='Explore' />
      <SideBarMenu icon={IconSideBarNotification} h2='Notifications' />
      <SideBarMenu icon={IconSideBarMessage} h2='Messages' />
      <SideBarMenu icon={IconSideBarBookmaks} h2='Bookmaks' />
      <SideBarMenu icon={IconSideBarList} h2='Lists' />
      <Link to='/profilUser' className='ButtonSeeMoreTrending'><SideBarMenu icon={IconSideBarProfil} h2='Profil'/></Link>
      <SideBarMenu icon={IconSideBarMore} h2='More' />
      <SideBarButton />
    </div>
  )
}