import React, { Component } from "react";
import { connect } from "react-redux";
import NewMessage from "./NewMessage";
import MessagesList from "./MessagesList";

class ChatView extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="chat-header">
          <span className="header-title">
            {this.props.activeRoom && this.props.activeRoom.name}
          </span>
        </header>
        <MessagesList />
        <NewMessage />
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({}),
  null,
)(ChatView);
