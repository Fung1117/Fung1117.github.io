import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { StatelessAccordion, Panel } from "baseui/accordion";

class ExperienceAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultExpanded: props.sections.map(section => section.title),
    };
  }

  toggleExpand = (title) => {
    this.setState((prevState) => {
      const { defaultExpanded } = prevState;

      if (defaultExpanded.includes(title)) {
        return { defaultExpanded: defaultExpanded.filter(t => t !== title) };
      } else {
        return { defaultExpanded: [...defaultExpanded, title] };
      }
    });
  };

  render() {
    const theme = this.props.theme;
    const { defaultExpanded } = this.state;
    
    return (
      <div className="experience-accord">
        <StatelessAccordion expanded={defaultExpanded}>
          {this.props.sections.map((section) => {
            return (
              <Panel
                className="accord-panel"
                title={section["title"]}
                key={section["title"]}
                onClick={() => this.toggleExpand(section["title"])}
                overrides={{
                  Header: {
                    style: () => ({
                      backgroundColor: `${theme.body}`,
                      border: `1px solid`,
                      borderRadius: `5px`,
                      borderColor: `${theme.headerColor}`,
                      marginBottom: `3px`,
                      fontFamily: "Google Sans Regular",
                      color: `${theme.text}`,
                      ":hover": {
                        color: `${theme.secondaryText}`,
                      },
                    }),
                  },
                  Content: {
                    style: () => ({
                      backgroundColor: `${theme.body}`,
                    }),
                  },
                }}
              >
                {section["experiences"].map((experience, index) => {
                  return (
                    <ExperienceCard index={index} totalCards={section["experiences"].length} experience={experience} theme={theme} />
                  );
                })}
              </Panel>
            );
          })}
        </StatelessAccordion>
      </div>
    );
  }
}

export default ExperienceAccordion;
