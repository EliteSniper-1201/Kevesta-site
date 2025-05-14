import React from 'react';

interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 80 },
      { name: "Kubernetes", level: 75 },
      { name: "CI/CD", level: 85 },
    ],
  },
];

const TeamSkills = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSkills; 