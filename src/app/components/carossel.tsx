'use client'

import { useState, useEffect } from 'react'
import { array } from '../utils'
import { Section } from '.'


export function Carrossel() {

  const [index, setIndex] = useState(0)


  useEffect(() => {

    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % array.length)
    }, 2500)

    return () => {
      clearInterval(interval)
    }

  }, [])

  const carro = array[index]
  

  return (
    <Section.Root>
      <Section.Card
        description={carro.info}
        title={carro.name} key={carro.id}
        onClick={() => setIndex((i) => (i + 1) % array.length)}
      />
    </Section.Root>
  )

}