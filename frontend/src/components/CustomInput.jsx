
const CustomInput = ({forLabel, label, type, id, placeholder, ref}) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1">
      <label className="font-semibold" for={forLabel}>{label}</label>
      <input className="bg-gray-100 rounded-lg px-[20px] py-[2px] active:outline-blue-400" type={type} id={id} placeholder={placeholder} ref={ref}/>
    </div>
  )
}

export default CustomInput