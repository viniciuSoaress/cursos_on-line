

type Title = {
  children: React.ReactNode
}

export function ConteinerTitle({
  children }: Title
) {
  return(
    <header className="flex justify-center min-w-min h-12 mb-10 border-b pb-2 text-larg2 font-bold">
      <h1>
      {children}
      </h1>
    </header>
  )
}