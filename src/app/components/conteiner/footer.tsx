


type ConteinerFooterProps = {
  children: React.ReactNode
}

export function ConteinerFooter(
  { children }: ConteinerFooterProps
) {
  return (
    <footer className="flex sm:justify-end justify-center flex-wrap items-end gap-5 pb-4">
      {children}
    </footer>
  )
}