import React, { Component } from "react";
import "./CompetitionsCard.css";
import { Fade } from "react-reveal";

class CompetitionCard extends Component {
  render() {
    const competition = this.props.competition;
    const theme = this.props.theme;
    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="comp-card">
          <div className="content">
            <a
              href={competition.competition_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="content-overlay"></div>
              <div
                className="comp-header"
                style={{ backgroundColor: competition.color_code }}
              >
                <img
                  className="comp_logo_img"
                  src={require(`../../assets/images/${competition.logo_path}`)}
                  alt={competition.alt_name}
                />
              </div>
              <div className="content-details fadeIn-top">
                <h3 className="content-title" style={{ color: theme.body }}>
                  competition
                </h3>
              </div>
            </a>
          </div>
          <div className="comp-body">
            <h2 className="comp-body-title" style={{ color: theme.text }}>
              {competition.title}
            </h2>
            <h3
              className="comp-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {competition.subtitle}
            </h3>
          </div>
        </div>
      </Fade>
    );
  }
}

export default CompetitionCard;
