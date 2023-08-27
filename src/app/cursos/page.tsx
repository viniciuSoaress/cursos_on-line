'use client'

import { useState } from "react"
import { Conteiner, Section, Curso } from "../components"

import { array } from "../utils/array"


export default function Cursos() {

  const [isCurso, setIsCurso] = useState(false)
  const [curs, setCurs] = useState({id: 0, name: '', info: ''})

  function handleIsCurso(c: {id: number, name: string, info: string}) {
    setIsCurso(is => !is)
    setCurs({
      id: c.id,
      info: c.info,
      name: c.name
    })
  }


  return (
    <Conteiner.Root>

      <Conteiner.Tilte>
        Cursos page
      </Conteiner.Tilte>

      <Section.Root>
        {array.map(obj => (
          <>
            <Section.Card onClick={() => handleIsCurso(obj)} key={obj.id} title={obj.name} description={obj.info} />
          </>
        ))}
        {isCurso && <Curso curso={curs} />}
      </Section.Root>

    </Conteiner.Root>
  )
}