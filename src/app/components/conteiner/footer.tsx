


type ConteinerFooterProps = {
  children: React.ReactNode
}

export function ConteinerFooter(
  { children }: ConteinerFooterProps
) {
  return (
    <footer className="flex justify-center flex-wrap items-end gap-5">
      {children}
    </footer>
  )
}