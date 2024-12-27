export default function Plan2() {
  return (
    <div className="bg-amber-500 flex p-2 gap-2">
      <div className="flex flex-col items-center">
        <span className="text-xl font-black">Família</span>
        <p>cuide de quem você ama</p>
        <p className="text-2xl font-black bg-white w-full text-center">
          R$ 49.90
        </p>
      </div>

      <ul>
        <li>Acesso ilimitado</li>
        <div className="border-t-[1px] border-white" />
        <li>Acesso ilimitado</li>
        <div className="border-t-[1px] border-white" />
      </ul>

      <button>Assinar</button>
    </div>
  )
}
