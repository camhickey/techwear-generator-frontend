import React from 'react';

import Header from "../header/Header";
import GithubIcon from "./github-icon.svg";
import LinkedinIcon from "./linkedin-icon.svg";

import "./Contact.css";

export default function Contact() {
    return(
    <div>
    <Header />
    <form method="GET" action="mailto:cameron.s.hickey@gmail.com" enctype="text/plain">

        <div className="mb-3 subject">
        <label className="form-label">Subject</label>
        <input type="text" name="subject" className="form-control" placeholder="Bug report, suggestion, interest in employment, etc."/>
        </div>
        
        <div className="mb-3 message">
        <label className="form-label">Message</label>
        <textarea name="body" className="form-control" rows="10"></textarea>

            <div className="btn-group" role="group">
            <input className="btn send-btn" type="submit" value="SEND" />
            </div>

            <div className="socials">
            <label className="form-label">My other socials</label>
            <br></br>
            <a href="https://github.com/camhickey" target="_blank">
            <img src={GithubIcon} width="50" height="50"/>
            </a>
            <a href="https://www.linkedin.com/in/cameron-hickey/" target="_blank">
            <img src={LinkedinIcon} width="50" height="50"/>
            </a>
            </div>

        </div>
    </form>
    </div>  

    );
}