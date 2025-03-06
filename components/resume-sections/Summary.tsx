"use client"

import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function Summary({ summary, onChange }) {
  return (
    <div className="space-y-2 py-4">
      <Label htmlFor="summary">Summary</Label>
      <Textarea
        id="summary"
        value={summary}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        placeholder="Write a brief summary of your professional background and goals..."
      />
    </div>
  )
}

