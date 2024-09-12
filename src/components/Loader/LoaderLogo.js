import React from "react";
import loaderLogo from "../../assets/images/loaderLogo.gif";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    return (
      <div
        className="raw_logo"
      >
        <img className="raw_logo_img" src={loaderLogo} alt="Description of GIF" />
      </div>
    );
  }
}

export default LogoLoader;
