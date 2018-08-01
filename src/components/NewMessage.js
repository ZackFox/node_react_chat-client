import React from "react";

const NewMessage = () => {
  return (
    <div className="new-message">
      <textarea name="addMessage" />
      <button>отправить</button>
    </div>
  );
};

export default NewMessage;
