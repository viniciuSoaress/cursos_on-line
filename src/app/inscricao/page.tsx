'use client'

import { Button, Conteiner, Form } from "../components";



export default function Inscricao() {

  return (
    <Conteiner.Root>

      <Conteiner.Tilte>
        Inscrição
      </Conteiner.Tilte>

      <Conteiner.Content>
        <div>

          <Form.Input
            id="name"
            name="name"
            value=''
            onChange={(e) => console.log(e.target.value)}
            placeholder="Digite seu nome"
          />
          <Form.Input
            id="sobrename"
            name="sobrename"
            value=''
            onChange={(e) => console.log(e.target.value)}
            placeholder="Digite seu sobrenome"
          />

          <Form.Input
            id="email"
            name="email"
            value=''
            type="email"
            onChange={(e) => console.log(e.target.value)}
            placeholder="Digite seu e-mail"
          />

          <Form.Select
            id="aa"
            name="cursos"
            onChange={(e) => alert(e.target.value)}
            value=''
          />
          <Form.Select
            id="aa"
            name="cursos"
            onChange={(e) => alert(e.target.value)}
            value=''
          />
        </div>

        
      </Conteiner.Content>

      <Conteiner.Footer>
        <Button >
          Concluir
        </Button>
      </Conteiner.Footer>

    </Conteiner.Root>
  )
}