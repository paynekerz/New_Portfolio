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
        <div className="background">
            <Container>
            <div className="flexDiv">
                <div className="aboutPic">
                    <img src="/images/profile-pic.jpeg" className={classes.profile} alt=""/>
                </div>
                <div className="aboutCont">
                    <div className="aboutDesc">
                        <p>Welcome to my Portfolio! My name's Payne Kerz .</p>
                        <p>I am an ambitious Full Stack Web Developer who can build responsive websites and single-page applications from the ground up – from concept, navigation, layout, and programming. </p>
                        <p>In my spare time I like to read science fiction books, watch documentaries, and listen to podcasts like the Joe Rogan Experience.</p>
                        <p>I also enjoy working out and hiking mountain trails!</p>
                        <p>I will keep this page updated with new projects. Come again soon!</p>
                    </div>
                </div>
            </div>
            </Container>
        </div>
    )
}