
const Blog_item = ({img,name,alt}) => {

  return (
    <>
        <div className='py-12'>
        <div className=' px-[12px]'>
            <h4 className='text-[21px] font-semibold text-[#212529] mb-4'>
            <a href="#" className=' hover:text-[#00AACE]'>Lorem ipsum dolor sit amet, consectetur</a>
            </h4>
            <p className='text-sm text-[#777] font-normal mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta...</p>
            <div className="flex items-center">
            <img src={img} alt={alt} className="h-[25px] w-[25px] rounded-full me-2"/>
            <span className="text-[12.6px] font-bold text-[#212529]">{name}</span>
            </div>
        </div>

        </div>
    </>
  )
}

export default Blog_item