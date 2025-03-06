"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PersonalInfo } from "./resume-sections/PersonalInfo"
import { Summary } from "./resume-sections/Summary"
import { Education } from "./resume-sections/Education"
import { Experience } from "./resume-sections/Experience"
import { Projects } from "./resume-sections/Projects"
import { Skills } from "./resume-sections/Skills"
import { Certifications } from "./resume-sections/Certifications"
import { Courses } from "./resume-sections/Courses"
import { Awards } from "./resume-sections/Awards"
import { Interests } from "./resume-sections/Interests"
import { Publications } from "./resume-sections/Publications"
import { References } from "./resume-sections/References"
import { Declaration } from "./resume-sections/Declaration"
import { CustomFields } from "./resume-sections/CustomFields"

export function ResumeEditor({ templateId, resumeData, onDataChange }) {
  const handlePersonalInfoChange = (field, value) => {
    const updatedData = {
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [field]: value,
      },
    }
    onDataChange(updatedData)
  }

  const handleSummaryChange = (value) => {
    const updatedData = {
      ...resumeData,
      summary: value,
    }
    onDataChange(updatedData)
  }

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...resumeData.education]
    updatedEducation[index] = {
      ...updatedEducation[index],
      [field]: value,
    }

    const updatedData = {
      ...resumeData,
      education: updatedEducation,
    }
    onDataChange(updatedData)
  }

  const addEducation = () => {
    const updatedData = {
      ...resumeData,
      education: [
        ...resumeData.education,
        {
          degree: "",
          institution: "",
          location: "",
          startDate: "",
          endDate: "",
          gpa: "",
        },
      ],
    }
    onDataChange(updatedData)
  }

  const removeEducation = (index) => {
    const updatedEducation = [...resumeData.education]
    updatedEducation.splice(index, 1)

    const updatedData = {
      ...resumeData,
      education: updatedEducation,
    }
    onDataChange(updatedData)
  }

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...resumeData.experience]
    updatedExperience[index] = {
      ...updatedExperience[index],
      [field]: value,
    }

    const updatedData = {
      ...resumeData,
      experience: updatedExperience,
    }
    onDataChange(updatedData)
  }

  const addExperience = () => {
    const updatedData = {
      ...resumeData,
      experience: [
        ...resumeData.experience,
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
    }
    onDataChange(updatedData)
  }

  const removeExperience = (index) => {
    const updatedExperience = [...resumeData.experience]
    updatedExperience.splice(index, 1)

    const updatedData = {
      ...resumeData,
      experience: updatedExperience,
    }
    onDataChange(updatedData)
  }

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...resumeData.projects]
    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value,
    }

    const updatedData = {
      ...resumeData,
      projects: updatedProjects,
    }
    onDataChange(updatedData)
  }

  const addProject = () => {
    const updatedData = {
      ...resumeData,
      projects: [
        ...resumeData.projects,
        {
          title: "",
          description: "",
          startDate: "",
          endDate: "",
          bullets: [""],
          link: "",
        },
      ],
    }
    onDataChange(updatedData)
  }

  const removeProject = (index) => {
    const updatedProjects = [...resumeData.projects]
    updatedProjects.splice(index, 1)

    const updatedData = {
      ...resumeData,
      projects: updatedProjects,
    }
    onDataChange(updatedData)
  }

  const handleSkillChange = (category, index, value) => {
    const updatedSkills = { ...resumeData.skills }
    updatedSkills[category][index] = value

    const updatedData = {
      ...resumeData,
      skills: updatedSkills,
    }
    onDataChange(updatedData)
  }

  const addSkill = (category) => {
    const updatedSkills = { ...resumeData.skills }
    updatedSkills[category] = [...updatedSkills[category], ""]

    const updatedData = {
      ...resumeData,
      skills: updatedSkills,
    }
    onDataChange(updatedData)
  }

  const removeSkill = (category, index) => {
    const updatedSkills = { ...resumeData.skills }
    updatedSkills[category].splice(index, 1)

    const updatedData = {
      ...resumeData,
      skills: updatedSkills,
    }
    onDataChange(updatedData)
  }

  const handleCertificationChange = (index, field, value) => {
    const updatedCertifications = [...resumeData.certifications]
    updatedCertifications[index] = {
      ...updatedCertifications[index],
      [field]: value,
    }

    const updatedData = {
      ...resumeData,
      certifications: updatedCertifications,
    }
    onDataChange(updatedData)
  }

  const addCertification = () => {
    const updatedData = {
      ...resumeData,
      certifications: [
        ...resumeData.certifications,
        {
          name: "",
          issuer: "",
          date: "",
        },
      ],
    }
    onDataChange(updatedData)
  }

  const removeCertification = (index) => {
    const updatedCertifications = [...resumeData.certifications]
    updatedCertifications.splice(index, 1)

    const updatedData = {
      ...resumeData,
      certifications: updatedCertifications,
    }
    onDataChange(updatedData)
  }

  const handleCourseChange = (index, field, value) => {
    const updatedCourses = [...resumeData.courses]
    updatedCourses[index] = {
      ...updatedCourses[index],
      [field]: value,
    }

    const updatedData = {
      ...resumeData,
      courses: updatedCourses,
    }
    onDataChange(updatedData)
  }

  const addCourse = () => {
    const updatedData = {
      ...resumeData,
      courses: [
        ...resumeData.courses,
        {
          name: "",
          institution: "",
          date: "",
        },
      ],
    }
    onDataChange(updatedData)
  }

  const removeCourse = (index) => {
    const updatedCourses = [...resumeData.courses]
    updatedCourses.splice(index, 1)

    const updatedData = {
      ...resumeData,
      courses: updatedCourses,
    }
    onDataChange(updatedData)
  }

  const handleAwardChange = (index, field, value) => {
    const updatedAwards = [...resumeData.awards]
    updatedAwards[index] = {
      ...updatedAwards[index],
      [field]: value,
    }

    const updatedData = {
      ...resumeData,
      awards: updatedAwards,
    }
    onDataChange(updatedData)
  }

  const addAward = () => {
    const updatedData = {
      ...resumeData,
      awards: [
        ...resumeData.awards,
        {
          name: "",
          issuer: "",
          date: "",
        },
      ],
    }
    onDataChange(updatedData)
  }

  const removeAward = (index) => {
    const updatedAwards = [...resumeData.awards]
    updatedAwards.splice(index, 1)

    const updatedData = {
      ...resumeData,
      awards: updatedAwards,
    }
    onDataChange(updatedData)
  }

  const handleInterestChange = (index, value) => {
    const updatedInterests = [...resumeData.interests]
    updatedInterests[index] = value

    const updatedData = {
      ...resumeData,
      interests: updatedInterests,
    }
    onDataChange(updatedData)
  }

  const addInterest = () => {
    const updatedData = {
      ...resumeData,
      interests: [...resumeData.interests, ""],
    }
    onDataChange(updatedData)
  }

  const removeInterest = (index) => {
    const updatedInterests = [...resumeData.interests]
    updatedInterests.splice(index, 1)

    const updatedData = {
      ...resumeData,
      interests: updatedInterests,
    }
    onDataChange(updatedData)
  }

  const handlePublicationChange = (index, field, value) => {
    const updatedPublications = [...resumeData.publications]
    updatedPublications[index] = {
      ...updatedPublications[index],
      [field]: value,
    }

    const updatedData = {
      ...resumeData,
      publications: updatedPublications,
    }
    onDataChange(updatedData)
  }

  const addPublication = () => {
    const updatedData = {
      ...resumeData,
      publications: [
        ...resumeData.publications,
        {
          title: "",
          authors: "",
          journal: "",
          date: "",
          url: "",
        },
      ],
    }
    onDataChange(updatedData)
  }

  const removePublication = (index) => {
    const updatedPublications = [...resumeData.publications]
    updatedPublications.splice(index, 1)

    const updatedData = {
      ...resumeData,
      publications: updatedPublications,
    }
    onDataChange(updatedData)
  }

  const handleReferenceChange = (index, field, value) => {
    const updatedReferences = [...resumeData.references]
    updatedReferences[index] = {
      ...updatedReferences[index],
      [field]: value,
    }

    const updatedData = {
      ...resumeData,
      references: updatedReferences,
    }
    onDataChange(updatedData)
  }

  const addReference = () => {
    const updatedData = {
      ...resumeData,
      references: [
        ...resumeData.references,
        {
          name: "",
          position: "",
          company: "",
          email: "",
          phone: "",
        },
      ],
    }
    onDataChange(updatedData)
  }

  const removeReference = (index) => {
    const updatedReferences = [...resumeData.references]
    updatedReferences.splice(index, 1)

    const updatedData = {
      ...resumeData,
      references: updatedReferences,
    }
    onDataChange(updatedData)
  }

  const handleDeclarationChange = (value) => {
    const updatedData = {
      ...resumeData,
      declaration: value,
    }
    onDataChange(updatedData)
  }

  const handleCustomFieldChange = (index, field, value) => {
    const updatedCustomFields = [...resumeData.customFields]
    updatedCustomFields[index] = {
      ...updatedCustomFields[index],
      [field]: value,
    }

    const updatedData = {
      ...resumeData,
      customFields: updatedCustomFields,
    }
    onDataChange(updatedData)
  }

  const addCustomField = () => {
    const updatedData = {
      ...resumeData,
      customFields: [
        ...resumeData.customFields,
        {
          label: "",
          value: "",
        },
      ],
    }
    onDataChange(updatedData)
  }

  const removeCustomField = (index) => {
    const updatedCustomFields = [...resumeData.customFields]
    updatedCustomFields.splice(index, 1)

    const updatedData = {
      ...resumeData,
      customFields: updatedCustomFields,
    }
    onDataChange(updatedData)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <Accordion type="single" collapsible defaultValue="personal-info">
            <AccordionItem value="personal-info">
              <AccordionTrigger>Personal Information</AccordionTrigger>
              <AccordionContent>
                <PersonalInfo personalInfo={resumeData.personalInfo} onChange={handlePersonalInfoChange} />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="summary">
              <AccordionTrigger>Professional Summary</AccordionTrigger>
              <AccordionContent>
                <Summary summary={resumeData.summary} onChange={handleSummaryChange} />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="education">
              <AccordionTrigger>Education</AccordionTrigger>
              <AccordionContent>
                <Education
                  education={resumeData.education}
                  onChange={handleEducationChange}
                  onAdd={addEducation}
                  onRemove={removeEducation}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="experience">
              <AccordionTrigger>Work Experience</AccordionTrigger>
              <AccordionContent>
                <Experience
                  experience={resumeData.experience}
                  onChange={handleExperienceChange}
                  onAdd={addExperience}
                  onRemove={removeExperience}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="projects">
              <AccordionTrigger>Projects</AccordionTrigger>
              <AccordionContent>
                <Projects
                  projects={resumeData.projects}
                  onChange={handleProjectChange}
                  onAdd={addProject}
                  onRemove={removeProject}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="skills">
              <AccordionTrigger>Skills</AccordionTrigger>
              <AccordionContent>
                <Skills
                  skills={resumeData.skills}
                  onChange={handleSkillChange}
                  onAdd={addSkill}
                  onRemove={removeSkill}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="certifications">
              <AccordionTrigger>Certifications</AccordionTrigger>
              <AccordionContent>
                <Certifications
                  certifications={resumeData.certifications}
                  onChange={handleCertificationChange}
                  onAdd={addCertification}
                  onRemove={removeCertification}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="courses">
              <AccordionTrigger>Courses</AccordionTrigger>
              <AccordionContent>
                <Courses
                  courses={resumeData.courses}
                  onChange={handleCourseChange}
                  onAdd={addCourse}
                  onRemove={removeCourse}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="awards">
              <AccordionTrigger>Awards</AccordionTrigger>
              <AccordionContent>
                <Awards
                  awards={resumeData.awards}
                  onChange={handleAwardChange}
                  onAdd={addAward}
                  onRemove={removeAward}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="interests">
              <AccordionTrigger>Interests</AccordionTrigger>
              <AccordionContent>
                <Interests
                  interests={resumeData.interests}
                  onChange={handleInterestChange}
                  onAdd={addInterest}
                  onRemove={removeInterest}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="publications">
              <AccordionTrigger>Publications</AccordionTrigger>
              <AccordionContent>
                <Publications
                  publications={resumeData.publications}
                  onChange={handlePublicationChange}
                  onAdd={addPublication}
                  onRemove={removePublication}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="references">
              <AccordionTrigger>References</AccordionTrigger>
              <AccordionContent>
                <References
                  references={resumeData.references}
                  onChange={handleReferenceChange}
                  onAdd={addReference}
                  onRemove={removeReference}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="declaration">
              <AccordionTrigger>Declaration</AccordionTrigger>
              <AccordionContent>
                <Declaration declaration={resumeData.declaration} onChange={handleDeclarationChange} />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="custom-fields">
              <AccordionTrigger>Custom Fields</AccordionTrigger>
              <AccordionContent>
                <CustomFields
                  customFields={resumeData.customFields}
                  onChange={handleCustomFieldChange}
                  onAdd={addCustomField}
                  onRemove={removeCustomField}
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}

