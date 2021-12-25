import React, {useState} from "react";
import DisplayTechwear from "../functions/DisplayTechwear";

import "./RenderCards.css";

export default function RenderCards(props) {
    const [outfitKey, setOutfitKey] = useState(0);
    return(
        <div className="get-outfit">
        <button type="button" class="btn btn-light" onClick={() => setOutfitKey(key => key + 1)} data-toggle="modal" data-target=".bd-example-modal-lg">GET OUTFIT</button>
            <div class="modal bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-content">
                <h5 class="modal-title">CLOSE AND PRESS "GET OUTFIT" FOR A NEW OUTFIT</h5>
                    <div class="card-deck" key={outfitKey}>
                    <DisplayTechwear color={props.headwearColor} techwearStyle={props.techwearStyle} article="headwear"/>
                    <DisplayTechwear color={props.topColor} techwearStyle={props.techwearStyle} article="top"/>
                    <DisplayTechwear color={props.pantsColor} techwearStyle={props.techwearStyle} article="pants"/>
                    <DisplayTechwear color={props.shoesColor} techwearStyle={props.techwearStyle} article="shoes"/>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="close" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
);
}