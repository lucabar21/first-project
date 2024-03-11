import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div>
        <img className="flower" src={this.props.source} alt={this.props.alternative} />
      </div>
    );
  }
}

export default ImageComponent;
