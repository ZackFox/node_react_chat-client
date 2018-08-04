import React, { Component } from "react";
import { connect } from "react-redux";
import NewMessage from "../components/NewMessage";
import MessagesList from "../components/MessagesList";

class ChatView extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="chat-header">
          <span className="header-title">
            {this.props.activeRoom && this.props.activeRoom.name}
          </span>
        </header>
        <MessagesList messages={this.props.messages} />
        <NewMessage socket={this.props.socket} />
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    user: state.auth.user,
    activeRoom: state.rooms.activeRoom,
    messages: state.messages.allMessages,
  }),
  null,
)(ChatView);
