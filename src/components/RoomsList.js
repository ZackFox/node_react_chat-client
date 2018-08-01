import React from "react";
import { connect } from "react-redux";

import RoomItem from "./RoomItem";
import { setActiveRoom } from "../actions/chatActions";

const RoomsList = ({ socket, rooms, activeRoom, setActiveRoom }) => {
  const handleActiveRoom = (room, activeRoom) => {
    if (activeRoom) {
      socket.emit("room:leave", activeRoom);
    }
    socket.emit("room:join", room);
    setActiveRoom(room);
  };

  return (
    <div className="rooms-list">
      {rooms &&
        rooms.map(room => (
          <RoomItem
            key={room.id}
            room={room}
            activeRoom={activeRoom}
            setActiveRoom={handleActiveRoom}
          />
        ))}
    </div>
  );
};

export default connect(
  state => ({
    rooms: state.rooms.allRooms,
    activeRoom: state.rooms.activeRoom,
  }),
  { setActiveRoom },
)(RoomsList);
