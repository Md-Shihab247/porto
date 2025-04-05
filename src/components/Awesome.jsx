import Planing from "./layer/planing"

const Awesome = () => {
  return (
    <>
        <section className="py-[3rem] my-[3rem]">
            <div className="container font-poppins">
                <div className="text-center">
                    <h2 className="text-[#212529] text-[42px] font-bold leading-[42px] mb-[32px]">We are Porto, we are Awesome</h2>
                    <p className="text-[#777] leading-[1.9] font-normal text-[16.8px] max-w-[810px] mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat id sapien ac varius. Fusce hendrerit ligula a consectetur ullamcorper. Vestibulum varius pharetra lorem, in maximus libero placerat sed. In a lectus vel mauris tempor lobortis feugiat sed magna.</p>
                </div> 

                {/* <div className="flex items-center justify-between ">
                    <Planing heading="Strategy" icon={<i class="fa-regular fa-comments style"></i>}/>
                    <Planing heading="Plan Everything" icon={<i class="fa-solid fa-sitemap style"></i>}/>
                    <Planing heading="Work Hard" icon={<i class="fa-solid fa-mug-hot style"></i>}/>
                    <Planing heading="Deliver Quality" icon={<i class="fa-regular fa-heart style"></i>}/>
                </div> */}
            </div>
        </section>
    </>
  ) 
}

export default Awesome