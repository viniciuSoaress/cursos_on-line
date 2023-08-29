

type ContentProps = {
  children: React.ReactNode
}


export function ConteinerContent(
  { children }: ContentProps
) {

  return(
    <div className="flex-1 flex py-8 justify-between items-center gap-5">
      {children}
    </div>
  )
}