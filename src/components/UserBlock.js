import React from "react";
import { api } from "../constants/api";

const UserBlock = ({ user, logOut }) => {
  return (
    <div className="user-block">
      <div className="user-avatar">
        <img src={`${api}${user && user.avatar}`} alt="" />
      </div>
      <a href="/" className="username">
        {user && user.screenname}
      </a>
      <a href="/" onClick={logOut}>
        Выйти
      </a>
    </div>
  );
};

export default UserBlock;
