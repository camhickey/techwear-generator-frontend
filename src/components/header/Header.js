import React from 'react';

import "./Header.css";

export default function Header() {

  return (
    <div className="navigation">
    <nav class="navbar justify-content-center navbar-expand-lg">
      |<a class="btn" href="/">← HOME</a>
        <div class="dropdown">
        <button class="btn dropdown-toggle" href="#" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          STYLES
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="/urban">URBAN</a></li>
          <li><a class="dropdown-item" href="/greyman">GREYMAN</a></li>
          <li><a class="dropdown-item" href="/cyberpunk">CYBERPUNK</a></li>
          <li><a class="dropdown-item" href="/outdoord">OUTDOORS</a></li>
        </ul>
        </div>
        <a class="btn" href="/about">ABOUT</a>
        <a class="btn" href="/contact">CONTACT</a>|
    </nav>
    </div>
  );
}