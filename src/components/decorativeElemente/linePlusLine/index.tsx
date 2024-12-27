export default function LinePlusLine() {
  return (
    <div aria-hidden="true" className="flex gap-4 items-center absolute bottom-2 w-full">
      <div className=" border-2 border-red-600 w-2/5" />
      <span className="font-extrabold text-2xl line-clamp-2 tracking-[1rem] text-red-600">
        ++++++
      </span>
    </div>
  )
}
