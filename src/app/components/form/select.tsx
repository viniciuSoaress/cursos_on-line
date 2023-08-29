import { ChangeEvent, SelectHTMLAttributes } from "react";


type FormSelectProps = {
  name: string,
  value: string,
  id: string,
  array: string[]
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void,
} & SelectHTMLAttributes<HTMLSelectElement>

const dados = [
  'oal',
  'ioe',
  'eu'
]

export function FormSelect({
  name= '',
  value = '',
  id,
  array = [],
  onChange,
  ...rest
}: FormSelectProps){

  return(
    <fieldset className="flex flex-col gap-2 mb-8">
      <label className="font-semibold text-larg" htmlFor={id}>{name} :</label>
      <select  className="bg-second w-[92%] h-14 rounded-lg px-4 py-3"
      name={name} 
      id={id} 
      value={value}
      onChange={onChange} {...rest}
      >
        <option disabled value=''>escola o/a {name}</option>
        {array?.map(dado => (
          <option value={dado} key={dado}>{dado}</option>
        ))}
      </select>
    </fieldset>
  )
}