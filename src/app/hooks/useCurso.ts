'use client'

import { useState } from "react"
import { ArrayProps } from "../utils"


export function useCurso(){

  const [isCurso, setIsCurso] = useState(false)
  const [curs, setCurs] = useState<ArrayProps>({id: 0, name: '', info: '', description: ''})

  function handleIsCurso(curso: ArrayProps) {
    setIsCurso(is => !is)
    setCurs({
      id: curso.id,
      info: curso.info,
      name: curso.name,
      description: curso.description
    })
  }

  return {
    curs,
    isCurso,
    handleIsCurso,
    setIsCurso
  }
}