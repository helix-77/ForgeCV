"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

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

export function TemplateShowcase() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg" className="glass">
          View Templates
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {templates.map((template) => (
            <div
              key={template.id}
              className="flex flex-col overflow-hidden rounded-lg border bg-background/60 backdrop-blur-sm"
            >
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
                <Link href={`/builder?template=${template.id}`} onClick={() => setOpen(false)}>
                  <Button className="mt-4 w-full">Use Template</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

