import React, { Component } from "react";
import "./Competitions.css";
import { Fade } from "react-reveal";
import { competitions } from "../../portfolio";
import CompetitionsCard from "../../components/competitionsCard/CompetitionsCard";

class Competitions extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="comps">
        <div className="comps-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="comps-header" style={{ color: theme.text }}>
              Competitions
            </h1>
          </Fade>
        </div>
        <div className="comps-body-div">
          {competitions.competitions.map((comp) => {
            return <CompetitionsCard competition={comp} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Competitions;
