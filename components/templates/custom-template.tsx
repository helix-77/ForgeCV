import Image from "next/image"

export function CustomTemplate({ resumeData, currentPage }) {
  const {
    personalInfo,
    summary,
    education,
    experience,
    projects,
    skills,
    certifications,
    courses,
    awards,
    interests,
    publications,
    references,
    declaration,
    customFields,
  } = resumeData

  return (
    <div className="mx-auto max-w-[800px] space-y-6 font-sans">
      <header className="flex items-start justify-between border-b pb-6">
        <div>
          <h1 className="text-3xl font-bold">{personalInfo.name || "Your Name"}</h1>
          <p className="mt-1 text-lg uppercase tracking-wide">{personalInfo.title || "Professional Title"}</p>
          <div className="mt-2 space-y-1 text-sm">
            {personalInfo.phone && <p>{personalInfo.phone}</p>}
            {personalInfo.email && (
              <p>
                <a href={`mailto:${personalInfo.email}`} className="text-blue-600 hover:underline">
                  {personalInfo.email}
                </a>
              </p>
            )}
            {personalInfo.linkedin && (
              <p>
                <a href={personalInfo.linkedin} className="text-blue-600 hover:underline">
                  LinkedIn
                </a>
              </p>
            )}
            {personalInfo.github && (
              <p>
                <a href={personalInfo.github} className="text-blue-600 hover:underline">
                  GitHub
                </a>
              </p>
            )}
            {personalInfo.location && <p>{personalInfo.location}</p>}
          </div>
        </div>
        <div className="relative h-32 w-32 overflow-hidden rounded-lg border">
          {personalInfo.photo ? (
            <Image
              src={personalInfo.photo || "/placeholder.svg"}
              alt={personalInfo.name || "Profile photo"}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-100">
              <span className="text-gray-400">Photo</span>
            </div>
          )}
        </div>
      </header>

      {summary && (
        <section>
          <h2 className="mb-2 text-xl font-bold uppercase">Summary</h2>
          <p className="text-sm leading-relaxed">{summary}</p>
        </section>
      )}

      {education.length > 0 && (
        <section>
          <h2 className="mb-2 text-xl font-bold uppercase">Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <h3 className="font-bold">{edu.degree}</h3>
                  <span className="text-right text-sm">{edu.location}</span>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm">{edu.institution}</p>
                  <span className="text-right text-sm">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                {edu.gpa && (
                  <p className="text-sm">
                    <span className="text-blue-600">CGPA {edu.gpa}</span>
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {experience.length > 0 && (
        <section>
          <h2 className="mb-2 text-xl font-bold uppercase">Experience</h2>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <h3 className="font-bold">{exp.title}</h3>
                  <span className="text-sm">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm">{exp.company}</p>
                  <span className="text-sm">{exp.location}</span>
                </div>
                {exp.description && <p className="mt-1 text-sm">{exp.description}</p>}
                {exp.bullets.length > 0 && exp.bullets[0] && (
                  <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
                    {exp.bullets.map((bullet, i) => bullet && <li key={i}>{bullet}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {projects.length > 0 && (
        <section>
          <h2 className="mb-2 text-xl font-bold uppercase">Projects</h2>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={index}>
                <h3 className="font-bold">{project.title}</h3>
                {project.description && <p className="mt-1 text-sm">{project.description}</p>}
                {project.bullets.length > 0 && project.bullets[0] && (
                  <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
                    {project.bullets.map((bullet, i) => bullet && <li key={i}>{bullet}</li>)}
                  </ul>
                )}
                {project.link && (
                  <p className="mt-1 text-sm">
                    Here's a quick look at the project:{" "}
                    <a href={project.link} className="text-blue-600 hover:underline">
                      {project.link}
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {(skills.technical.length > 0 || skills.languages.length > 0 || skills.tools.length > 0) && (
        <section>
          <h2 className="mb-2 text-xl font-bold uppercase">Skills</h2>
          <div className="space-y-2 text-sm">
            {skills.technical.length > 0 && skills.technical[0] && (
              <p>
                <span className="font-bold">Technical:</span> {skills.technical.filter(Boolean).join(", ")}
              </p>
            )}
            {skills.languages.length > 0 && skills.languages[0] && (
              <p>
                <span className="font-bold">Languages:</span> {skills.languages.filter(Boolean).join(", ")}
              </p>
            )}
            {skills.tools.length > 0 && skills.tools[0] && (
              <p>
                <span className="font-bold">Tools:</span> {skills.tools.filter(Boolean).join(", ")}
              </p>
            )}
          </div>
        </section>
      )}

      {certifications.length > 0 && (
        <section>
          <h2 className="mb-2 text-xl font-bold uppercase">Certifications</h2>
          <div className="space-y-2">
            {certifications.map((cert, index) => (
              <div key={index}>
                <h3 className="font-bold">{cert.name}</h3>
                <p className="text-sm">
                  {cert.issuer} - {cert.date}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {courses.length > 0 && (
        <section>
          <h2 className="mb-2 text-xl font-bold uppercase">Courses</h2>
          <div className="space-y-2">
            {courses.map((course, index) => (
              <div key={index}>
                <h3 className="font-bold">{course.name}</h3>
                <p className="text-sm">
                  {course.institution} - {course.date}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {awards.length > 0 && (
        <section>
          <h2 className="mb-2 text-xl font-bold uppercase">Awards</h2>
          <div className="space-y-2">
            {awards.map((award, index) => (
              <div key={index}>
                <h3 className="font-bold">{award.name}</h3>
                <p className="text-sm">
                  {award.issuer} - {award.date}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {interests.length > 0 && (
        <section>
          <h2 className="mb-2 text-xl font-bold uppercase">Interests</h2>
          <p className="text-sm">{interests.join(", ")}</p>
        </section>
      )}

      {publications.length > 0 && (
        <section>
          <h2 className="mb-2 text-xl font-bold uppercase">Publications</h2>
          <div className="space-y-2">
            {publications.map((pub, index) => (
              <div key={index}>
                <h3 className="font-bold">{pub.title}</h3>
                <p className="text-sm">{pub.authors}</p>
                <p className="text-sm italic">
                  {pub.journal}, {pub.date}
                </p>
                {pub.url && (
                  <a href={pub.url} className="text-sm text-blue-600 hover:underline">
                    View Publication
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {references.length > 0 && (
        <section>
          <h2 className="mb-2 text-xl font-bold uppercase">References</h2>
          <div className="space-y-4">
            {references.map((ref, index) => (
              <div key={index}>
                <h3 className="font-bold">{ref.name}</h3>
                <p className="text-sm">
                  {ref.position} at {ref.company}
                </p>
                <p className="text-sm">
                  {ref.email} | {ref.phone}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {declaration && (
        <section>
          <h2 className="mb-2 text-xl font-bold uppercase">Declaration</h2>
          <p className="text-sm">{declaration}</p>
        </section>
      )}

      {customFields.length > 0 && (
        <section>
          <h2 className="mb-2 text-xl font-bold uppercase">Additional Information</h2>
          <div className="space-y-2">
            {customFields.map((field, index) => (
              <div key={index}>
                <h3 className="font-bold">{field.label}</h3>
                <p className="text-sm">{field.value}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

