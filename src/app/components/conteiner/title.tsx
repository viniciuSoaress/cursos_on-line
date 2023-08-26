

type Title = {
  children: React.ReactNode
}

export function ConteinerTitle({
  children }: Title
) {
  return(
    <header className="flex justify-center min-w-min h-10 mb-10 border-b text-larg2 font-bold">
      <h1>
      {children}
      </h1>
    </header>
  )
}