import { Button, Conteiner } from ".";
import Link from "next/link";

type InscriProps = {
 dados: { firstname: string,
  lastName: string,
  email: string,
  curso: string,
  modalidade: string,}
}


export function Inscri({
  dados
}: InscriProps) {

  return (
    <Conteiner.Root>

      <Conteiner.Tilte>
        Inscrição Concluida
      </Conteiner.Tilte>

      <Conteiner.Content>
        <h2>ola {dados.firstname +' ' + dados.lastName} sua matricular esta concluida</h2>
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