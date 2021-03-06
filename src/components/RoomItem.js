import React from "react";
import { connect } from "react-redux";

import { setActiveRoom } from "../actions/roomsActions";
import { api } from "../constants/api";

const RoomItem = ({ socket, room, activeRoom, setActiveRoom }) => {
  const handleClick = () => {
    if (activeRoom) {
      socket.emit("room:leave", activeRoom);
    }
    socket.emit("room:join", room);
    setActiveRoom(room);
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

export default connect(
  state => ({
    activeRoom: state.rooms.activeRoom,
  }),
  { setActiveRoom },
)(RoomItem);
