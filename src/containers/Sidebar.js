import React from "react";
import { connect } from "react-redux";

import UserBlock from "../components/UserBlock";
import RoomsList from "../components/RoomsList";

const Sidebar = ({ socket, user, rooms, logOut }) => {
  return (
    <React.Fragment>
      <UserBlock user={user} logOut={logOut} />
      <input type="text" name="room-search" placeholder="Поиск комнат" />
      <button>Создать комнату</button>
      <RoomsList socket={socket} rooms={rooms} />
    </React.Fragment>
  );
};

export default connect(
  state => ({
    user: state.auth.user,
    rooms: state.rooms.allRooms,
  }),
  null,
)(Sidebar);
