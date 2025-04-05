
const Planing = ({heading, icon}) => {
    return (
      <>
          <div className="text-center px-12">
              {icon}
            
              <h3 className="text-[#212529] text-[21px] font-bold mb-4">{heading}</h3>
              <p className="text-sm text-[#777] font-normal leading-[26px] mb-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
      </>
    )
  }
  
  export default Planing