import React from 'react';

export default (Component, props) => class extends React.Component {

  render() {
    return <Component {...this.props} {...props} />;
  }

};
