import Button from "./layer/Button"

const Banner = () => {
  return (
    <>
        <section className="banner-img banner-shadow relative font-poppins flex items-center justify-center">
            <div className="container z-[999]">
                <div className="text-left ">
                    <h1 className="text-[49px] leading-[1.2] font-extrabold text-white mb-[20px]">We are the best <br /><span>and we create websites.</span></h1>
                    <p className="text-[18.9px] text-white font-light mb-[25px]">Porto is a huge success, learn more about us.</p>
                    <Button content="GET STARTED NOW " radious={'rounded'} icon={<i class="fa-solid fa-arrow-right"></i>}></Button>
                </div>
            </div>
            
        </section>
    </>
  )
}

export default Banner