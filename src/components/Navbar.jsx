import logo from "../images/logo.png"
const Navbar = () => {
  return (
    <>
        <nav className="absolute bg-[rgba(255,255,255,0.1)] top-[50px] w-[100%] z-20 mx-auto py-[20px] font-poppins">
            <div className="container">
               <div className="flex items-center justify-between">
               <a href="/" className="logo">
                    <img src={logo} alt="logo" className="w-[82px]" />
                </a>
                <ul className="flex items-center gap-[30px] font-semibold text-white text-sm">
                    <li className=" hover:text-[#00AACE]">
                        <a href="#" className="">HOME</a>
                    </li>
                    <li className=" hover:text-[#00AACE]">
                        <a href="#">ELEMENT</a>
                    </li>
                    <li className=" hover:text-[#00AACE]">
                        <a href="#">PAGES</a>
                    </li>
                    <li className=" hover:text-[#00AACE]">
                        <a href="#">PORTFOLIO</a>
                    </li>
                    <li className=" hover:text-[#00AACE]">
                        <a href="#">BLOG</a>
                    </li>
                    <li className=" hover:text-[#00AACE]">
                        <a href="#" className="vertical-line2">SHOP</a>
                    </li>
                    <li className="flex items-center gap-[15px] h-[80px]">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i class="fa-solid fa-bag-shopping"></i>
                    </li>
                </ul>
               </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar