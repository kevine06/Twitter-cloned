export default function SideBarMenu({icon, h2}) {
  return (
    <div className="flex my-1 py-2 px-3 w-40 justify-start hover:bg-gray-900 rounded-full">
      <img className="side-bar-icon"src={icon} alt="menu" />
      {h2}
      </div>
    )
}