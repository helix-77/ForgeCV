"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { HarvardTemplate } from "@/components/templates/harvard-template"
import { MitTemplate } from "@/components/templates/mit-template"
import { OxfordTemplate } from "@/components/templates/oxford-template"
import { CustomTemplate } from "@/components/templates/custom-template"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function ResumePreview({ templateId, resumeData }) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = calculateTotalPages(resumeData)

  function calculateTotalPages(data) {
    // This is a simplified calculation - in a real app, you'd need to
    // calculate based on content length and template specifics
    const itemCount =
      data.education.length +
      data.experience.length +
      data.projects.length +
      data.certifications.length +
      data.courses.length +
      data.awards.length +
      data.publications.length +
      data.references.length

    return Math.max(1, Math.ceil(itemCount / 5))
  }

  const renderTemplate = () => {
    switch (templateId) {
      case "harvard":
        return <HarvardTemplate resumeData={resumeData} currentPage={currentPage} />
      case "mit":
        return <MitTemplate resumeData={resumeData} currentPage={currentPage} />
      case "oxford":
        return <OxfordTemplate resumeData={resumeData} currentPage={currentPage} />
      case "custom":
        return <CustomTemplate resumeData={resumeData} currentPage={currentPage} />
      default:
        return <HarvardTemplate resumeData={resumeData} currentPage={currentPage} />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Preview</h2>
        {totalPages > 1 && (
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
      <Card className="overflow-hidden rounded-lg border shadow-lg">
        <div className="bg-white p-8 text-black">{renderTemplate()}</div>
      </Card>
    </div>
  )
}

