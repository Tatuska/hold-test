import React from "react";
import VideoCorner from "../VideoCorner/VideoCorner";
import LocalCorner from "../LocalCorner/LocalCorner";
import NewsTabs from "../NewsTabs/NewsTabs";
import InMedia from "../InMedia/InMedia";
import Calendar from "../Calendar/Calendar";

const Sidebar = () => {
  return (
    <div className="sideBar">
      <img src="https://picsum.photos/247/112/?random" alt="" />
      <img src="https://picsum.photos/247/112/?random" alt="" />
      <img src="https://picsum.photos/247/112/?random" alt="" />
      <VideoCorner />
      <LocalCorner />
      <NewsTabs />
      <InMedia />
      <Calendar />
    </div>
  );
};

export default Sidebar;
