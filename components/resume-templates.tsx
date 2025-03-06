import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ResumeTemplates() {
  const templates = [
    {
      id: "harvard",
      name: "Harvard",
      description: "Classic and professional template inspired by Harvard format",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "mit",
      name: "MIT",
      description: "Clean and technical template inspired by MIT format",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "oxford",
      name: "Oxford",
      description: "Elegant and traditional template inspired by Oxford format",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "custom",
      name: "Modern",
      description: "Contemporary template with a clean layout and photo",
      image: "/placeholder.svg?height=400&width=300",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-2 lg:grid-cols-4">
      {templates.map((template) => (
        <div key={template.id} className="flex flex-col overflow-hidden rounded-lg border bg-background">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={template.image || "/placeholder.svg"}
              alt={template.name}
              fill
              className="object-cover transition-all hover:scale-105"
            />
          </div>
          <div className="flex flex-1 flex-col justify-between p-4">
            <div className="space-y-2">
              <h3 className="font-bold">{template.name}</h3>
              <p className="text-sm text-muted-foreground">{template.description}</p>
            </div>
            <Link href={`/builder?template=${template.id}`} className="mt-4">
              <Button className="w-full">Use Template</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

