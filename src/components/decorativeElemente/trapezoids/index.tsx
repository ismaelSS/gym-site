export default function Trapezoids({ amount = 4 }: { amount?: number }) {
  return (
    <>
      {Array.from({ length: amount }).map((_, index) => (
        <div
          aria-hidden="true"
          key={index}
          className="bg-white trapezio w-14 h-5 -rotate-[34.5deg]"
        />
      ))}
    </>
  )
}
