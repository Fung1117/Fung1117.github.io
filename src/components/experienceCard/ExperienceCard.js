import React, { Component } from "react";
import "./ExperienceCard.css";
import { Fade } from "react-reveal";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const index = this.props.index;
    const totalCards = this.props.totalCards;
    const theme = this.props.theme;
    return (
      <div
        className="experience-list-item"
        style={{ marginTop: index === 0 ? -120 : -50 }}
      >
        <Fade left duration={2000} distance="40px">
          <div className="experience-card-logo-div">
            <img
              className="experience-card-logo"
              src={require(`../../assets/images/${experience["logo_path"]}`)}
              alt=""
            />
          </div>
        </Fade>
        <div className="experience-card-stepper">
          <div
            style={{
              width: 20,
              height: 20,
              backgroundColor: `${theme.headerColor}`,
              borderRadius: 50,
              zIndex: 100,
            }}
          />
          {index !== totalCards - 1 && (
            <div
              style={{
                height: 300,
                width: 2,
                backgroundColor: `${theme.headerColor}`,
                position: "absolute",
                marginTop: 20,
              }}
            />
          )}
        </div>
        <Fade right duration={2000} distance="40px">
          <div className="experience-card-container">
            <div
              className="arrow-left"
              style={{ borderRight: `10px solid ${theme.headerColor}` }}
            ></div>
            <div
              className="experience-card"
              style={{ background: `${theme.body}` }}
            >
              <div
                className="experience-card-heading"
                style={{
                  backgroundColor: theme.headerColor,
                }}
              >
                <div>
                  <h3
                    className="experience-card-title"
                    style={{ color: theme.text }}
                  >
                    {experience["title"]}
                  </h3>
                  <p className="experience-card-company">
                    <a
                      href={experience["company_url"]}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: theme.text }}
                    >
                      {experience["company"]}
                    </a>
                  </p>
                </div>
                <div>
                  <div className="experience-card-heading-right">
                    <p
                      className="experience-card-duration"
                      style={{ color: theme.text }}
                    >
                      {experience["duration"]}
                    </p>
                    <p
                      className="experience-card-location"
                      style={{ color: theme.text }}
                    >
                      {experience["location"]}
                    </p>
                  </div>
                </div>
              </div>

              <div className="experience-repo-description" />
              {experience["descriptions"].map((sentence) => {
                return (
                  <p
                    className="experience-card-description"
                    style={{ color: theme.text }}
                  >
                    {sentence}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default ExperienceCard;
