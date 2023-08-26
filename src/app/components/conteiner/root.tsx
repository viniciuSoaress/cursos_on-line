

type ConteinerRootProps = {
  children: React.ReactNode
}

export function ConteinerRoot({children}: ConteinerRootProps){

  return(
    <main className='w-w-container flex flex-col h-h-container min-h-min font-normal'>
      {children}
    </main>
  )
}