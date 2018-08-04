import React from "react";
import RoomItem from "./RoomItem";

const RoomsList = ({ socket, rooms }) => {
  return (
    <div className="rooms-list">
      {rooms &&
        rooms.map(room => (
          <RoomItem key={room.id} socket={socket} room={room} />
        ))}
    </div>
  );
};

export default RoomsList;
