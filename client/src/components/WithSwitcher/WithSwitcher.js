import React, { Component } from 'react';

export default WrappedComponent => {
  return class WithSwitcher extends Component {
    static defaultProps = {
      initialValue: false,
    };
    constructor(props) {
      super(props);
      this.state = {
        currentValue: props.initialValue,
      };
    }
    toggle = () => {
      const { currentValue } = this.state;

      this.setState({
        currentValue: !currentValue,
      });
    };
    turnOn = () => {
      this.setState({
        currentValue: true,
      });
    };
    turnOff = () => {
      this.setState({
        currentValue: false,
      });
    };
    render() {
      const { currentValue } = this.state;

      return (
        <WrappedComponent
          currentValue={currentValue}
          onToggle={this.toggle}
          onTurnOn={this.turnOn}
          onTurnOff={this.turnOff}
          {...this.props}
        />
      );
    }
  };
};
