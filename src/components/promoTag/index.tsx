export default function PromoTag( {value}:{value?:number}) {
  return(
    <div className="self-end -mt-[18px] ">
      <span className=" border-gray-200 bg-gray-200 pl-6 pr-2 font-semibold text-sm trapezio2">
        { value && value > 0  ? `-${value}%` : '----'}
      </span>
    </div>
  )
}