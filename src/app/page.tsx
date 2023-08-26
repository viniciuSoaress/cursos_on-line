import Link from 'next/link'
import { Conteiner, Button } from './components'

export default function Home() {

  

  return (
    <Conteiner.Root>

      <Conteiner.Tilte>Cursos de TI</Conteiner.Tilte>

      <Conteiner.Content>

        <div className='flex-1'>
          <h2 className='text-larg font-semibold'>oque somos </h2>
          <p>Lorem ipsum dolor .</p>
        </div>

        <div className='border-l w-1 h-4/5'/>

        <div className=''>
         <p> pra para todos so</p>
         <p> pra para todos so</p>
         <p> pra para todos so</p>
         <p> pra para todos so</p>
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
