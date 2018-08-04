import React, { Component } from "react";
import { connect } from "react-redux";
import { addMessage } from "../actions/roomsActions";

class NewMessage extends Component {
  constructor(props) {
    super(props);
    this.timeoutId = 0;
  }

  handleChange = () => {
    const { socket, activeRoom } = this.props;

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    socket.emit("typing:start", activeRoom);
    this.timeoutId = setTimeout(() => {
      socket.emit("typing:stop", activeRoom);
    }, 1000);
  };

  hendleSubmit = () => {
    const { socket, user, activeRoom } = this.props;
    const data = {
      userId: user.id,
      roomId: activeRoom.id,
      roomName: activeRoom.name,
      text: this.textField.value,
    };
    socket.emit("message:create", data);
    this.textField.value = "";
  };

  render() {
    return (
      <div className="new-message">
        {"" || this.props.typing}
        <textarea
          ref={el => (this.textField = el)}
          onChange={this.handleChange}
          name="addMessage"
        />
        <button onClick={this.hendleSubmit}>отправить</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.auth.user,
    activeRoom: state.rooms.activeRoom,
    typing: state.messages.typing,
  }),
  { addMessage },
)(NewMessage);
