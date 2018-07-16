import React from "react";
import errors from "../constants/errors";

class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state);
      this.setState({ password: "" });
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="signin">
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            onChange={this.onChange}
            name="email"
            value={email}
            placeholder="Email"
          />
          <input
            type="password"
            onChange={this.onChange}
            name="password"
            value={password}
            placeholder="Пароль"
          />
          <p>{errors[this.props.message]}</p>
          <input type="submit" value="Войти" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
