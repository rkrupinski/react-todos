import React from 'react';
import PureComponent from 'react-pure-render/component';

export default function storeWrapper(Component, stores, getStateFromStores) {
  return class extends PureComponent {

    constructor(props) {
      super(props);

      this.state = getStateFromStores(this.props);

      this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
      stores.forEach(store =>
          store.addChangeListener(this._onChange)
      );
    }

    componentWillUnmount() {
      stores.forEach(store =>
          store.removeChangeListener(this._onChange)
      );
    }

    _onChange() {
      this.setState(getStateFromStores(this.props));
    }

    render() {
      return (
        <Component {...this.props} {...this.state} />
      );
    }

  };
}
