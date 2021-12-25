import React from "react";

import Header from "../header/Header";

//urban style images
import urbanHeadwear from "./urban/urbanHeadwear.webp"
import urbanTop from "./urban/urbanTop.webp"
import urbanPants from "./urban/urbanPants.webp"
import urbanShoes from "./urban/urbanShoes.webp"
//greyman style images
import greymanHeadwear from "./greyman/greymanHeadwear.webp"
import greymanTop from "./greyman/greymanTop.webp"
import greymanPants from "./greyman/greymanPants.webp"
import greymanShoes from "./greyman/greymanShoes.webp"
//cyberpunk style images
import cyberpunkHeadwear from "./cyberpunk/cyberpunkHeadwear.webp"
import cyberpunkTop from "./cyberpunk/cyberpunkTop.webp"
import cyberpunkPants from "./cyberpunk/cyberpunkPants.webp"
import cyberpunkShoes from "./cyberpunk/cyberpunkShoes.webp"
//outdoors style images
import outdoorsHeadwear from "./outdoors/outdoorsHeadwear.webp"
import outdoorsTop from "./outdoors/outdoorsTop.webp"
import outdoorsPants from "./outdoors/outdoorsPants.webp"
import outdoorsShoes from "./outdoors/outdoorsShoes.webp"

import "./About.css";

function ButtonGroup(props) {
    return (
        <div>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                <h1 class="display-4">{props.clothingStyle}|<a button className="btn" href={"/"+props.clothingStyle}>VISIT STYLE</a></h1>
                <p class="lead">{props.tagLine}</p>
                </div>
                <p className="desc">{props.desc}</p>

                <center>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-3">
                        <img src={props.headwear} class="img-fluid" alt="..." />
                        </div>
                        <div class="col-md-3">
                        <img src={props.top} class="img-fluid" alt="..." />
                        </div>
                        <div class="col-md-3">
                        <img src={props.pants} class="img-fluid" alt="..." />
                        </div>
                        <div class="col-md-3">
                        <img src={props.shoes} class="img-fluid" alt="..." />
                        </div>
                    </div>
                </div>
                </center>
            </div>
        </div>
    );
  }
  

export default function About() {
    return(
        <div>
        <Header />
            <div className="about">

            <div id="urban">
            <ButtonGroup clothingStyle="urban" tagLine="Classical and consistent, it's a reliable middle-ground."
            desc="The urban style is what most people think of when they think 'techwear.' The outfits often use a neutered color palette, and the articles of clothing themselves
            are simple while retaining some defining characteristics, such as free-hanging straps and buckles."
            headwear={urbanHeadwear} top={urbanTop} pants={urbanPants} shoes={urbanShoes}/>
            </div>

            <div id="greyman">
            <ButtonGroup clothingStyle="greyman" tagLine="Less is more."
            desc="The greyman style takes a minimalist approach to techwear, with the goal being to blend in with the crowd if need be. For this reason, colors are neutral and the
            articles of clothing are featureless and more inline with more common ideas of everyday clothing."
            headwear={greymanHeadwear} top={greymanTop} pants={greymanPants} shoes={greymanShoes}/>
            </div>

            <div id="cyberpunk">
            <ButtonGroup clothingStyle="cyberpunk" tagLine="Embrace eccentricity, then crank it to 11."
            desc="The opposite of greyman, the cyberpunk style aims to stand out and makes use of very extreme pieces of clothing. In a way, it attempts to predict the future of
            fashion trends, but does so without refinement or constraint, leading to outfits that stand out and look 'alien' to a contemporary audience."
            headwear={cyberpunkHeadwear} top={cyberpunkTop} pants={cyberpunkPants} shoes={cyberpunkShoes}/>
            </div>

            <div id="outdoors">
            <ButtonGroup clothingStyle="outdoors" tagLine="Who says you can't flex on nature?"
            desc="As the name implies, the outdoor style tries to capture a more 'outdoorsman' aesthetic. Colors here tend to be more organic, while the articles themselves
            focus on utility in nature. Outfits under this style may be reminiscent of someone hiking or camping."
            headwear={outdoorsHeadwear} top={outdoorsTop} pants={outdoorsPants} shoes={outdoorsShoes}/>
            </div>

            </div>
        </div>
    );
}