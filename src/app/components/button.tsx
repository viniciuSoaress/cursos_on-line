type Matricular = {
  firstname: string,
  lastName: string,
  email: string,
  curso: string,
  modalidade: string,
}

type ButtonProps = {
  children: React.ReactNode,
  onClick?: () => void
}

export function Button({
  children,
  onClick
}: ButtonProps
) {

  return (
    <>
      <button onClick={onClick}
        className="py-2 px-6 bg-thee rounded-xl text-min w-52 font-bold text-black"
      >
        {children}
      </button>
    </>
  )
}