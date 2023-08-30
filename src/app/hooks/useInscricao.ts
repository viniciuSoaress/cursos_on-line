'use client'

import { ChangeEvent, useState } from "react"


type Matricular = {
  firstname: string,
  lastName: string,
  email: string,
  curso: string,
  modalidade: string,
}

const matri: Matricular = {
  curso: '',
  email: '',
  firstname: '',
  lastName: '',
  modalidade: '',
}

export function useInscricao() {

  const [matricular, setMatricular] = useState<Matricular>(matri)

  function handleInputChange(
    e: ChangeEvent<HTMLInputElement>,
    field: keyof Matricular,
  ) {
    setMatricular((prev) => ({
      ...prev,
      [field]: e.target.value
    }))
  }

  function handleSelectChange(
    e: ChangeEvent<HTMLSelectElement>,
    field: keyof Matricular
  ) {
    setMatricular((prev) => ({
      ...prev,
      [field]: e.target.value
    }))
  }

  function handleAddDado(dado: Matricular) {
    setMatricular(dado)
  }

  return {
    matricular,
    handleInputChange,
    handleSelectChange,
    handleAddDado
  }

}