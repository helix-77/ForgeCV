"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, Trash2 } from "lucide-react"

export function Publications({ publications, onChange, onAdd, onRemove }) {
  return (
    <div className="space-y-6 py-4">
      {publications.map((pub, index) => (
        <div key={index} className="space-y-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Publication #{index + 1}</h4>
            {publications.length > 1 && (
              <Button variant="ghost" size="sm" onClick={() => onRemove(index)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor={`pub-title-${index}`}>Title</Label>
            <Input
              id={`pub-title-${index}`}
              value={pub.title}
              onChange={(e) => onChange(index, "title", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`pub-authors-${index}`}>Authors</Label>
            <Input
              id={`pub-authors-${index}`}
              value={pub.authors}
              onChange={(e) => onChange(index, "authors", e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`pub-journal-${index}`}>Journal</Label>
              <Input
                id={`pub-journal-${index}`}
                value={pub.journal}
                onChange={(e) => onChange(index, "journal", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`pub-date-${index}`}>Date</Label>
              <Input
                id={`pub-date-${index}`}
                value={pub.date}
                onChange={(e) => onChange(index, "date", e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor={`pub-url-${index}`}>URL</Label>
            <Input id={`pub-url-${index}`} value={pub.url} onChange={(e) => onChange(index, "url", e.target.value)} />
          </div>
        </div>
      ))}
      <Button variant="outline" className="w-full" onClick={onAdd}>
        <Plus className="mr-2 h-4 w-4" />
        Add Publication
      </Button>
    </div>
  )
}

