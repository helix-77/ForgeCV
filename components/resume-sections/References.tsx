"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, Trash2 } from "lucide-react"

export function References({ references, onChange, onAdd, onRemove }) {
  return (
    <div className="space-y-6 py-4">
      {references.map((ref, index) => (
        <div key={index} className="space-y-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Reference #{index + 1}</h4>
            {references.length > 1 && (
              <Button variant="ghost" size="sm" onClick={() => onRemove(index)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`ref-name-${index}`}>Name</Label>
              <Input
                id={`ref-name-${index}`}
                value={ref.name}
                onChange={(e) => onChange(index, "name", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`ref-position-${index}`}>Position</Label>
              <Input
                id={`ref-position-${index}`}
                value={ref.position}
                onChange={(e) => onChange(index, "position", e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor={`ref-company-${index}`}>Company</Label>
            <Input
              id={`ref-company-${index}`}
              value={ref.company}
              onChange={(e) => onChange(index, "company", e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`ref-email-${index}`}>Email</Label>
              <Input
                id={`ref-email-${index}`}
                value={ref.email}
                onChange={(e) => onChange(index, "email", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`ref-phone-${index}`}>Phone</Label>
              <Input
                id={`ref-phone-${index}`}
                value={ref.phone}
                onChange={(e) => onChange(index, "phone", e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}
      <Button variant="outline" className="w-full" onClick={onAdd}>
        <Plus className="mr-2 h-4 w-4" />
        Add Reference
      </Button>
    </div>
  )
}

