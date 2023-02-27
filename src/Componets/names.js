import React from "react";

function Names() {

  // Make a variable add your name to the list  

  const name1 = "Howard Henson"
  const name2 = "Kyle Hammersmith"
  const name3 = "Christina Foster"
  const name4 = "Samuel Akins"

  return (
    <div>
      <ul>
        <li>{name1}</li>
        <li>{name2}</li>
        <li>{name3}</li>
        <li>{name4}</li>
      </ul>
    </div>

  );

};
export default Names;