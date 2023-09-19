
import { Conteiner, Section, Button } from "../components"
import Link from "next/link"

import { array } from "../utils"

export async function getPost(){
  return array
}


export default async function Cursos() {

  const cursos = await getPost()

 

  return (
    <Conteiner.Root>

      <Conteiner.Tilte>
        Cursos page
      </Conteiner.Tilte>

      <Conteiner.Content>
        
        <Section.Root>
          {cursos.map(obj => (
            <Link href={`/cursos/${obj.id}`}>
            <Section.Card
              key={obj.id}
              title={obj.name}
              description={obj.info}
              />
              </Link>
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