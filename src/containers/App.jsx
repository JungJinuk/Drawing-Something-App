import React, { Component } from 'react';
import PropTypes from 'prop-types';
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