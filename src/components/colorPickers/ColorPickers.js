import React from "react";

import { CirclePicker } from "react-color";

import "./ColorPickers.css"

function ClothingColorPicker(props) {
  return(
    <div className="clothing-color-picker">
    <h4 className="test">CLOTHING COLOR</h4>
    <h4>{props.heading}</h4>
    <CirclePicker
      colors={props.colors}
      color={props.color}
      onChange={props.onChange}
      width={100}
    />
    <p className="help">Your currently selected clothing color is displayed above. In order to change a color, click on the color of the circle that you wish to select. When you have a color selected, click on an article of clothing to color it. When you have assembled an outfit of your choosing, click the "get outfit" button in order to generate an outfit. You can leave an article of clothing unselected if you do not want it included in your outfit.</p>
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
    <p className="help">Your currently selected skin color is displayed above. In order to change a color, click on the color of the circle that you wish to select. When you have a color selected, click on a section of skin in order to apply that skin tone. This is not necessary to generate an outfit, but rather just a way of visualizing how a color palette interacts with a certain skin tone.</p>
    </div>
  );
}

export {ClothingColorPicker, SkinColorPicker}