'use client'

import { useCurso } from "../hooks/useCurso"
import { Conteiner, Section, Curso, Button } from "../components"
import Link from "next/link"

import { array } from "../utils/array"


export default function Cursos() {

  const { curs, handleIsCurso, isCurso, setIsCurso } = useCurso()

  if (isCurso) {
    return <Curso key={curs.id} curso={curs} onClose={() => setIsCurso(is => !is)} />
  }

  return (
    <Conteiner.Root>

      <Conteiner.Tilte>
        Cursos page
      </Conteiner.Tilte>

      <Conteiner.Content>
        <Section.Root>
          {array.map(obj => (
            <Section.Card
              key={obj.id}
              onClick={() => handleIsCurso(obj)}
              title={obj.name}
              description={obj.info}
            />
          ))}
        </Section.Root>
      </Conteiner.Content>

      <Conteiner.Footer>
        <Button>
          <Link href='/'>Inicio</Link>
        </Button>
      </Conteiner.Footer>

    </Conteiner.Root>
  )
}