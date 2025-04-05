import Button from "./layer/Button"

const Footer = () => {
  return (
    <>
        <footer className="bg-[#212529] font-poppins border-t border-[#212529] pt-6">
            <div className="container ">
                <div className="flex justify-between py-12 mb-6">
                    <div className="w-[34%] px-3"> 
                        <h5 className="text-white text-[18.9px] font-semibold mb-6">Porto Template</h5>
                        <p className="text-[#777] font-normal text-[15.12px] mb-6 leading-[26px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                        Cras volutpat id sapien ac varius.</p>
                        <Button content="PURCHASE PORTO" font={true} px={true} py={true} radious={'rounded'}></Button>
                    </div>
                    <div className="w-[16%] px-3">
                        <h5 className="text-white text-[18.9px] font-semibold mb-6">Pages</h5>
                        <ul className="text-[#777] font-normal text-[15.12px] [&>li]:mb-2">
                            <li className="flex items-center">
                                <i class="fa-solid fa-angle-right footer-icon"></i>
                                <span className="ml-2">Our Services</span>
                            </li>
                            <li className="flex items-center">
                                <i class="fa-solid fa-angle-right footer-icon"></i>
                                <span className="ml-2">About Us</span>
                            </li>
                            <li className="flex items-center">
                                <i class="fa-solid fa-angle-right footer-icon"></i>
                                <span className="ml-2">Contact Us</span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[25%] px-3">
                    <h5 className="text-white text-[18.9px] font-semibold mb-6">Contact Us</h5>
                        <p  className="text-[#777] font-normal text-[15.12px] leading-[26px] mb-2">
                            <span className="text-[15.12px] text-white font-normal mr-1">Address:</span>
                             1234 Street Name, City Name, USA
                        </p>
                        <p className="text-[#777] font-normal text-[15.12px] leading-[26px] mb-2">
                            <span className="text-[15.12px] text-white font-normal mr-1">Phone:</span>
                             (123) 456-7890
                        </p>
                        <p className="text-[#777] font-normal text-[15.12px] leading-[26px] mb-2">
                            <span className="text-[15.12px] text-white font-normal mr-1">Email:</span>
                             mail@example.com
                        </p>
                    </div>
                    <div className="w-[25%] px-3">
                    <h5 className="text-white text-[18.9px] font-semibold mb-6">Follow Us</h5>
                    <ul className=" flex gap-1">
                        <li><i class="footer-logo fa-brands fa-facebook-f"></i></li>
                        <li><i class="footer-logo fa-brands fa-x-twitter"></i></li>
                        <li><i class="footer-logo fa-brands fa-linkedin-in"></i></li>
                    </ul>
                    </div>
                </div>
                <div className="border-t border-[rgba(255,255,255,0.03)] py-[35px]">
                <p className="text-center text-[#555] text-[11.34px] font-normal">© Copyright 2025. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer