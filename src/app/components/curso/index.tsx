import { Button, Conteiner } from "..";
import Link from "next/link";

type CursoProps = {
  curso: {
    id: number;
    name: string;
    info: string;
    description: string,
  },
  onClose: () => void
}

export function Curso({ curso, onClose }: CursoProps) {

  return (
    <Conteiner.Root>

      <Conteiner.Tilte>
        {curso.name}
      </Conteiner.Tilte>

      <Conteiner.Content>
        <div>

          <strong>{curso.info}</strong>
          <p className="pl-4 mt-3 w-10/12">{curso.description}</p>
        </div>
      </Conteiner.Content>

      <Conteiner.Footer>
        <Button>
          <Link href='/inscricao'>increva-se</Link>
        </Button>

        <Button onClick={onClose}>
          voltar
        </Button>
      </Conteiner.Footer>
    </Conteiner.Root>
  )
}