import { FaRegCircleDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Header = () => {
  return (
    <>
      <header className="absolute bg-[rgba(255,255,255,0.1)] top-0 left-0 z-10 w-[100%] border-b border-[rgba(255,255,255,0.1)] font-poppins">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="w-[70%] flex ]">
              <ul className=" flex items-center  gap-[45px] [&>*]:py-[15px] text-white text-[12.6px]">
                <li className="flex items-center vertical-line gap-1">
                  <FaRegCircleDot className="text-[#00A9CD]"/><span className="flex">1234 Street Name, City Name </span>
                </li>
                <li className="flex items-center vertical-line">
                  <a href="#" className="flex items-center gap-1"><FaWhatsapp className="text-[#00A9CD]"/><span>123-456-7890</span></a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-1"><CiMail className="text-[#00A9CD]"/><span>mail@domain.com</span></a>
                </li>
              </ul>
            </div>

            <div className="w-[30%] flex justify-end items-center text-[12.6px] [&>*]:py-[15px] text-white">
              <span className="mr-[45px] vertical-line">Blog</span>
              <select className="border-none outline-none bg-transparent ">
                <option value="volvo"  className="text-gray-400">English</option>
                <option value="saab" className="text-gray-400" >Arabic</option>
                <option value="mercedes"  className="text-gray-400">Chinese</option>
              </select>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
