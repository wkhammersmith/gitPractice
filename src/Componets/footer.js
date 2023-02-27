import React from "react";

function Footer(){
  const year = new Date().getFullYear()


return(
  <footer>
    <p>Copyright © Jacks-an-Jill-Five Practice {year}</p>

  </footer>
);

};

export default Footer;