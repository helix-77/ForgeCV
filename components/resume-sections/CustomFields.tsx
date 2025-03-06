"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, Trash2 } from "lucide-react"

export function CustomFields({ customFields, onChange, onAdd, onRemove }) {
  return (
    <div className="space-y-6 py-4">
      {customFields.map((field, index) => (
        <div key={index} className="space-y-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Custom Field #{index + 1}</h4>
            {customFields.length > 1 && (
              <Button variant="ghost" size="sm" onClick={() => onRemove(index)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor={`custom-label-${index}`}>Label</Label>
            <Input
              id={`custom-label-${index}`}
              value={field.label}
              onChange={(e) => onChange(index, "label", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`custom-value-${index}`}>Value</Label>
            <Input
              id={`custom-value-${index}`}
              value={field.value}
              onChange={(e) => onChange(index, "value", e.target.value)}
            />
          </div>
        </div>
      ))}
      <Button variant="outline" className="w-full" onClick={onAdd}>
        <Plus className="mr-2 h-4 w-4" />
        Add Custom Field
      </Button>
    </div>
  )
}

