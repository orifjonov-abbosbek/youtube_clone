import { useState } from "react";
import "./Sidebar.css";

import { GiHamburgerMenu } from "react-icons/gi";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
   
  );
}

export default Sidebar;
