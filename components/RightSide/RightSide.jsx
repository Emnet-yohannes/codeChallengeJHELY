import React, { useState } from "react";
import downArrow from "../../public/images/downArrow.png";
import optionIcon from "../../public/images/optionIcon.png";
import questionVector from '../../public/images/questionVector.png';
import Image from "next/image";
const RightSide = () => {
  const [accordionState1, setAccordionState1] = useState(true);
  const [accordionState2, setAccordionState2] = useState(false);
  const handleClick1 = () => {
    setAccordionState1(!accordionState1);
  };
  const handleClick2 = () => {
    setAccordionState2(!accordionState2);
  };
  if (typeof window !== "undefined") {
    document.getElementById("accordion1").onclick = handleClick1;
    document.getElementById("accordion2").onclick = handleClick2;
  }

  const stats = [
    {
      title: "Lorem ipsum",
      subtitle: "Accessories & Ears",
      percentage: "9%",
    },
    {
      title: "Lorem ipsum",
      subtitle: "Arms",
      percentage: "15%",
    },
    {
      title: "Lorem ipsum",
      subtitle: "Eye",
      percentage: "32%",
    },
    {
      title: "Lorem ipsum",
      subtitle: "Glasses",
      percentage: "3%",
    },
    {
      title: "Lorem ipsum",
      subtitle: "Hair & Hats",
      percentage: "2%",
    },
    {
      title: "Lorem ipsum",
      subtitle: "Head",
      percentage: "92%",
    },
    {
      title: "Lorem ipsum",
      subtitle: "Legs & Clothes",
      percentage: "2%",
    },
    {
      title: "Lorem ipsum",
      subtitle: "Mouth",
      percentage: "46%",
    },
    {
      title: "Lorem ipsum",
      subtitle: "sometext",
      percentage: "90%",
    },
    {
      title: "Lorem ipsum",
      subtitle: "sometext",
      percentage: "90%",
    },
    {
      title: "Lorem ipsum",
      subtitle: "sometext",
      percentage: "90%",
    },
    {
      title: "Lorem ipsum",
      subtitle: "sometext",
      percentage: "90%",
    },
    {
      title: "Lorem ipsum",
      subtitle: "Mouth",
      percentage: "46%",
    },
    {
      title: "Lorem ipsum",
      subtitle: "sometext",
      percentage: "90%",
    },
    {
      title: "Lorem ipsum",
      subtitle: "sometext",
      percentage: "90%",
    },
    {
      title: "Lorem ipsum",
      subtitle: "sometext",
      percentage: "90%",
    },
    {
      title: "Lorem ipsum",
      subtitle: "sometext",
      percentage: "90%",
    },
    {
      title: "Lorem ipsum",
      subtitle: "Mouth",
      percentage: "46%",
    },
    {
      title: "Lorem ipsum",
      subtitle: "sometext",
      percentage: "90%",
    },
    {
      title: "Lorem ipsum",
      subtitle: "sometext",
      percentage: "90%",
    },
    {
      title: "Lorem ipsum",
      subtitle: "sometext",
      percentage: "90%",
    },
    {
      title: "Lorem ipsum",
      subtitle: "sometext",
      percentage: "90%",
    },
    {
      title: "Lorem ipsum",
      subtitle: "Mouth",
      percentage: "46%",
    },
    {
      title: "Lorem ipsum",
      subtitle: "sometext",
      percentage: "90%",
    },
    {
      title: "Lorem ipsum",
      subtitle: "sometext",
      percentage: "90%",
    },
    {
      title: "Lorem ipsum",
      subtitle: "sometext",
      percentage: "90%",
    },
    {
      title: "Lorem ipsum",
      subtitle: "sometext",
      percentage: "90%",
    },
    {
      title: "Lorem ipsum",
      subtitle: "Mouth",
      percentage: "46%",
    },
    {
      title: "Lorem ipsum",
      subtitle: "sometext",
      percentage: "90%",
    },
    {
      title: "Lorem ipsum",
      subtitle: "sometext",
      percentage: "90%",
    },
    {
      title: "Lorem ipsum",
      subtitle: "sometext",
      percentage: "90%",
    },
    {
      title: "Lorem ipsum",
      subtitle: "sometext",
      percentage: "90%",
    },
    
  ];

  return (
    <div className="hide-scroll-bar  ">
      <div className="cursor-pointer backgroundOpacity hide-scroll-bar rounded-[4px] w-[340px] md:w-[591px]  pl-[30px] ">
        <div id="accordion1" className="flex justify-between pl-[9px]  pt-[27px] pb-[23px] ">
          <div className="flex justify-around">
            <div className="w-[13.81px] h-[13.81px]">
              <Image src={optionIcon}></Image>
            </div>

            <h1 className="pl-2 whiteTextOpacity">Lorem Ipsum</h1>
            <div className='w-[15px] h-[15px] ml-[5px] mt-[2px]'>
              <Image src={questionVector}  />
            </div>

          </div>
          <div className=" mr-[25.23px]">
            <Image src={downArrow}/>
          </div>
        </div>
        {accordionState1 ? (
          <div className="hide-scroll-bar pb-[48px]">
            <div className="grid grid-cols-2 cursor-pointer gap-x-[8px] gap-y-[10px]  overflow-y-auto  h-[317px] w-[300px]  scrollbar  pr-4 md:grid-cols-3 md:w-[537px] ">
              {stats &&
                stats.map((stat, index) => {
                  return (
                    <div className="hover:border-2 focus:border-2 border-pink-700 px-[15px] py-[26px] text-center bg-[#0D0D0D]  h-[99px] md:w-[165px] rounded-[5px]">
                      <h3 className="text-[#8E8B8F] text-xs">
                        {stat.subtitle}
                      </h3>
                      <h1 className="text-base font-extrabold text-white">
                        {stat.title}
                      </h1>
                      <p className="text-[#8E8B8F] text-xs">
                        {stat.percentage}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        ) : null}
      </div>
      <div className="backgroundOpacity">
        <div id="accordion2" className="flex justify-between p-4 mt-4 cursor-pointer ">
          <div className="flex justify-around">
            <div className="w-3 h-3">
              <Image src={optionIcon}></Image>
            </div>

            <h1 className="pl-2 text-white">Lorem Ipsum</h1>
          </div>
          <div>
            <Image src={downArrow}></Image>
          </div>
        </div>
        {accordionState2 ? (
          <div className="px-4 pb-4 text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default RightSide;
