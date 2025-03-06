"use client"

import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function Declaration({ declaration, onChange }) {
  return (
    <div className="space-y-2 py-4">
      <Label htmlFor="declaration">Declaration Statement</Label>
      <Textarea
        id="declaration"
        value={declaration}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        placeholder="I hereby declare that all the information provided above is true to the best of my knowledge."
      />
    </div>
  )
}

