import { ChangeEvent, InputHTMLAttributes } from "react"


type FormInputProps = {
  name: string,
  value: string,
  id: string,
  type?: 'text' | 'email'
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
} & InputHTMLAttributes<HTMLInputElement>


export function FormInput({
  name = '',
  value = '',
  id = '',
  type = 'text',
  onChange,
  ...rest
}: FormInputProps) {

  return (
    <fieldset className="flex flex-col gap-2 mb-8">
      <label className="font-semibold text-larg" htmlFor={id} >
        {name} :
      </label>
      <input
        className="px-4 py-3 rounded-lg bg-second w-[92%] h-14"
        type={type}
        id={id}
        onChange={onChange}
        {...rest}
      />
    </fieldset>
  )
}