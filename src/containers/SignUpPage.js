import React from "react";

const SignUp = () => {
  return (
    <div className="signup">
      <form>
        <input type="text" placeholder="Ваш ник" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Пароль" />
        <input type="password" placeholder="Подтверждение пароля" />
        <input type="submit" value="Зарегистрироваться" />
      </form>
    </div>
  );
};

export default SignUp;
