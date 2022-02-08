import React from "react";

import "./Help.css";

export default function Help() {
    return (
      <div className="helpModal">
      <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#helpModal">HOW TO USE</button>
        <div className="modal fade" id="helpModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">HOW TO USE</h5>
              </div>
              <div className="modal-body">
              <div className="accordion accordion-flush" id="accordionHelp">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      1) PICKING A COLOR
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionHelp">
                    <div className="accordion-body">
                      <ul>
                        <li>Pick a color from the <strong>CLOTHING COLOR</strong> palette; the text <strong>NONE SELECTED</strong> will change to the name of the color you currently have picked.</li>
                        <li>You can choose a color from the <strong>SKIN COLOR</strong> palette, as well. However, this is just so you can see how a skin tone interacts with an outfit's color scheme, it does not affect the outfit itself.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      2) APPLYING THE COLOR
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionHelp">
                    <div className="accordion-body">
                      <ul>
                        <li>Once your clothing color is selected, click on a piece of the model's clothing in order to color it. You can color in four pieces of clothing for each model: headwear, top, pants, and shoes.</li>
                        <li>If you want to recolor a piece of clothing, simply select a new color and click the clothing again. There is no need to refresh the page.</li>
                        <li>Once you have colored in at least one piece of clothing, you can press the <strong>GET OUTFIT</strong> button below the model to see your outfit.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      3) GETTING YOUR OUTFIT
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionHelp">
                    <div className="accordion-body">
                      <ul>
                        <li>After you press the <strong>GET OUTFIT</strong> button, you will be shown an outit based on the clothing you colored in. Clothing you did not color in will not appear in the outfit.</li>
                        <li>The price and name of the clothing is listed underneath each clothing's picture. Clicking the name or the <strong>BUY NOW</strong> button will bring you to a page where you can buy the clothing.</li>
                        <li>Clicking the <strong>NEW OUTFIT</strong> button at the bottom will load a new outfit with the colors and clothing you previously chose.</li>
                        <li>Clicking the <strong>CLOSE</strong> button at the bottom will bring you back to the previous page. From there you can change the colors of your clothing and generate a new outfit.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className="modal-footer">
              <button type="button" className="btn" data-bs-dismiss="modal">CLOSE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}