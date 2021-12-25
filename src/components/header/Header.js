import React from 'react';

import "./Header.css";

export default function Header() {

  return (
    <div className="navigation">
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="/">← HOME</a>
        <div class="dropdown show">
        <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          STYLES
        </a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="/urban">URBAN</a>
            <a class="dropdown-item" href="/greyman">GREYMAN</a>
            <a class="dropdown-item" href="/cyberpunk">CYBERPUNK</a>
            <a class="dropdown-item" href="/outdoors">OUTDOORS</a>
          </div>
        </div>
        <a class="nav-link" href="/about">ABOUT</a>
    </nav>
    </div>
  );
}