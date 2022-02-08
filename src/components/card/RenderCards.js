import React, {useState} from "react";
import DisplayTechwear from "../functions/DisplayTechwear";
import Help from "../help/Help";

import "./RenderCards.css";

export default function RenderCards(props) {
    function NoColors() {
        if (props.headwearColor==='' && props.topColor==='' && props.pantsColor==='' && props.shoesColor==='') {
            return true
        }
        return false
    }
    const [outfitKey, setOutfitKey] = useState(0);
    return(
        <div>
            <div className="get-outfit">
            <button type="button" className="btn"
            disabled={NoColors()}
            onClick={() => setOutfitKey(key => key + 1)} data-bs-toggle="modal" data-bs-target="#outfitModal">
                {NoColors() ? "COLOR AT LEAST ONE PIECE OF CLOTHING" : "GET OUTFIT"}
            </button>
                <div className="modal fade" id="outfitModal" tabindex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">YOUR OUTFIT</h5>
                            </div>
                            <div className="modal-body">
                                <div className="card-group" key={outfitKey}>
                                <DisplayTechwear color={props.headwearColor} techwearStyle={props.techwearStyle} article="headwear"/>
                                <DisplayTechwear color={props.topColor} techwearStyle={props.techwearStyle} article="top"/>
                                <DisplayTechwear color={props.pantsColor} techwearStyle={props.techwearStyle} article="pants"/>
                                <DisplayTechwear color={props.shoesColor} techwearStyle={props.techwearStyle} article="shoes"/>
                                </div>
                            </div>
                            <div className="modal-footer justify-content-center">
                            <button type="button" className="btn" onClick={() => setOutfitKey(key => key + 1)}>NEW OUTFIT</button>
                            <button type="button" className="btn" data-bs-dismiss="modal">CLOSE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="help-modal">
            <Help />
            </div>
        </div>
);
}