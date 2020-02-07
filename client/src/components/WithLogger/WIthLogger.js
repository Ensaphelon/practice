import React, { Component } from 'react';

export default WrappedComponent => {
  return class WithLogger extends Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} was mounted`);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
