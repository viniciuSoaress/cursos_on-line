'use client'

import { Button, Conteiner, Form, Inscri } from "../components";
import { useInscricao } from "../hooks/useInscricao";
import { currs, modalidade } from "../utils";


export default function Inscricao() {

  const { matricular, handleAddDado, handleInputChange, handleSelectChange, isIn } = useInscricao()

  if (isIn) {
    return (
      <Inscri key={matricular?.email}
        dados={matricular}
      />
    )
  }

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
            value={matricular.firstname}
            onChange={(e) => handleInputChange(e, 'firstname')}
            placeholder="Digite seu nome"
          />
          <Form.Input
            id="sobrename"
            name="sobrename"
            value={matricular.lastName}
            onChange={(e) => handleInputChange(e, 'lastName')}
            placeholder="Digite seu sobrenome"
          />

          <Form.Input
            id="email"
            name="email"
            value={matricular.email}
            type="email"
            onChange={(e) => handleInputChange(e, 'email')}
            placeholder="Digite seu e-mail"
          />

          <Form.Select
            id="curso"
            name="cursos"
            array={currs}
            onChange={(e) => handleSelectChange(e, 'curso')}
            value={matricular.curso}
          />
          <Form.Select
            id="modalidade"
            name="modalidade"
            array={modalidade}
            onChange={(e) => handleSelectChange(e, 'modalidade')}
            value={matricular.modalidade}
          />
        </Form.Content>

      </Conteiner.Content>

      <Conteiner.Footer>
        <Button onClick={() => handleAddDado(matricular)}>
          Concluir
        </Button>
      </Conteiner.Footer>

    </Conteiner.Root>
  )
}