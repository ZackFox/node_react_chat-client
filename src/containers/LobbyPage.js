import React, { Component } from "react";

class LobbyPage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <div className="flex-container">
          <div className="content">
            <div className="messages">messages</div>
            <div className="post">new message</div>
          </div>
          <aside className="users">users</aside>
        </div>
      </div>
    );
  }
}

export default LobbyPage;
