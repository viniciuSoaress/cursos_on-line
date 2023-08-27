import { ChangeEvent, InputHTMLAttributes } from "react"


type FormInputProps = {
  name: string,
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
} & InputHTMLAttributes<HTMLInputElement>


export function FormInput({
  name = '',
  value = '',
  onChange,
  ...rest
}: FormInputProps) {

  return (
    <fieldset className="flex flex-col gap-2">
      <label >{name} :</label>
      <input
        type="text"
        onChange={onChange}
        {...rest}
      />
    </fieldset>
  )
}