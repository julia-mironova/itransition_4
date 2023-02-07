import React from "react";
import {Link} from "react-router-dom";

class ButtonComponent extends React.Component {
  render() {
    if (this.props.isLogin) {
      return <button>
        <Link to={this.props.link}>{this.props.text}</Link>
      </button>
    }    
  }
}

export { ButtonComponent }
