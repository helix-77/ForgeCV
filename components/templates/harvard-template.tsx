export function HarvardTemplate({ resumeData, currentPage }) {
  const { personalInfo, summary, education, experience, projects, skills } = resumeData

  return (
    <div className="mx-auto max-w-[800px] space-y-6 font-serif">
      <header className="border-b border-gray-300 pb-4 text-center">
        <h1 className="text-2xl font-bold uppercase tracking-wider">{personalInfo.name || "Your Name"}</h1>
        <div className="mt-2 flex flex-wrap justify-center gap-3 text-sm">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo.location && <span>• {personalInfo.location}</span>}
          {personalInfo.linkedin && <span>• {personalInfo.linkedin}</span>}
        </div>
      </header>

      {summary && (
        <section>
          <h2 className="mb-2 text-lg font-bold uppercase">Summary</h2>
          <p className="text-sm">{summary}</p>
        </section>
      )}

      {education.length > 0 && (
        <section>
          <h2 className="mb-2 text-lg font-bold uppercase">Education</h2>
          <div className="space-y-3">
            {education.map((edu, index) => (
              <div key={index} className="flex justify-between">
                <div>
                  <h3 className="font-bold">{edu.institution}</h3>
                  <p className="text-sm">{edu.degree}</p>
                </div>
                <div className="text-right text-sm">
                  <p>{edu.location}</p>
                  <p>
                    {edu.startDate} - {edu.endDate}
                  </p>
                  {edu.gpa && <p>GPA: {edu.gpa}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {experience.length > 0 && (
        <section>
          <h2 className="mb-2 text-lg font-bold uppercase">Experience</h2>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <h3 className="font-bold">{exp.company}</h3>
                  <span className="text-sm">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <div className="flex justify-between">
                  <p className="italic text-sm">{exp.title}</p>
                  <span className="text-sm">{exp.location}</span>
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
          <h2 className="mb-2 text-lg font-bold uppercase">Projects</h2>
          <div className="space-y-3">
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
                {project.link && <p className="mt-1 text-sm italic">Link: {project.link}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {(skills.technical.length > 0 || skills.languages.length > 0 || skills.tools.length > 0) && (
        <section>
          <h2 className="mb-2 text-lg font-bold uppercase">Skills</h2>
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

