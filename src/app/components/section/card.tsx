

type SectionCardProps = {
  title: string,
  description: string,
  onClick: () => void,
}

export function SectionCard({
  description = 'descrição',
  title = 'title',
  onClick
}: SectionCardProps
) {

  return(
    <div onClick={onClick}
     className="flex flex-col gap-3 w-[280px] h-32 bg-second pt-2 px-6 pb-6 rounded-lg cursor-pointer"
     >
      <h2 className="font-semibold text-min2">{title}</h2>
      <p className="text-[14px] font-normal">{description}</p>
    </div>
  )
}