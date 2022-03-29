import React, { useState } from "react";
import downArrow from "../../public/images/downArrow.png";
import optionIcon from "../../public/images/optionIcon.png";
import Vector1 from "../../public/images/vector1.png";
import Vector2 from "../../public/images/Vector2.png";
import Vector3 from "../../public/images/Vector3.png";
import Vector4 from "../../public/images/Vector4.png";
import Image from "next/image";
const LeftSide = () => {
  const [accordionState, setAccordionState] = useState(true);
  const handleClick = () => {
    setAccordionState(!accordionState);
  };
  if (typeof window !== "undefined") {
    document.getElementById("accordion0").onclick = handleClick;
  }
  return (
    <div className="backgroundOpacity w-[340px] md:w-[591px] rounded-[4px]">
      <div
        id="accordion0"
        className="cursor-pointer flex justify-between pl-[28px] pr-[38px] pt-[27px] pb-[23px]"
      >
        <div className="flex justify-around ">
          <div className="h-[17px] w-[17px]">
            <Image src={optionIcon} />
          </div>

          <h1 className="pl-2 h-[22px]">Lorem Ipsum</h1>
        </div>
        <div className="">
          <Image src={downArrow}></Image>
        </div>
      </div>
      {accordionState ? (
        <div className="pb-[0px] sm:pb-[53px]  w-[200px]  h-[275px] sm:h-[295px] md:w-[591px] md:h-[272px] ">
          <p className="mb-[42px]  text-white text-sm ml-[14px] sm:ml-[28px] font-manrope h-[109px] w-[320px] md:w-[471px] text-[11px] md:text-[14px] leading-[19.12px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          </p>
          <div className="flex justify-start">
          
          <div className="grid grid-rows-2 grid-flow-col gap-x-[46.5px]">
            <div className="flex justify-start pl-[28px] mb-[17px] w-[227ox">
              <div className="w-[29.14px] h-[29.14px]">
                <Image src={Vector1}></Image>
              </div>

              <h1 className="text-[#FC364C] pl-[11.86px]">Lorem ipsum</h1>
            </div>
            <div className="flex justify-start pl-[28px]">
              <div className="w-[20px] h-[20px]">
                <Image src={Vector2}></Image>
              </div>

              <h1 className="text-[#FC364C] pl-[17px] ">@Lorem ipsum</h1>
            </div>
            <div className="flex justify-start pl-0">
              <div className="w-[23.4px] h-[17.18px">
                <Image src={Vector3}></Image>
              </div>

              <h1 className="text-[#FC364C] pl-[15.6px]">@Lorem ipsum</h1>
            </div>
            <div className="flex justify-start">
              <div className="w-[20px] h-[17px]">
                <Image src={Vector4}></Image>
              </div>

              <h1 className="text-[#fff] pl-[17px]">@Lorem ipsum</h1>
            </div>
          </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default LeftSide;
