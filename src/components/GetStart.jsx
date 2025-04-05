import Button from "./layer/Button"
// import background from '../images/bg-corporate-14-1.jpg' 

const GetStart = ({}) => {
  return (
    <>
        <section className="font-poppins overlay get-banner-img py-[147.6px]">
            <div className="container flex justify-center items-center">
                <div className="text-center z-[999]">
                    <h2 className="text-[42px] tracking-[-2.1px] font-bold text-white mb-6 ">Get in touch and learn how we can help</h2>
                    <p className="text-[16.8px] font-light text-white opacity-70 tracking-[1.9] px-36 mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat id sapien ac varius. Fusce hendrerit ligula a consectetur ullamcorper. Vestibulum varius pharetra lorem.</p>
                    <Button content="GET STARTED NOW " px={true} py={true} radious={'rounded'} icon={<i class="fa-solid fa-arrow-right"></i>}></Button>
                </div>
            </div>
        </section>
    </>
  )
}

export default GetStart