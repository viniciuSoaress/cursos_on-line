import { Button, Conteiner } from ".";
import Link from "next/link";

type InscriProps = {
  dados: {
    firstName: string,
    lastName: string,
    email: string,
    curso: string,
    modalidade: string,
  }
}


export function Inscri({
  dados
}: InscriProps) {

  return (
    <Conteiner.Root>

      <Conteiner.Tilte>
        Curso adiquirido
      </Conteiner.Tilte>

      <Conteiner.Content>
        <div>
          <h2 className="text-larg mb-3">Óla <strong> {dados.firstName + ' ' + dados.lastName}</strong> sua matricular foi concluida</h2>
          <p className="text-min2">informações :</p>
          <p className="text-min mb-3 pl-4">
            Curso Escolhido: {dados.curso}
          </p>
          <p className="text-min mb-3 pl-4">
            modalidade: {dados.modalidade}
          </p>
        </div>

      </Conteiner.Content>

      <Conteiner.Footer>
        <Button>
          <Link href='/'>Inicio</Link>
        </Button>
      </Conteiner.Footer>

    </Conteiner.Root>
  )
}