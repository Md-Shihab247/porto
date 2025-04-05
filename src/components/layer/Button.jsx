
const Button = ({content,icon,radious,px,py,font}) => {
  return (
    <>
        <a href="#" className={`${px ? `btn-paddingX` : `px-[38.4px]`} ${py ? `btn-paddingY` : `py-4`} ${font ? `text-[12.6px]` : `text-sm`} bg-[#00AACE] text-white font-bold  inline-block ${radious} hover:bg-[#00caf4] transition-all`}>{content} {icon}</a>
    </>
  ) 
}

export default Button