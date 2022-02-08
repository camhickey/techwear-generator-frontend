import React from "react";

import { CirclePicker } from "react-color";

import "./ColorPickers.css"

function ClothingColorPicker(props) {
  return(
    <div className="clothing-color-picker">
    <h4>CLOTHING COLOR</h4>
    <h4>{props.heading}</h4>
    <CirclePicker
      colors={props.colors}
      color={props.color}
      onChange={props.onChange}
      width={100}
    />
    </div>
  );
}

function SkinColorPicker(props) {
  return(
    <div className="skin-color-picker">
    <h4>SKIN COLOR</h4>
    <h4>{props.heading}</h4>
    <CirclePicker
      colors={props.colors}
      color={props.color}
      onChange={props.onChange}
      width={100}
    />
    </div>
  );
}

export {ClothingColorPicker, SkinColorPicker}