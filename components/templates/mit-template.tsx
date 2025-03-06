export function MitTemplate({ resumeData, currentPage }) {
  const { personalInfo, summary, education, experience, projects, skills } = resumeData

  return (
    <div className="mx-auto max-w-[800px] space-y-6 font-sans">
      <header className="border-b-2 border-gray-800 pb-4">
        <h1 className="text-2xl font-bold">{personalInfo.name || "Your Name"}</h1>
        <p className="text-lg text-gray-600">{personalInfo.title || "Professional Title"}</p>
        <div className="mt-2 flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-1">{personalInfo.email && <span>{personalInfo.email}</span>}</div>
          <div className="flex items-center gap-1">{personalInfo.phone && <span>{personalInfo.phone}</span>}</div>
          <div className="flex items-center gap-1">{personalInfo.location && <span>{personalInfo.location}</span>}</div>
          <div className="flex items-center gap-1">{personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}</div>
          <div className="flex items-center gap-1">{personalInfo.github && <span>{personalInfo.github}</span>}</div>
        </div>
      </header>

      {summary && (
        <section>
          <h2 className="mb-2 border-b border-gray-300 text-lg font-bold">OBJECTIVE</h2>
          <p className="text-sm">{summary}</p>
        </section>
      )}

      {education.length > 0 && (
        <section>
          <h2 className="mb-2 border-b border-gray-300 text-lg font-bold">EDUCATION</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <h3 className="font-bold">{edu.institution}</h3>
                  <span className="text-sm">{edu.location}</span>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm">{edu.degree}</p>
                  <span className="text-sm">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                {edu.gpa && <p className="text-sm">GPA: {edu.gpa}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {experience.length > 0 && (
        <section>
          <h2 className="mb-2 border-b border-gray-300 text-lg font-bold">EXPERIENCE</h2>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <h3 className="font-bold">{exp.company}</h3>
                  <span className="text-sm">{exp.location}</span>
                </div>
                <div className="flex justify-between">
                  <p className="italic text-sm">{exp.title}</p>
                  <span className="text-sm">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                {exp.description && <p className="mt-1 text-sm">{exp.description}</p>}
                {exp.bullets.length > 0 && exp.bullets[0] && (
                  <ul className="mt-1 list-inside list-disc text-sm">
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
          <h2 className="mb-2 border-b border-gray-300 text-lg font-bold">PROJECTS</h2>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <h3 className="font-bold">{project.title}</h3>
                  <span className="text-sm">
                    {project.startDate} - {project.endDate}
                  </span>
                </div>
                {project.description && <p className="mt-1 text-sm">{project.description}</p>}
                {project.bullets.length > 0 && project.bullets[0] && (
                  <ul className="mt-1 list-inside list-disc text-sm">
                    {project.bullets.map((bullet, i) => bullet && <li key={i}>{bullet}</li>)}
                  </ul>
                )}
                {project.link && (
                  <p className="mt-1 text-sm">
                    <span className="font-bold">Link:</span> {project.link}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {(skills.technical.length > 0 || skills.languages.length > 0 || skills.tools.length > 0) && (
        <section>
          <h2 className="mb-2 border-b border-gray-300 text-lg font-bold">SKILLS</h2>
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
    </div>
  )
}

