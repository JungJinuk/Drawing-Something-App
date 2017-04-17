import React, { Component, PropTypes } from 'react';
import { Header } from 'components';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        { this.props.children }
      </div>
    );
  }
}

App.propTypes = {

};

App.defaultProps = {

};

export default App;