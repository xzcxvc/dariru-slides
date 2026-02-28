import React from "react";
import { navItems } from "../constants";
import Button from "./button";
import Shadow from "./shadow";
import ClickSpark from "./click-spark";

const handleNavClick = (href) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Sidebar = () => {
  return (
    <aside className="flex fixed bg-[#FFF8E7] h-[100vh] transition-all top-0 left-0 border-r-5 z-50 border-[#404A65] items-center justify-center">
      <ClickSpark sparkColor="#000" sparkRadius={42} sparkCount={8}>
        <div className="min-h-[calc(100vh-35px)] w-20 flex flex-col justify-evenly ">
          <div className="flex flex-col items-center justify-between min-h-[100vh] gap-12 p-8 text-[#212435]">
            <ul className="relative flex flex-col justify-center items-center gap-5 min-h-[100vh]">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="relative group" key={item.name}>
                    <Shadow className="" />
                    <Button
                      onClick={() => handleNavClick(item.href)}
                      className="h-12 w-12 hover:bg-[#01C29F] bg-[#FFF8E7] transition-all 
                       text-[#212435] "
                    >
                      <Icon />
                    </Button>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </ClickSpark>
    </aside>
  );
};

export default Sidebar;
