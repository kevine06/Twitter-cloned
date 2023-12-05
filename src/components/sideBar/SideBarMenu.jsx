export default function SideBarMenu({icon, h2}) {
  return (
    <div className="side-bar-menu">
      <img className="side-bar-icon"src={icon} alt="menu" />
      {h2}
      </div>
    )
}