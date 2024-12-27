import React from 'react'

export interface iPlanCard {
  isEmphasis?: boolean
  PlanName: string
  impulsePhrase: string
  advantagesList: string[]
  price: number
}

export default function PlanCard({
  isEmphasis = false,
  PlanName,
  impulsePhrase,
  advantagesList,
  price,
}: iPlanCard) {
  return (
    <div className="w-48 flex flex-col items-center p-4 gap-3 md:w-56">
      <span className="text-3xl font-bold text-white md:text-4xl">{PlanName}</span>

      <p className="text-sm text-white font-extralight -mb-3">
        {impulsePhrase}
      </p>
      <div
        className={`p-3 flex flex-col gap-3 bg-gradient-to-br ${isEmphasis ? 'from-red-900 to-red-400' : 'from-red-700 to-black'}`}
      >
        <div className="w-ful flex flex-col items-center gap-2">
          <span className="text-2xl font-black bg-white w-full text-center md:text-3xl">
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(price)}
          </span>
        </div>

        <ul className="flex flex-col gap-2">
          {advantagesList.map((advantage, index) => (
            <React.Fragment key={index}>
              <li className="text-sm text-white font-extralight md:text-lg">
                {advantage}
              </li>
              {index < advantagesList.length - 1 && (
                <div className="border-b-[1px] border-white" />
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className="text-lg text-white w-10/12 pt-1 pb-1 rounded-sm bg-gradient-to-t from-red-500 to-red-900 md:text-2xl md:w11/12"
      >
        Assinar
      </button>
    </div>
  )
}
