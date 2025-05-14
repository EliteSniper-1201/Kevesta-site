import Image from "next/image";
import { TeamMember } from "@/types/team"; // You should move the TeamMember interface to your types

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
      <div className="relative h-64 w-full">
        {member.image && (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
          />
        )}
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
  );
};

export default TeamMemberCard;