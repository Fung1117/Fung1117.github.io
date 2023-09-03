import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/page/myProfile.png"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Pun King Fung</strong>.
            I am currently enrolled as a computer science student at the University of Hong Kong (HKU), and I will be studying there from 2021 to 2025. My areas of interest within the field include machine learning (ML), computer vision (CV), deep learning (DL), and artificial intelligence (AI). Additionally, I am also keen on learning web development. In my free time, I enjoy playing basketball, and I consider myself a problem solver.

            </ScrollAnimation>

            <br /><br/>
            
            <ScrollAnimation animateIn="fadeInLeft">
            The reason behind my fascination with machine learning (ML), computer vision (CV), deep learning (DL), and artificial intelligence (AI) stems from a strong curiosity about how these technologies can revolutionize various industries. I am captivated by the potential for advancements in areas such as pattern recognition, data analysis, and automation.
            The prospect of being able to contribute to these cutting-edge fields and make a positive impact on society is what drives my passion for studying and exploring ML, CV, DL, and AI.
            </ScrollAnimation>

            <br /><br/>

            <ScrollAnimation animateIn="fadeInLeft">
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
