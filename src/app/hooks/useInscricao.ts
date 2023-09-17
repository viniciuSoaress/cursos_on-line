'use client'

import { ChangeEvent, useState } from "react"


type Matricular = {
  firstName: string,
  lastName: string,
  email: string,
  curso: string,
  modalidade: string,
}

const matri: Matricular = {
  curso: '',
  email: '',
  firstName: '',
  lastName: '',
  modalidade: '',
}

export function useInscricao() {

  const [matricular, setMatricular] = useState<Matricular>(matri)
  const [isIn, setIsIn] = useState(false)


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

    if (matricular.firstName.length < 3 || matricular.lastName.length < 3) {
      alert('nome deve conter mais de tres letras')
      return
    }

    if (!matricular.email.includes('@gmail.com')) {
      alert('email errado')
      return
    }

    if(matricular.curso.length < 3){
      alert('curso obrigatorio')
      return
    }

    if(matricular.modalidade.length < 3){
      alert('curso obrigatorio')
      return
    }

    setMatricular(dado)
    setIsIn(true)

  }



  return {
    matricular,
    handleInputChange,
    handleSelectChange,
    handleAddDado,
    isIn,
  }

}