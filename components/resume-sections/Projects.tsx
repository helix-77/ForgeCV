"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Trash2 } from "lucide-react"

export function Projects({ projects, onChange, onAdd, onRemove }) {
  const handleProjectBulletChange = (projIndex, bulletIndex, value) => {
    const updatedProjects = [...projects]
    const updatedBullets = [...updatedProjects[projIndex].bullets]
    updatedBullets[bulletIndex] = value

    updatedProjects[projIndex] = {
      ...updatedProjects[projIndex],
      bullets: updatedBullets,
    }

    onChange(projIndex, "bullets", updatedBullets)
  }

  const addProjectBullet = (projIndex) => {
    const updatedProjects = [...projects]
    updatedProjects[projIndex] = {
      ...updatedProjects[projIndex],
      bullets: [...updatedProjects[projIndex].bullets, ""],
    }

    onChange(projIndex, "bullets", updatedProjects[projIndex].bullets)
  }

  const removeProjectBullet = (projIndex, bulletIndex) => {
    const updatedProjects = [...projects]
    const updatedBullets = [...updatedProjects[projIndex].bullets]
    updatedBullets.splice(bulletIndex, 1)

    updatedProjects[projIndex] = {
      ...updatedProjects[projIndex],
      bullets: updatedBullets,
    }

    onChange(projIndex, "bullets", updatedBullets)
  }

  return (
    <div className="space-y-6 py-4">
      {projects.map((project, index) => (
        <div key={index} className="space-y-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Project #{index + 1}</h4>
            {projects.length > 1 && (
              <Button variant="ghost" size="sm" onClick={() => onRemove(index)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`project-title-${index}`}>Project Title</Label>
              <Input
                id={`project-title-${index}`}
                value={project.title}
                onChange={(e) => onChange(index, "title", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`project-link-${index}`}>Project Link</Label>
              <Input
                id={`project-link-${index}`}
                value={project.link}
                onChange={(e) => onChange(index, "link", e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`project-start-${index}`}>Start Date</Label>
              <Input
                id={`project-start-${index}`}
                value={project.startDate}
                onChange={(e) => onChange(index, "startDate", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`project-end-${index}`}>End Date</Label>
              <Input
                id={`project-end-${index}`}
                value={project.endDate}
                onChange={(e) => onChange(index, "endDate", e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor={`project-description-${index}`}>Description</Label>
            <Textarea
              id={`project-description-${index}`}
              value={project.description}
              onChange={(e) => onChange(index, "description", e.target.value)}
              rows={2}
            />
          </div>
          <div className="space-y-4">
            <Label>Bullet Points</Label>
            {project.bullets.map((bullet, bulletIndex) => (
              <div key={bulletIndex} className="flex items-center gap-2">
                <Input
                  value={bullet}
                  onChange={(e) => handleProjectBulletChange(index, bulletIndex, e.target.value)}
                  placeholder={`Bullet point ${bulletIndex + 1}`}
                />
                {project.bullets.length > 1 && (
                  <Button variant="ghost" size="sm" onClick={() => removeProjectBullet(index, bulletIndex)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={() => addProjectBullet(index)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Bullet
            </Button>
          </div>
        </div>
      ))}
      <Button variant="outline" className="w-full" onClick={onAdd}>
        <Plus className="mr-2 h-4 w-4" />
        Add Project
      </Button>
    </div>
  )
}

