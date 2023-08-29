

type FormContent = {
  children: React.ReactNode
}

export function FormContent({
  children
}: FormContent) {

  return (
    <form
      className="w-full h-full"
      action="">
      {children}
    </form>
  )
}