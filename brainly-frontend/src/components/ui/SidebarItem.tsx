

import { ReactElement } from "react";

interface SidebarItemProps {
  text: string;
  icon: ReactElement;
  isCollapsed?: boolean;
}

export function SidebarItem({ text, icon, isCollapsed }: SidebarItemProps) {
  return (
    <div className="flex items-center text-gray-700 py-2 cursor-pointer hover:bg-[#666666] pr-6 rounded max-w-48 pl-4 transition-all duration-150">
      <div className="pr-2" style={{fontSize: isCollapsed?"2rem":"3rem"}}>{icon}</div>
      {!isCollapsed && <div className="text-[20px] text-white">{text}</div>}
    </div>
  );
}