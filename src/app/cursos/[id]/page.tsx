import { Button, Conteiner } from '@/app/components'
import { array } from '../../utils'
import Link from 'next/link'

export async function genereteStaticParams() {
  return array.map((data) => ({
    params: {
      id: String(data.id)
    }
  }))
}


export async function getProjects({ id }: { id: string }) {
  return array[Number(id)]
}

export default async function dataId({
  params
}: {
  params: { id: string }
}) {

  const data = await getProjects(params)

  return (
    <Conteiner.Root>

      <Conteiner.Tilte>
        {data.name}
      </Conteiner.Tilte>

      <Conteiner.Content>
        <div>

          <strong>{data.info}</strong>
          <p className="pl-4 mt-3 w-10/12">{data.description}</p>
        </div>
      </Conteiner.Content>

      <Conteiner.Footer>
        <Button>
          <Link href='/inscricao'>increva-se</Link>
        </Button>

        <Button>
        <Link href='/cursos'>voltar</Link>
        </Button>
      </Conteiner.Footer>
    </Conteiner.Root>
  )
}