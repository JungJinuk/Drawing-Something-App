import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pencil from './../lib/Pencil';

class Canvas extends Component {
  constructor(props) {
    super(props);

    let tool = null;

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.getCursorPosition = this.getCursorPosition.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  componentDidMount() {
    this.ctx = this.canvas.getContext("2d");
    this.tool = Pencil(this.ctx);
  }

  onMouseDown(e) {
    this.tool.onMouseDown(...this.getCursorPosition(e));
  }

  onMouseUp(e) {
    this.tool.onMouseUp(...this.getCursorPosition(e));
  }

  onMouseMove(e) {
    this.tool.onMouseMove(...this.getCursorPosition(e));
  }

  getCursorPosition(e) {
    const { top, left } = this.canvas.getBoundingClientRect();
    return [
      e.clientX - left,
      e.clientY - top
    ];
  }

  handlePost() {
    let url = this.canvas.toDataURL();

    this.props.onPost(url).then(
      () => {
        this.ctx.clearRect(0, 0, this.props.width, this.props.height);
        this.ctx.beginPath();
      }
    );
  }

  render() {

    const { width, height } = this.props;

    return (
      <div>
        <canvas
          ref={ (canvas) => { this.canvas = canvas; } }
          className="user-canvas"
          onMouseDown={this.onMouseDown}
          onMouseUp={this.onMouseUp}
          onMouseOut={this.onMouseUp}
          onMouseMove={this.onMouseMove}
          width={width}
          height={height} />
        <button className="btn waves-effect waves-light" type="submit" onClick={this.handlePost}>
          Submit
          <i className="material-icons right">send</i>
        </button>
      </div>
    );
  }
}

Canvas.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  onPost: PropTypes.func
};

Canvas.defaultProps = {
  width: 800,
  height: 500,
  onPost: (url) => { console.error('onPost not defined'); }
};

export default Canvas;