import React, { Component } from "react";
import { connect } from "react-redux";

import { getRooms } from "../actions/chatActions";
import { logOut } from "../actions/authActions";

import Sidebar from "../components/Sidebar";

class LobbyPage extends Component {
  componentWillMount = () => {
    this.props.getRooms();
  };

  render() {
    const { user, rooms, logOut } = this.props;
    return (
      <section className="lobby">
        <div className="container">
          <div className="chat-container">
            <div className="chat-area">messages</div>
            <Sidebar user={user} rooms={rooms} logOut={logOut} />
          </div>
        </div>
      </section>
    );
  }
}

export default connect(
  state => ({
    user: state.auth.user,
    rooms: state.chat.rooms,
  }),
  { getRooms, logOut },
)(LobbyPage);
