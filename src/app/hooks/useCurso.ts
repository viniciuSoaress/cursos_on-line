'use client'

import { useState } from "react"
import { ArrayProps } from "../utils/array"


export function useCurso(){

  const [isCurso, setIsCurso] = useState(false)
  const [curs, setCurs] = useState<ArrayProps>({id: 0, name: '', info: ''})

  function handleIsCurso(curso: ArrayProps) {
    setIsCurso(is => !is)
    setCurs({
      id: curso.id,
      info: curso.info,
      name: curso.name
    })
  }

  return {
    curs,
    isCurso,
    handleIsCurso,
    setIsCurso
  }
}