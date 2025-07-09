
const CustomInput = ({forLabel, label, type, id, placeholder, ref, theme, name}) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1">
      <label className="font-semibold" htmlFor={forLabel}>{label}</label>
      <input name={name} className={`bg-gray-100 rounded-lg px-[20px] py-[2px] active:outline-blue-400 duration-300 ${theme}`} type={type} id={id} placeholder={placeholder} ref={ref}/>
    </div>
  )
}

export default CustomInput