'use client'
import { useState } from 'react'

export default function TT() {
  const [valores, setValores] = useState<number[]>([])

  const addValor = (valor: number) => {
    console.log(valor + 1)

    if (!valores.includes(valor + 1)) {
      setValores((prevValores) => [...prevValores, valor + 1])
    }
  }

  return (
    <div className="flex w-[50rem] flex-wrap">
      {Array.from({ length: 50 }).map((_, index) => (
        <div
          key={index}
          className={`w-20 h-20 border flex items-center justify-center ${
            valores.includes(index + 1) ? 'bg-green-600' : ''
          }`}
          onClick={() => addValor(index)}
        >
          <span>{index + 1}</span>
        </div>
      ))}
      <div className="mt-4">
        <p>Valores clicados:</p>
        <pre>{JSON.stringify(valores, null, 2)}</pre>
      </div>
    </div>
  )
}
