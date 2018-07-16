import React from "react";
import getDisplayName from "../helpers/getDisplayName";

export default Component => {
  class WithFormFields extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        ...props.fieldsSet,
      };
    }

    onChange = event => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    };

    onSubmit = event => {
      event.preventDefault();
      if (this.props.onSubmit) {
        this.props.onSubmit(this.state);
      }
    };

    render() {
      return (
        <Component
          {...this.props}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          fieldsSet={this.state}
        />
      );
    }
  }

  WithFormFields.displayName = `withFormFields(${getDisplayName(Component)})`;
  return WithFormFields;
};
