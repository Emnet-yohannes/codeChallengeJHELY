import react,{useState} from "react";
import Logo from "../../public/images/image3.png";
import MainBodyImage from "../../public/images/image125.png";
import Ellipse37 from "../../public/images/Ellipse37.jpg";
import Drawer from '../Drawer/Drawer';
import SearchBar from "../SearchBar/SearchBar";
import Image from "next/image";
const Header = () => {
  const [drawer,setDrawer]=useState(false);
  return(

  <div>
    <div className="flex items-center justify-between">
      <div className="w-[100px] ml-[20px] md:w-[195px] h-[23px] md:ml-[40px]">
        <Image src={Logo} />
      </div>
      <div className="block w-[657px] h-[45px] rounded-lg ml-[5%] mt-[26px] mb-[25px] mr-[20px]">
        <SearchBar />
      </div>

      <div className="visible bg-black mr-[20px] md:hidden">
        <button onClick={()=>{setDrawer(!drawer)}} type="button" class="inline-flex justify-center w-full rounded-md border bg-black border-gray-300 shadow-sm px-2 py-2  text-sm font-medium text-gray-700 hover:bg-black " id="menu-button" aria-expanded="true" aria-haspopup="true">
        <svg class="w-4 h-4" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      <svg class="hidden w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    
        </button>
      </div>

{
  drawer &&
    <div class=" origin-top-right absolute right-[10px] top-[70px] z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
        <div class="py-1" role="none">
          <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">lorem ipsum</a>
          <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">lorem ipsum</a>
          <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">lorem ipsum</a>
          
        </div>
    </div>
  
}





      <div className="hidden md:flex md:justify-evenly ml-[41px] mr-[40px]">
        <button className="text-white w-[47px] h-[20px]">Lorem</button>
        <button className="text-white w-[47px] h-[20px] ml-[53px]">
          Lorem
        </button>
        <button className="text-white w-[47px] h-[20px] ml-[38px]">
          Lorem
        </button>
      </div>
    </div>
    <div className="h-[27px] border-none">
      <hr className="bg-gradient-to-r h-[6px] border-none from-[#665AEF]  to-[#FC364C]" />
    </div>
    <div>
      <div></div>
    </div>
  </div>
  )

};

export default Header;
