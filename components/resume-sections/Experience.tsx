"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Trash2 } from "lucide-react"

export function Experience({ experience, onChange, onAdd, onRemove }) {
  const handleExperienceBulletChange = (expIndex, bulletIndex, value) => {
    const updatedExperience = [...experience]
    const updatedBullets = [...updatedExperience[expIndex].bullets]
    updatedBullets[bulletIndex] = value

    updatedExperience[expIndex] = {
      ...updatedExperience[expIndex],
      bullets: updatedBullets,
    }

    onChange(expIndex, "bullets", updatedBullets)
  }

  const addExperienceBullet = (expIndex) => {
    const updatedExperience = [...experience]
    updatedExperience[expIndex] = {
      ...updatedExperience[expIndex],
      bullets: [...updatedExperience[expIndex].bullets, ""],
    }

    onChange(expIndex, "bullets", updatedExperience[expIndex].bullets)
  }

  const removeExperienceBullet = (expIndex, bulletIndex) => {
    const updatedExperience = [...experience]
    const updatedBullets = [...updatedExperience[expIndex].bullets]
    updatedBullets.splice(bulletIndex, 1)

    updatedExperience[expIndex] = {
      ...updatedExperience[expIndex],
      bullets: updatedBullets,
    }

    onChange(expIndex, "bullets", updatedBullets)
  }

  return (
    <div className="space-y-6 py-4">
      {experience.map((exp, index) => (
        <div key={index} className="space-y-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Experience #{index + 1}</h4>
            {experience.length > 1 && (
              <Button variant="ghost" size="sm" onClick={() => onRemove(index)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`title-${index}`}>Job Title</Label>
              <Input
                id={`title-${index}`}
                value={exp.title}
                onChange={(e) => onChange(index, "title", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`company-${index}`}>Company</Label>
              <Input
                id={`company-${index}`}
                value={exp.company}
                onChange={(e) => onChange(index, "company", e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`exp-location-${index}`}>Location</Label>
              <Input
                id={`exp-location-${index}`}
                value={exp.location}
                onChange={(e) => onChange(index, "location", e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`exp-start-${index}`}>Start Date</Label>
              <Input
                id={`exp-start-${index}`}
                value={exp.startDate}
                onChange={(e) => onChange(index, "startDate", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`exp-end-${index}`}>End Date</Label>
              <Input
                id={`exp-end-${index}`}
                value={exp.endDate}
                onChange={(e) => onChange(index, "endDate", e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor={`exp-description-${index}`}>Description</Label>
            <Textarea
              id={`exp-description-${index}`}
              value={exp.description}
              onChange={(e) => onChange(index, "description", e.target.value)}
              rows={2}
            />
          </div>
          <div className="space-y-4">
            <Label>Bullet Points</Label>
            {exp.bullets.map((bullet, bulletIndex) => (
              <div key={bulletIndex} className="flex items-center gap-2">
                <Input
                  value={bullet}
                  onChange={(e) => handleExperienceBulletChange(index, bulletIndex, e.target.value)}
                  placeholder={`Bullet point ${bulletIndex + 1}`}
                />
                {exp.bullets.length > 1 && (
                  <Button variant="ghost" size="sm" onClick={() => removeExperienceBullet(index, bulletIndex)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={() => addExperienceBullet(index)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Bullet
            </Button>
          </div>
        </div>
      ))}
      <Button variant="outline" className="w-full" onClick={onAdd}>
        <Plus className="mr-2 h-4 w-4" />
        Add Experience
      </Button>
    </div>
  )
}

