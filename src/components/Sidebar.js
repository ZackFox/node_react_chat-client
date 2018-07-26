import React from "react";

export default ({ user, rooms }) => {
  return (
    <div className="chat-aside">
      <div className="user-info">{user && user.screenname}</div>

      <button>Создать комнату</button>
      {rooms &&
        rooms.map(r => {
          return (
            <div key={r.id}>
              <h4>{r.name}</h4>
            </div>
          );
        })}
    </div>
  );
};
