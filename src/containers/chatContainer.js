import React, { Component } from "react";
import { connect } from "react-redux";
import cookies from "react-cookies";
import io from "socket.io-client";

import Sidebar from "../containers/Sidebar";
import ChatView from "../containers/ChatView";
import AboutView from "../components/AboutView";

import { logOut } from "../actions/authActions";
import { getRooms } from "../actions/roomsActions";
import {
  getMessages,
  setTyping,
  clearTyping,
  addMessage,
} from "../actions/messagesActions";

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
    const {
      getRooms,
      getMessages,
      addMessage,
      setTyping,
      clearTyping,
      logOut,
    } = this.props;

    this.socket.on("success", data => {
      console.log(data.msg);
      this.setState({ isLoading: false });
      getRooms();
    });

    this.socket.on("error", () => {
      logOut();
    });

    this.socket.on("messages:history", messages => {
      getMessages(messages);
    });

    this.socket.on("typing_bc:start", username => {
      setTyping(username);
    });

    this.socket.on("typing_bc:stop", () => {
      clearTyping();
    });

    this.socket.on("messages:add", message => {
      addMessage(message);
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
  {
    getRooms,
    getMessages,
    setTyping,
    clearTyping,
    addMessage,
    logOut,
  },
)(chatContainer);
