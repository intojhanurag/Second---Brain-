import { TwitterIcon } from "../../icons/Twitter";
import { SidebarItem } from "./SidebarItem";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons for the toggle button
import { YouTubeIcon } from "../../icons/YoutubeIcon";
import { Logo } from "./Logo";
import "./Sidebar.css"; // Import the CSS file for the sidebar

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`fixed top-0 left-0 h-full bg-[#474646] shadow transition-all duration-300 ${isCollapsed ? "w-20" : "w-72"}`}>
      <div className="sidebar-content">
        <div className="logo-container flex items-center justify-center py-4">
          <Logo className="text-purple-700" />
          {!isCollapsed && <span className="ml-2 text-2xl font-semibold">Brainly</span>}
        </div>
        <div className="social-icons flex flex-col items-center pt-8">
          <SidebarItem text="Twitter" icon={<TwitterIcon />} isCollapsed={isCollapsed} />
          <SidebarItem text="YouTube" icon={<YouTubeIcon />} isCollapsed={isCollapsed} />
        </div>
      </div>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isCollapsed ? <FaArrowRight /> : <FaArrowLeft />}
      </button>
    </div>
  );
}