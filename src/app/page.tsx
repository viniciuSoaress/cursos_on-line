import Link from 'next/link'
import { Conteiner, Button, Carrossel } from './components'


export default function Home() {



  return (
    <Conteiner.Root>

      <Conteiner.Tilte>Cursos de TI</Conteiner.Tilte>

      <Conteiner.Content>

        <div className='flex-1 sm:border-r mt-24 sm:mt-0'>
          <h2 className='text-larg font-semibold'>TI Estudos</h2>
          <p className='pl-3'>Aqui vocé encontra os melhores cursors, para ajudar a acelerar sua careirar na area de <strong>ti</strong>.</p>
        </div>

        {/* <div className='border-l w-1 h-4/5' /> */}

        <div className='mb-24 sm:mb-0'>
          <Carrossel />
        </div>

      </Conteiner.Content>

      <Conteiner.Footer>
        <Button>
          <Link href='/cursos'>Conheça os cursos</Link>
        </Button>
        <Button>
          <Link href='/inscricao'>Increva-se</Link>
        </Button>
      </Conteiner.Footer>

    </Conteiner.Root>
  )
}
