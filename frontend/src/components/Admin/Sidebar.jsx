import SidebarItem from "./SidebarItem.jsx";
import items from "./SidebarData.js";
import "./Style.css";

const Sidebar = () => {
  return (
    <>
      <div className="main1">
        <div className="sidebar1">
          {
            items.map((item, index) => <SidebarItem key={index} item={item} />)
          }
        </div>
      </div>
    </>
  );
};

export default Sidebar;
