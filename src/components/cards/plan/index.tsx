export default function PlanCard() {
  return (
    <div className="w-48 bg-rose-700 flex flex-col items-center p-4 gap-7">
      <div className="w-ful flex flex-col items-center gap-2">
        <span className="text-lg font-bold text-white ">Familia</span>
        <p className="text-sm text-white font-extralight">
          cuide de quem você ama
        </p>
        <span className="text-2xl font-black bg-white w-full text-center">
          R$ 49,90
        </span>
      </div>

      <ul className="flex flex-col gap-2">
        <li className="text-sm text-white font-extralight">Acesso para 3 pessoas</li>
        <div className="border-b-[1px] border-white" />
        <li className="text-sm text-white font-extralight">Acompanhamento personalizado</li>
        <div className="border-b-[1px] border-white" />
        <li className="text-sm text-white font-extralight">Acesso irrestrito aao ambiente fit</li>
        <div className="border-b-[1px] border-white" />
        <li className="text-sm text-white font-extralight">Instrutor de treino</li>
        <div className="border-b-[1px] border-white" />
        <li className="text-sm text-white font-extralight">Desconto em produtos</li>
      </ul>

      <div>
        <span>Assinar agora</span>
      </div>
    </div>
  )
}
