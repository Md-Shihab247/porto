import { TbSitemap } from "react-icons/tb"
import Planing from "./layer/planing"
import { FaRegComments, FaRegHeart } from "react-icons/fa"
import { LuCoffee } from "react-icons/lu"

const Awesome = () => {
  return (
    <>
        <section className="py-[3rem] my-[3rem]">
            <div className="container font-poppins">
                <div className="text-center">
                    <h2 className="text-[#212529] text-[42px] font-bold leading-[42px] mb-[32px]">We are Porto, we are Awesome</h2>
                    <p className="text-[#777] leading-[1.9] font-normal text-[16.8px] max-w-[810px] mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat id sapien ac varius. Fusce hendrerit ligula a consectetur ullamcorper. Vestibulum varius pharetra lorem, in maximus libero placerat sed. In a lectus vel mauris tempor lobortis feugiat sed magna.</p>
                </div> 

                <div className="flex items-center justify-between ">
                    <Planing heading="Plan Everything" icon={<FaRegComments className="style"/>}/>
                    <Planing heading="Strategy" icon={<TbSitemap className="style"/>}/>
                    <Planing heading="Work Hard" icon={<LuCoffee className="style"/>}/>
                    <Planing heading="Deliver Quality" icon={<FaRegHeart className="style"/>}/>
                </div>
            </div>
        </section>
    </>
  ) 
}

export default Awesome