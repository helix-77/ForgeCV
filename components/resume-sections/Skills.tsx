"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, Trash2 } from "lucide-react"

export function Skills({ skills, onChange, onAdd, onRemove }) {
  return (
    <div className="space-y-6 py-4">
      <div className="space-y-4">
        <Label>Technical Skills</Label>
        {skills.technical.map((skill, index) => (
          <div key={index} className="flex items-center gap-2">
            <Input
              value={skill}
              onChange={(e) => onChange("technical", index, e.target.value)}
              placeholder={`Technical skill ${index + 1}`}
            />
            {skills.technical.length > 1 && (
              <Button variant="ghost" size="sm" onClick={() => onRemove("technical", index)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))}
        <Button variant="outline" size="sm" onClick={() => onAdd("technical")}>
          <Plus className="mr-2 h-4 w-4" />
          Add Technical Skill
        </Button>
      </div>
      <div className="space-y-4">
        <Label>Languages</Label>
        {skills.languages.map((skill, index) => (
          <div key={index} className="flex items-center gap-2">
            <Input
              value={skill}
              onChange={(e) => onChange("languages", index, e.target.value)}
              placeholder={`Language ${index + 1}`}
            />
            {skills.languages.length > 1 && (
              <Button variant="ghost" size="sm" onClick={() => onRemove("languages", index)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))}
        <Button variant="outline" size="sm" onClick={() => onAdd("languages")}>
          <Plus className="mr-2 h-4 w-4" />
          Add Language
        </Button>
      </div>
      <div className="space-y-4">
        <Label>Tools</Label>
        {skills.tools.map((skill, index) => (
          <div key={index} className="flex items-center gap-2">
            <Input
              value={skill}
              onChange={(e) => onChange("tools", index, e.target.value)}
              placeholder={`Tool ${index + 1}`}
            />
            {skills.tools.length > 1 && (
              <Button variant="ghost" size="sm" onClick={() => onRemove("tools", index)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))}
        <Button variant="outline" size="sm" onClick={() => onAdd("tools")}>
          <Plus className="mr-2 h-4 w-4" />
          Add Tool
        </Button>
      </div>
    </div>
  )
}

