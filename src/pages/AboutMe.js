import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "../styles/About.css"


const useStyles = makeStyles((theme) => ({
    profile: {
        height: "500px",
    },

}));

export default function AboutMe() {
    const classes = useStyles();

    return (
        <Container>
        <div className="flexDiv">
            <div className="aboutPic">
                <img src="/images/profile-pic.jpeg" className={classes.profile} alt=""/>
            </div>
            <div className="aboutDesc">
                <p>Welcome to my Portfolio! My name is Payne Kerz .</p>
                <p>I am an ambitious Full Stack Web Developer who can build responsive websites and single-page applications from the ground up – from concept, navigation, layout, and programming. </p>
                <p>I am a fast learner, hard worker, and ultimate team player proficient in a wide array of technical languages.</p>
                <p>I have a proven aptitude in problem-solving while maintaining a positive professional demeanor while providing an exceptional customer experience and can easily work efficiently independently or adapt quickly to a team environment.</p>
                <p>I will keep this page updated with new projects. Come again soon!</p>
            </div>
        </div>
        </Container>
    )
}