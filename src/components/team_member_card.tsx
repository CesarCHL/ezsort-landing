import React from 'react';

interface TeamMember {
  name: string;
  position: string;
  message: string;
  image: string;
}

interface MemberCardProps {
  member: TeamMember;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20 shadow-2xl">
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-[#fe661b] rounded-full transform rotate-3"></div>
          <img
            src={member.image}
            alt={member.name}
            className="relative w-32 h-32 lg:w-40 lg:h-40 object-cover rounded-full shadow-2xl"
          />
        </div>
        
        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
          {member.name}
        </h3>
        
        <div className="inline-block bg-[#fe661b] text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-6">
          {member.position}
        </div>
        
        <blockquote className="text-lg text-gray-200 italic leading-relaxed mb-6 max-w-md">
          "{member.message}"
        </blockquote>
        
        <div className="flex justify-center">
          <div className="w-16 h-1 bg-[#fe661b] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
