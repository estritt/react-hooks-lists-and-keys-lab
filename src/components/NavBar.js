import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const toAnchor = links.map(link => <a key={link} href={'#' + link}>{link}</a>)

  return <nav>
    {toAnchor}
  </nav>;
}

export default NavBar;
