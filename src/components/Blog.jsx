import Blog_item from "./layer/Blog_item"
import img1 from '../images/team-1.jpg'
import img2 from '../images/team-2.jpg'
import img3 from '../images/team-3.jpg'
import img4 from '../images/team-4.jpg'

const Blog = () => {
  return (
    <>
        <section className="py-12 my-12 font-poppins">
            <div className="container ">
                <div className="text-center mb-4">
                    <h5 className="text-[#212529] text-[16.8px] font-bold">OUR BLOG</h5>
                    <h2 className="text-[35px] text-[#212529] font-semibold mb-4">What's happening</h2>
                    <p className="text-[16.8px] font-normal text-[#777]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="flex justify-between items-center">
                <Blog_item img={img1} alt={'img 1'} name={'by John Doe'}/>
                <Blog_item img={img2} alt={'img 2'} name={'by Jessica Doe'}/>
                <Blog_item img={img3} alt={'img 3'} name={'by John Doe'}/>
                <Blog_item img={img4} alt={'img 4'} name={'by Jennifer Doe'}/>
                </div>
            </div>
        </section>
    </>
  ) 
}

{/* <input className='outline-none border-2 border-blue-300 focus:border-amber-400 focus:border-2'/> */}
export default Blog