"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, Trash2 } from "lucide-react"

export function Courses({ courses, onChange, onAdd, onRemove }) {
  return (
    <div className="space-y-6 py-4">
      {courses.map((course, index) => (
        <div key={index} className="space-y-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Course #{index + 1}</h4>
            {courses.length > 1 && (
              <Button variant="ghost" size="sm" onClick={() => onRemove(index)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`course-name-${index}`}>Name</Label>
              <Input
                id={`course-name-${index}`}
                value={course.name}
                onChange={(e) => onChange(index, "name", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`course-institution-${index}`}>Institution</Label>
              <Input
                id={`course-institution-${index}`}
                value={course.institution}
                onChange={(e) => onChange(index, "institution", e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor={`course-date-${index}`}>Date</Label>
            <Input
              id={`course-date-${index}`}
              value={course.date}
              onChange={(e) => onChange(index, "date", e.target.value)}
            />
          </div>
        </div>
      ))}
      <Button variant="outline" className="w-full" onClick={onAdd}>
        <Plus className="mr-2 h-4 w-4" />
        Add Course
      </Button>
    </div>
  )
}

