import React from "react";

import "./Home.css";

function ButtonGroup(props) {
  return (
    <div>
      <center>
      <h1>{props.techwearStyle}</h1>
      <div className="group">
        <div class="btn-group" role="group" aria-label="Basic example">
        <a class="btn" href={props.link} role="button">Get this style</a>
        <a class="btn" href={props.about} role="button">About this style</a>
        </div>
      </div>
      </center>
    </div>
  );
}

export default function Home() {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 urban">
          <ButtonGroup techwearStyle="URBAN" link="/urban" about="/about#urban"/>
        </div>
        <div className="col-md-3 greyman">
          <ButtonGroup techwearStyle="GREYMAN" link="/greyman" about="/about#greyman"/>
        </div>
        <div className="col-md-3 cyberpunk">
          <ButtonGroup techwearStyle="CYBERPUNK" link="/cyberpunk" about="/about#cyberpunk"/>
        </div>
        <div className="col-md-3 outdoors">
          <ButtonGroup techwearStyle="OUTDOORS" link="/outdoors" about="/about#outdoors"/>
        </div>
      </div>
    </div>
  );
}