"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Trash2 } from "lucide-react"

export function Interests({ interests, onChange, onAdd, onRemove }) {
  return (
    <div className="space-y-4 py-4">
      {interests.map((interest, index) => (
        <div key={index} className="flex items-center gap-2">
          <Input
            value={interest}
            onChange={(e) => onChange(index, e.target.value)}
            placeholder={`Interest ${index + 1}`}
          />
          {interests.length > 1 && (
            <Button variant="ghost" size="sm" onClick={() => onRemove(index)}>
              <Trash2 className="h-4 w-4" />
            </Button>
          )}
        </div>
      ))}
      <Button variant="outline" size="sm" onClick={onAdd}>
        <Plus className="mr-2 h-4 w-4" />
        Add Interest
      </Button>
    </div>
  )
}

