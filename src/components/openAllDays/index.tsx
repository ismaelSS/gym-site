import './styles.css'
export default function OpenAllDays() {
  return (
    <div className="border-2 border-white flex w-fit text-center items-center p-0 mt-14 z-50 md:flex-col md:mt-0 md:border-0 md:gap-3 ">
      <p className="flex flex-col w-52 mmin:w-52">
        <p className="text2 text-2xl">aberto todos</p>
        <span className="text4 center tracking-wider mmin:text-4xl">
          os dias
        </span>
      </p>
      <span className="glitch text3 w-2/5 border-l-2 mmin:text-5xl md:border-l-0 md:border-t-2 md:pt-3 ">7/7</span>
    </div>
  )
}
