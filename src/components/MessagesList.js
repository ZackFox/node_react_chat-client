import React, { Component } from "react";
import { connect } from "react-redux";

class MessagesList extends Component {
  // constructor() {
  //   super();
  //   this.messages = null;
  // }

  componentDidUpdate() {
    this.messages.scrollTop = this.messages.scrollHeight;
  }

  render() {
    const { messages } = this.props;
    return (
      <div className="messages" ref={el => (this.messages = el)}>
        <ul>{messages && messages.map(m => <li key={m.id}>{m.text}</li>)}</ul>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  null,
)(MessagesList);
