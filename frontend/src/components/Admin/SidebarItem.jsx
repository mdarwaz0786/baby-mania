/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';

const SidebarItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  if (item.childrens) {
    return (
      <>
        <div className={open ? "sidebar-item1 open1" : "sidebar-item1"}>
          <div className="sidebar-title1">
            <span><i><item.icon /></i>{item.title}</span>
            <span className="toggle-btn1" onClick={() => setOpen(!open)}><IoIosArrowDown /></span>
          </div>
          <div className="sidebar-content1">
            {
              item.childrens.map((child, index) => {
                return (
                  <Link to={child.path} key={index}>{child.title}</Link>
                )
              })
            }
          </div>
        </div>
      </>
    );
  } else {
    return (
      <Link to={item.path} className="sidebar-item1">
        <div className="sidebar-title1">
          <span><i><item.icon /></i>{item.title}</span>
        </div>
      </Link>
    );
  }
};

export default SidebarItem;
