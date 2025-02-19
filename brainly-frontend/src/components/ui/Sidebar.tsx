import { TwitterIcon } from "../../icons/Twitter";
import { SidebarItem } from "./SidebarItem";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons for the toggle button
import { YouTubeIcon } from "../../icons/YoutubeIcon";
import { FacebookIcon } from "../../icons/FacebookIcon";
import { InstagramIcon } from "../../icons/InstagramIcon";
import { PinterestIcon } from "../../icons/PinterestIcon";
import { GalleryIcon } from "../../icons/GalleryIcon";
import { SpotifyIcon } from "../../icons/SpotifyIcon";
import { LinkedinIcon } from "../../icons/LinkedinIcon";
import { Logo } from "./Logo";
import "./Sidebar.css"; // Import the CSS file for the sidebar

interface SidebarProps{
  isCollapsed:boolean;
  toogleSidebar:()=>void
}

export function Sidebar({isCollapsed,toogleSidebar}:SidebarProps) {
  return (
    <div className={`fixed top-0 left-0 h-full bg-[#474646] shadow transition-all duration-300 ${isCollapsed ? "w-20" : "w-72"}`}>
      <div className="sidebar-content">
        <div className="logo-container flex items-center justify-center py-4">
          <Logo className="text-purple-700" />
          {!isCollapsed && <span className="ml-2 text-white text-[35px] font-semibold">ThinkFlow</span>}
        </div>
        <div className="social-icons flex flex-col items-center pt-8 pl-4">
          <SidebarItem text="Twitter" icon={<TwitterIcon />} isCollapsed={isCollapsed} />
          <SidebarItem text="YouTube" icon={<YouTubeIcon />} isCollapsed={isCollapsed} />
          <SidebarItem text="Facebook" icon={<FacebookIcon />} isCollapsed={isCollapsed} />
          <SidebarItem text="Instagram" icon={<InstagramIcon />} isCollapsed={isCollapsed} />
          <SidebarItem text="Pinterest" icon={<PinterestIcon />} isCollapsed={isCollapsed} />
          <SidebarItem text="Gallery" icon={<GalleryIcon />} isCollapsed={isCollapsed} />
          <SidebarItem text="Spotify" icon={<SpotifyIcon />} isCollapsed={isCollapsed} />
          <SidebarItem text="Linkedin" icon={<LinkedinIcon />} isCollapsed={isCollapsed} />
          
          
        </div>
      </div>
      <button className="toggle-button" onClick={toogleSidebar}>
        {isCollapsed ? <FaArrowRight /> : <FaArrowLeft />}
      </button>
    </div>
  );
}