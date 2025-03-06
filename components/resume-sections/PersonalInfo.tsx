"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function PersonalInfo({ personalInfo, onChange }) {
  return (
    <div className="grid gap-4 py-4 ">
      <div className="grid grid-cols-2 gap-4 ">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" value={personalInfo.name} onChange={(e) => onChange("name", e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="title">Professional Title</Label>
          <Input id="title" value={personalInfo.title} onChange={(e) => onChange("title", e.target.value)} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={personalInfo.email}
            onChange={(e) => onChange("email", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" value={personalInfo.phone} onChange={(e) => onChange("phone", e.target.value)} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" value={personalInfo.location} onChange={(e) => onChange("location", e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="linkedin">LinkedIn</Label>
          <Input id="linkedin" value={personalInfo.linkedin} onChange={(e) => onChange("linkedin", e.target.value)} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="github">GitHub</Label>
          <Input id="github" value={personalInfo.github} onChange={(e) => onChange("github", e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="website">Website</Label>
          <Input id="website" value={personalInfo.website} onChange={(e) => onChange("website", e.target.value)} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="photo">Photo URL</Label>
        <Input
          id="photo"
          value={personalInfo.photo}
          onChange={(e) => onChange("photo", e.target.value)}
          placeholder="https://example.com/your-photo.jpg"
        />
      </div>
    </div>
  )
}

