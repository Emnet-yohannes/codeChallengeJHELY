import React, { useState } from "react";
import downArrow from "../../public/images/downArrow.png";
import optionIcon from "../../public/images/optionIcon.png";
import Vector1 from "../../public/images/vector1.png";
import Vector2 from "../../public/images/Vector2.png";
import Vector3 from "../../public/images/Vector3.png";
import Vector4 from "../../public/images/Vector4.png";
import Image from "next/image";
const LeftSide = () => {
  const [accordionState3, setAccordionState3] = useState(true);
  const handleClick = () => {
    setAccordionState3(!accordionState3);
  };
  if (typeof window !== "undefined") {
    document.getElementById("accordion0").onclick = handleClick;
  }
  return (
    <div className="backgroundOpacity rounded-[4px]">
      <div
        id="accordion0"
      >
        <svg class="w-6 h-6" fill="#FFFFFF" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    
      </div>
      {accordionState3 ? (
        <div>
          <ul>
            <li className="text-white">
              lorem ipsum
            </li>
            <li>
              lorem ipsum
            </li>
            <li>
              lorem ipsum
            </li>
            
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default LeftSide;
