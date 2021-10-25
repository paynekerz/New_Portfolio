import React from "react";
import Container from "@material-ui/core/Container";
import "../styles/Portfolio.css"

export default function Portfolio() {

    return (
        <div className="background">
            <div className="cardHolder">
                <div className="projectCard">
                    <h2>inTents</h2>
                    <p>A review/blog app for national parks</p>
                    <p>Role: React functionality and CSS design.</p>
                    <p>Technologies: React.js, MongoDB, National Parks API</p>
                    <div className="linkHolder">
                        <h3><a className="linkGithub" href="https://github.com/paynekerz/i-n-t-e-n-t-s" target="_target" rel="noreferrer noopener">Github</a></h3>
                        <h3><a className="linkHeroku" href="https://i-n-t-e-n-t-s.herokuapp.com/" target="_target" rel="noreferrer noopener">Heroku</a></h3>
                    </div>
                </div>
                <div className="projectCard">
                    <h2>Cities2See</h2>
                    <p>An app to keep track of what cities you want to/have visited</p>
                    <p>Role: React functionality and CSS design.</p>
                    <p>Technologies: React.js, MongoDB, National Parks API</p>
                    <div className="linkHolder">
                        <h3><a className="linkGithub" href="https://github.com/paynekerz/Cities2See" target="_target" rel="noreferrer noopener">Github</a></h3>
                        <h3><a className="linkHeroku" href="https://cities2see.herokuapp.com/" target="_target" rel="noreferrer noopener">Heroku</a></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}