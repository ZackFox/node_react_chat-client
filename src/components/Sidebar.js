import React from "react";
import { connect } from "react-redux";

import UserBlock from "./UserBlock";
import RoomsList from "./RoomsList";

const Sidebar = ({ socket, user, logOut }) => {
  return (
    <React.Fragment>
      <UserBlock user={user} logOut={logOut} />
      <input type="text" name="room-search" placeholder="Поиск комнат" />
      <button>Создать комнату</button>
      <RoomsList socket={socket} />
    </React.Fragment>
  );
};

export default connect(
  state => ({
    user: state.auth.user,
  }),
  null,
)(Sidebar);
