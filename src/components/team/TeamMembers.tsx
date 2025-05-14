import React from 'react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: "John Doe",
    role: "Lead Software Engineer",
    bio: "10+ years of experience in full-stack development",
    image: "/team/member1.jpg",
    skills: ["React", "Node.js", "TypeScript", "AWS"]
  },
  // Add more team members here
];

const TeamMembers = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers; 