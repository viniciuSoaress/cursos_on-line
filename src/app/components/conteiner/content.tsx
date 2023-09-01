

type ContentProps = {
  children: React.ReactNode
}


export function ConteinerContent(
  { children }: ContentProps
) {

  return(
    <div className="flex-1 flex flex-col sm:flex-row  py-8 justify-between items-center gap-5">
      {children}
    </div>
  )
}