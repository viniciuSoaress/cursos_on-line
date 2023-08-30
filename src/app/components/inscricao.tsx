import { Button, Conteiner } from ".";
import Link from "next/link";

type InscriProps = {
  firstname: string,
  lastName: string,
  email: string,
  curso: string,
  modalidade: string,
}


export function Inscri({
  curso = '',
  email = '',
  firstname = '',
  lastName = '',
  modalidade = '',
}: InscriProps) {

  return (
    <Conteiner.Root>

      <Conteiner.Tilte>
        Inscrição Concluida
      </Conteiner.Tilte>

      <Conteiner.Content>
        <h2>ola {firstname +' ' + lastName} sua matricular esta concluida</h2>
        <p>informações do curso :</p>

      </Conteiner.Content>

      <Conteiner.Footer>
        <Button>
          <Link href='/'>Inicio</Link>
        </Button>
      </Conteiner.Footer>

    </Conteiner.Root>
  )
}