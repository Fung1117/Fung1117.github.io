import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import BlogsImg from "./BlogsImg";
import EmailImg from "./EmailImg"
import { Tooltip } from 'baseui/tooltip';
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;
const emailSection = contactPageData.emailSection;

class Contact extends Component {
  state = {
    copied: false, // Initialize copied state
  };

  handleCopyEmail = () => {
    navigator.clipboard.writeText(emailSection["email"])
      .then(() => {
        this.setState({ copied: true });
        setTimeout(() => this.setState({ copied: false }), 2000);
      })
  };

  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                  alt=""
                />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
                  <Button
                    text="See My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>
          <Fade bottom duration={1000} distance="40px">
            <div className="email-heading-div">
              <div className="email-heading-text-div">
                <h1 className="email-heading-text" style={{ color: theme.text }}>
                  {emailSection["title"]}
                </h1>
                <p
                  className="email-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {emailSection["subtitle"]}
                </p>

                <p
                  className="email-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {emailSection["email"]}
                </p>

                <Tooltip
                  content={
                    <div style={{ padding: "0", marginTop: "10px" }}>
                      Copied!
                    </div>
                  }
                  isOpen={this.state.copied}
                  placement="bottom"
                >
                  <div className="email-btn-div" onClick={this.handleCopyEmail}>
                    <Button
                      text="Copy My Email"
                      newTab={true}
                      theme={theme}
                    />
                  </div>
                </Tooltip>
              </div>
              <div className="email-heading-img-div">
                <EmailImg theme={theme} />
              </div>
            </div>
          </Fade>
          <Fade bottom duration={1000} distance="40px">
            <div className="blog-heading-div">
              <div className="blog-heading-img-div">
                <BlogsImg theme={theme} />
              </div>
              <div className="blog-heading-text-div">
                <h1 className="blog-heading-text" style={{ color: theme.text }}>
                  {blogSection["title"]}
                </h1>
                <p
                  className="blog-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {blogSection["subtitle"]}
                </p>
                <div className="blogsite-btn-div">
                  <Button
                    text="Visit My Blogsite"
                    newTab={true}
                    href={blogSection.link}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
