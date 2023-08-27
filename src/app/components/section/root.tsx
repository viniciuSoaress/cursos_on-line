

type SectionRoot = {
  children: React.ReactNode
}

export function SectionRoot({
  children
}: SectionRoot
) {

  return (
    <section className="w-full h-full flex flex-wrap gap-8">
      {children}
    </section>
  )
}