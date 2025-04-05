import img from "../images/smartphone-corporate-14-1.png"
import img2 from "../images/smartphone-corporate-14-2.png"
import img3 from "../images/smartphone-corporate-14-3.png"
import Button from "./layer/Button"
const Layouts = ({subheading,heading ,position,parralax,phone}) => {
  return (
    <>

    {position === "true"
    ?  <section className="bg-[#EDEDED] py-[50px] relative">
      {parralax === "parallax-true"
      ? <div className="parallax"></div>
      : <div className="parallax3"></div>
      }
    <div className=" container flex items-center justify-between">
      <div className="w-[60%] font-poppins z-50">
        <p className="text-[#212529] text-[16.8px] opacity-80 font-bold">{subheading}</p>
        <h4 className="text-[35px] text-[#212529] font-bold mb-6">{heading}</h4>
        <ul className="mb-[32px] ">
          <li className="mb-[13px] leading-6">
            <i class="fa-solid fa-caret-right caret-icon"></i>
            <span className="text-[16.8px] text-[#777] pl-[20px] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </li>
          <li className="mb-[13px] leading-6">
            <i class="fa-solid fa-caret-right caret-icon"></i>
            <span className="text-[16.8px] text-[#777] pl-[20px] font-normal">
              Ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </li>
          <li className="mb-[13px] leading-6">
            <i class="fa-solid fa-caret-right caret-icon"></i>
            <span className="text-[16.8px] text-[#777] pl-[20px] font-normal">
              Dolor sit amet, lorem ipsum consectetur adipiscing elit.
            </span>
          </li>
        </ul>
        <Button font={true} content="Learn More" />
      </div>
      <div className="w-[40%] z-50">
        {phone === "true"
        ? <img src={img} alt="smartphone" className="ml-24 " />
        : <img src={img3} alt="smartphone" className="ml-24 " />

        }
      </div>
    </div>
       </section>

    :
    <section className="bg-[#fff] py-[50px] relative">
    <div className="parallax2"></div>
    <div className=" container flex items-center justify-between">
      <div className="w-[50%] z-50">
        <img src={img2} alt="smartphone" className="ml-24 " />
      </div>
      <div className="w-[50%] font-poppins z-50">
        <p className="text-[#212529] text-[16.8px] opacity-80 font-bold">EXCLUSIVE</p>
        <h4 className="text-[35px] text-[#212529] font-bold mb-6">Customizable Style Switcher</h4>
        <ul className="mb-[32px] ">
          <li className="mb-[13px] leading-6">
            <i class="fa-solid fa-caret-right caret-icon"></i>
            <span className="text-[16.8px] text-[#777] pl-[20px] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </li>
          <li className="mb-[13px] leading-6">
            <i class="fa-solid fa-caret-right caret-icon"></i>
            <span className="text-[16.8px] text-[#777] pl-[20px] font-normal">
              Ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </li>
          <li className="mb-[13px] leading-6">
            <i class="fa-solid fa-caret-right caret-icon"></i>
            <span className="text-[16.8px] text-[#777] pl-[20px] font-normal">
              Dolor sit amet, lorem ipsum consectetur adipiscing elit.
            </span>
          </li>
        </ul>
        <Button content="Learn More" />
      </div>
    </div>
    </section>



    }
     
    </>
  );
};

export default Layouts;
