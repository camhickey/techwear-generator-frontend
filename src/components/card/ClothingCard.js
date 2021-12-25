import React from "react";

import "./ClothingCard.css";

export default function ClothingCard(props) {
  return (
      <div class="card rounded shadow-sm border-0">
        <center>
        <div class="card-body p-4">
          <img src={props.clothingImage} alt="" class="img-fluid" />
          <h5 class="card-title"><a href={props.clothingLink} class="text-dark" target='_blank' rel="noopener noreferrer">{props.clothingName}</a></h5>
          <p class="medium text-muted font-italic price">{props.clothingPrice}</p>
          <a class="btn" href={props.clothingLink} target='_blank' rel="noopener noreferrer">BUY NOW</a>
        </div>
        </center>
      </div>
  );
}