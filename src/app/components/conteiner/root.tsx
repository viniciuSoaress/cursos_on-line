

type ConteinerRootProps = {
  children: React.ReactNode
}

export function ConteinerRoot({children}: ConteinerRootProps){

  return(
    <main className='w-w-container flex flex-col justify-between h-h-container min-h-min font-normal'>
      {children}
    </main>
  )
}