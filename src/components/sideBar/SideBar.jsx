import SideBarMenu from './SideBarMenu';
import SideBarButton from './SideBarabutton'

function SideBarIcon({ image }) {
  return (
    <img className="icon" src={image} alt='twitter' />
  )
}

export default function SideBars() {
  return (
    <>
      <SideBarIcon image='src/components/icons/iconTwitter.svg' />
      <SideBarMenu icon='src/components/icons/sideBar-icon.png' h2='Home' />
      <SideBarMenu icon='src/components/icons/Sidebar_icon-Yes.png' h2='Explore' />
      <SideBarMenu icon='src/components/icons/sidebar-icon-cloche.png' h2='Notifications' />
      <SideBarMenu icon='src/components/icons/sidebar-icon-message.png' h2='Messages' />
      <SideBarMenu icon='src/components/icons/sidebar-icon-save.png' h2='Bookmaks' />
      <SideBarMenu icon='src/components/icons/sidebar-icon-bare.png' h2='Lists' />
      <SideBarMenu icon='src/components/icons/sidebar-icon-contact.png' h2='Profil' />
      <SideBarMenu icon='src/components/icons/sidebar-icon-plus.png' h2='More' />
      <SideBarButton />
    </>
  )
}