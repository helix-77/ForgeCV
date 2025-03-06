"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, Trash2 } from "lucide-react"

export function Education({ education, onChange, onAdd, onRemove }) {
  return (
    <div className="space-y-6 py-4">
      {education.map((edu, index) => (
        <div key={index} className="space-y-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Education #{index + 1}</h4>
            {education.length > 1 && (
              <Button variant="ghost" size="sm" onClick={() => onRemove(index)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`degree-${index}`}>Degree</Label>
              <Input
                id={`degree-${index}`}
                value={edu.degree}
                onChange={(e) => onChange(index, "degree", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`institution-${index}`}>Institution</Label>
              <Input
                id={`institution-${index}`}
                value={edu.institution}
                onChange={(e) => onChange(index, "institution", e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`edu-location-${index}`}>Location</Label>
              <Input
                id={`edu-location-${index}`}
                value={edu.location}
                onChange={(e) => onChange(index, "location", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`gpa-${index}`}>GPA</Label>
              <Input id={`gpa-${index}`} value={edu.gpa} onChange={(e) => onChange(index, "gpa", e.target.value)} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`edu-start-${index}`}>Start Date</Label>
              <Input
                id={`edu-start-${index}`}
                value={edu.startDate}
                onChange={(e) => onChange(index, "startDate", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`edu-end-${index}`}>End Date</Label>
              <Input
                id={`edu-end-${index}`}
                value={edu.endDate}
                onChange={(e) => onChange(index, "endDate", e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}
      <Button variant="outline" className="w-full" onClick={onAdd}>
        <Plus className="mr-2 h-4 w-4" />
        Add Education
      </Button>
    </div>
  )
}

