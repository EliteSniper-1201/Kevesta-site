import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  year: string;
}

const projects: Project[] = [
  {
    title: "Enterprise E-commerce Platform",
    description: "Built a scalable e-commerce platform serving 1M+ users with real-time inventory management",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    year: "2023"
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Developed an AI-driven analytics platform for business intelligence and reporting",
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
    year: "2022"
  },
  {
    title: "Cloud Migration Project",
    description: "Led the successful migration of legacy systems to cloud infrastructure",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
    year: "2021"
  }
];

const TeamExperience = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Experience</h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 transform transition-transform hover:scale-105"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-blue-600">{project.title}</h3>
                <span className="text-gray-500 font-medium">{project.year}</span>
              </div>
              <p className="text-gray-600 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamExperience; 