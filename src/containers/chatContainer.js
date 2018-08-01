import React, { Component } from "react";
import { connect } from "react-redux";
import cookies from "react-cookies";
import io from "socket.io-client";

import Sidebar from "../components/Sidebar";
import ChatView from "../components/ChatView";
import AboutView from "../components/AboutView";

import { getRooms, getMessages } from "../actions/chatActions";
import { logOut } from "../actions/authActions";

class chatContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
    this.token = cookies.load("token");
    this.socket = io("http://localhost:3001", {
      query: `auth_token=${this.token || ""}`,
    });
  }

  componentDidMount = () => {
    this.socket.on("success", data => {
      console.log(data.msg);
      this.setState({ isLoading: false });
      this.props.getRooms();
    });

    this.socket.on("error", data => {
      this.props.logOut();
    });

    this.socket.on("messages:history", messages => {
      this.props.getMessages(messages);
    });

    this.socket.on("leave", data => {
      console.log(data.msg);
    });
  };

  componentWillUnmount = () => {
    this.socket.close();
  };

  render() {
    const { activeRoom } = this.props;

    if (this.state.isLoading) {
      return <div>...Загрузка...</div>;
    }
    return (
      <section className="lobby">
        <div className="chat-container">
          <div className="chat-area">
            {activeRoom ? <ChatView socket={this.socket} /> : <AboutView />}
          </div>
          <aside className="sidebar-area">
            <Sidebar socket={this.socket} />
          </aside>
        </div>
      </section>
    );
  }
}

export default connect(
  state => ({
    activeRoom: state.rooms.activeRoom,
  }),
  { getRooms, getMessages, logOut },
)(chatContainer);
