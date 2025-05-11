
import React from 'react';

const skillGroups = [
  {
    title: "Languages",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Python"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Adobe XD"]
  },
  {
    title: "Design",
    skills: ["UI/UX", "Responsive Design", "Wireframing", "Prototyping", "Branding"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="bg-white py-24">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">
          I've worked with various technologies and tools throughout my career.
          Here's a comprehensive list of my technical skills.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {skillGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-primary mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
