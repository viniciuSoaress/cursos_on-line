import { ChangeEvent, SelectHTMLAttributes } from "react";


type FormSelectProps = {
  name: string,
  id: string,
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void,
} & SelectHTMLAttributes<HTMLSelectElement>

const dados = [
  'oal',
  'ioe',
  'eu'
]

export function FormSelect({
  name= '',
  id,
  onChange,
  ...rest
}: FormSelectProps){

  return(
    <fieldset className="flex flex-col gap-2 mb-8">
      <label className="font-semibold text-larg" htmlFor={id}>{name}</label>
      <select  className="bg-second w-[480px] h-14 rounded-lg px-4 py-3"
      name={name} 
      id={id} 
      onChange={onChange} {...rest}
      >
        <option disabled selected>escola um curso</option>
        {dados.map(dado => (
          <option value={dado} key={dado}>{dado}</option>
        ))}
      </select>
    </fieldset>
  )
}