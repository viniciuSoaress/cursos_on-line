'use client'

import { Button, Conteiner, Form } from "../components";
import { currs, modalidade } from "../utils"



export default function Inscricao() {

  return (
    <Conteiner.Root>

      <Conteiner.Tilte>
        Inscrição
      </Conteiner.Tilte>

      <Conteiner.Content>
        <Form.Content>

          <Form.Input
            id="name"
            name="name"
            value=''
            onChange={(e) => alert(e.target.value)}
            placeholder="Digite seu nome"
          />
          <Form.Input
            id="sobrename"
            name="sobrename"
            value=''
            onChange={(e) => alert(e.target.value)}
            placeholder="Digite seu sobrenome"
          />

          <Form.Input
            id="email"
            name="email"
            value=''
            type="email"
            onChange={(e) => alert(e.target.value)}
            placeholder="Digite seu e-mail"
          />

          <Form.Select
            id="curso"
            name="cursos"
            array={currs}
            onChange={(e) => alert(e.target.value)}
            value=''
          />
          <Form.Select
            id="modalidade"
            name="modalidade"
            array={modalidade}
            onChange={(e) => alert(e.target.value)}
            value=''
          />
        </Form.Content>

        
      </Conteiner.Content>

      <Conteiner.Footer>
        <Button >
          Concluir
        </Button>
      </Conteiner.Footer>

    </Conteiner.Root>
  )
}