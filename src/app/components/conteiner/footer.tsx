


type ConteinerFooterProps = {
  children: React.ReactNode
}

export function ConteinerFooter(
  { children }: ConteinerFooterProps
) {
  return (
    <footer className="flex justify-end flex-col items-end gap-5">
      {children}
    </footer>
  )
}