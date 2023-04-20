import React from "react";

const SidebarItem = ({ icon, label }) => {
  return (
    <li className="sidebar_item">
      <span className="sidebar_item_icon">{icon}</span>
      <span className="sidebar_item_label">{label}</span>
    </li>
  );
};

export default SidebarItem;
