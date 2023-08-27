import { Conteiner } from "..";

type CursoProps = {
  curso: {
  id: number;
  name: string;
  info: string;
}}

export function Curso({curso}: CursoProps) {

  return (
    <div className="z-10 absolute top-0 bg-second w-full h-full left-0">
      <h2>{curso.name}</h2>
    </div>
  )
}