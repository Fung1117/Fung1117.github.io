import React from "react";
import { Fade } from "react-reveal";
import "./GithubContributions.css";

export default function GithubContributions() {
    return (
        <div className="github-contributions">
            <Fade bottom duration={2000} distance="20px">
                <img className="github-contributions-img" alt="github contributions" src={"https://raw.githubusercontent.com/fung1117/fung1117/output/github-contribution-grid-snake.svg?sanitize=true"} />
            </Fade>
        </div>
    );
}