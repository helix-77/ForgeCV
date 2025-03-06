"use client"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { ResumeEditor } from "@/components/resume-editor"
import { ResumePreview } from "@/components/resume-preview"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Download, Eye, FileText } from "lucide-react"

export default function BuilderPage() {
  const searchParams = useSearchParams()
  const templateId = searchParams.get("template") || "harvard"
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: "",
      title: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      github: "",
      website: "",
      photo: "",
    },
    summary: "",
    education: [
      {
        degree: "",
        institution: "",
        location: "",
        startDate: "",
        endDate: "",
        gpa: "",
      },
    ],
    experience: [
      {
        title: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
        bullets: [""],
      },
    ],
    projects: [
      {
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        bullets: [""],
        link: "",
      },
    ],
    skills: {
      technical: [""],
      languages: [""],
      tools: [""],
    },
    certifications: [
      {
        name: "",
        issuer: "",
        date: "",
      },
    ],
    courses: [
      {
        name: "",
        institution: "",
        date: "",
      },
    ],
    awards: [
      {
        name: "",
        issuer: "",
        date: "",
      },
    ],
    interests: [""],
    publications: [
      {
        title: "",
        authors: "",
        journal: "",
        date: "",
        url: "",
      },
    ],
    references: [
      {
        name: "",
        position: "",
        company: "",
        email: "",
        phone: "",
      },
    ],
    declaration: "",
    customFields: [
      {
        label: "",
        value: "",
      },
    ],
  })

  const handleDataChange = (newData) => {
    setResumeData(newData)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              <span className="font-bold text-xl">ForgeCV</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-1">
              <Download className="h-4 w-4" />
              <span>Export PDF</span>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6">
          <Tabs defaultValue="editor" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="editor" className="gap-2">
                <FileText className="h-4 w-4" />
                Editor
              </TabsTrigger>
              <TabsTrigger value="preview" className="gap-2">
                <Eye className="h-4 w-4" />
                Preview
              </TabsTrigger>
            </TabsList>
            <TabsContent value="editor" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ResumeEditor templateId={templateId} resumeData={resumeData} onDataChange={handleDataChange} />
                <div className="hidden md:block">
                  <ResumePreview templateId={templateId} resumeData={resumeData} />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="preview" className="mt-6">
              <ResumePreview templateId={templateId} resumeData={resumeData} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

