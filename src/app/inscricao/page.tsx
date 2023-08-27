'use client'

import { Button, Conteiner, Form } from "../components";



export default function Inscricao() {

  return (
    <Conteiner.Root>

      <Conteiner.Tilte>
        Inscrição
      </Conteiner.Tilte>

      <Conteiner.Content>
        <Form.Input
          name="ola"
          value='ola'
          onChange={(e) => console.log(e.target.value)}
          placeholder="ikkkkkkk"
        />
      </Conteiner.Content>

      <Conteiner.Footer>
        <Button>
          Concluir
        </Button>
      </Conteiner.Footer>

    </Conteiner.Root>
  )
}