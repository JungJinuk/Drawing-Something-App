import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Canvas } from 'components';
import { connect } from 'react-redux';
import {
  drawPostRequest,
} from 'actions/draw';

class Home extends Component {
  constructor(props) {
    super(props);

    this.handlePost = this.handlePost.bind(this);
  }

  handlePost(url) {
    return this.props.drawPostRequest(url).then(
      () => {
        if (this.props.postStatus.status === "SUCCESS") {

        } else {
          /*
              ERROR CODES
                1: EMPTY CONTENTS
          */
          switch (this.props.postStatus.error) {
            case 1:
              alert("drawing nothing!");
          }
        }
      }
    );
  }

  render() {
    return (
      <div>
        <Canvas
          width={800}
          height={500}
          onPost={this.handlePost}
        />
      </div>
    );
  }
}

Home.propTypes = {

};

Home.defaultProps = {

};

const mapStateToProps = (state) => {
  return {
    postStatus: state.draw.post
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    drawPostRequest: (url) => {
      return dispatch(drawPostRequest(url));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);