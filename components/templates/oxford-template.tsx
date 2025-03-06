export function OxfordTemplate({ resumeData, currentPage }) {
  const { personalInfo, summary, education, experience, projects, skills } = resumeData

  return (
    <div className="mx-auto max-w-[800px] space-y-6 font-serif">
      <header className="border-b-2 border-gray-400 pb-4 text-center">
        <h1 className="text-2xl font-bold uppercase tracking-widest">{personalInfo.name || "Your Name"}</h1>
        <div className="mt-2 flex flex-wrap justify-center gap-3 text-sm">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>| {personalInfo.phone}</span>}
          {personalInfo.location && <span>| {personalInfo.location}</span>}
        </div>
        <div className="mt-1 flex flex-wrap justify-center gap-3 text-sm">
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
          {personalInfo.github && <span>| {personalInfo.github}</span>}
          {personalInfo.website && <span>| {personalInfo.website}</span>}
        </div>
      </header>

      {summary && (
        <section>
          <h2 className="mb-2 text-center text-lg font-bold uppercase tracking-wider">Personal Statement</h2>
          <p className="text-justify text-sm leading-relaxed">{summary}</p>
        </section>
      )}

      {education.length > 0 && (
        <section>
          <h2 className="mb-2 text-center text-lg font-bold uppercase tracking-wider">Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <h3 className="font-bold">{edu.institution}</h3>
                  <span className="text-sm">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <p className="text-sm">{edu.degree}</p>
                <div className="flex justify-between">
                  <span className="text-sm">{edu.location}</span>
                  {edu.gpa && <span className="text-sm">GPA: {edu.gpa}</span>}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {experience.length > 0 && (
        <section>
          <h2 className="mb-2 text-center text-lg font-bold uppercase tracking-wider">Professional Experience</h2>
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
                  <p className="italic text-sm">{exp.company}</p>
                  <span className="text-sm">{exp.location}</span>
                </div>
                {exp.description && <p className="mt-1 text-sm text-justify">{exp.description}</p>}
                {exp.bullets.length > 0 && exp.bullets[0] && (
                  <ul className="mt-1 list-inside list-disc text-sm text-justify">
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
          <h2 className="mb-2 text-center text-lg font-bold uppercase tracking-wider">Projects</h2>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <h3 className="font-bold">{project.title}</h3>
                  <span className="text-sm">
                    {project.startDate} - {project.endDate}
                  </span>
                </div>
                {project.description && <p className="mt-1 text-sm text-justify">{project.description}</p>}
                {project.bullets.length > 0 && project.bullets[0] && (
                  <ul className="mt-1 list-inside list-disc text-sm text-justify">
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
          <h2 className="mb-2 text-center text-lg font-bold uppercase tracking-wider">Skills</h2>
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

