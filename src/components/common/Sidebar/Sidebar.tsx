import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/imgs/logo/logo-light.svg";
import { sidebarLinks } from "./sidebarData";
import {
  LockOpenIcon,
  LockIcon,
  BulbIcon,
  OffBulbIcon,
} from "../../../assets/imgs/svgImgs/svgImgs";
import "./Sidebar.scss";

interface SidebarLink {
  id: number;
  icon: JSX.Element;
  heading: string;
  to: string;
  children?: SidebarLink[];
}

interface Props {
  handleLockSidebar: () => void;
  active: any;
  lockSidebar: boolean;
  handleSidebar: () => void;
}

const Sidebar: React.FC<Props> = ({
  handleLockSidebar,
  active,
  lockSidebar,
  handleSidebar,
}) => {
  const [userTheme, setUserTheme] = useState("theme-light");
  const [openNodes, setOpenNodes] = useState<number[]>([]);

  useEffect(() => {
    document.documentElement.className = userTheme;
  }, [userTheme]);

  const changeTheme = () => {
    setUserTheme((prevTheme: any) =>
      prevTheme === "theme-light" ? "theme-dark" : "theme-light"
    );
  };

  const toggleSubMenu = (itemId: number) => {
    setOpenNodes((prevOpenNodes) =>
      prevOpenNodes.includes(itemId)
        ? prevOpenNodes.filter((id) => id !== itemId)
        : [...prevOpenNodes, itemId]
    );
  };

  const renderMenuItem = (
    item: SidebarLink,
    depth: number = 0,
    isParent: boolean = true
  ) => {
    const hasChildren = item.children && item.children.length > 0;
    const isOpen = openNodes.includes(item.id);
    const paddingLeft = 20; 
    const className = isParent ? "parent" : "child";

    return (
      <>
        {hasChildren ? (
          <>
            <div
              className={`nav_link ${className} ${
                hasChildren ? "has-children" : ""
              }`}
              style={{ paddingLeft: `${depth * paddingLeft}px` }}
              onClick={() => toggleSubMenu(item.id)}
            >
              <span className='nav_link_icon'>{item.icon}</span>
              <span className='nav_link_text'>{item.heading}</span>
            </div>
            {isOpen && (
              <ul className='child-list'>
                {item.children?.map((childItem) => (
                  <li key={childItem.id}>
                    {renderMenuItem(childItem, depth + 1, false)}
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <NavLink to={item.to} className='nav_link' onClick={handleSidebar}>
            <span className='nav_link_icon'>{item.icon}</span>
            <span className='nav_link_text'>{item.heading}</span>
          </NavLink>
        )}
      </>
    );
  };

  return (
    <>
      <div
        className={`sidebar_backdrop d-lg-none ${active ? "active" : ""}`}
        onClick={handleSidebar}
      ></div>
      <aside className={`sidebar ${lockSidebar ? "locked" : ""}`}>
        <div className='sidebar_inner'>
          <div className='sidebar_inner_header'>
            <div className='sidebar_logo'>
              <Link to='/'>
                <img src={logo} alt='' />
              </Link>
            </div>
          </div>
          <div className='sidebar_inner_body'>
            <div className='sidebar-scrollable'>
              <ul>
                {sidebarLinks.map((item: SidebarLink) => (
                  <li key={item.id}>{renderMenuItem(item)}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className='sidebar_inner_footer'>
            <div>
              <button
                title='Lock Sidebar'
                className='d-lg-block d-none'
                onClick={handleLockSidebar}
              >
                {lockSidebar ? <LockIcon /> : <LockOpenIcon />}
              </button>
              <button title='Theme Change' onClick={changeTheme}>
                {userTheme === "theme-light" ? <BulbIcon /> : <OffBulbIcon />}
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
