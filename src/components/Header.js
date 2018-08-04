import React from "react";

import { api } from "../constants/api";

const RoomItem = ({ room, activeRoom, setActiveRoom }) => {
  const handleClick = () => {
    setActiveRoom(room, activeRoom);
  };

  const isActive = activeRoom && activeRoom.id === room.id ? "active" : "";

  return (
    <div className={`room ${isActive}`} onClick={handleClick}>
      <div className="room-avatar">
        <img src={`${api}${room.avatar}`} alt="" />
      </div>
      <span className="room-title">{room.screenname}</span>
    </div>
  );
};

export default RoomItem;
