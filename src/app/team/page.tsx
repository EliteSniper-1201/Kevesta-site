import React from 'react';
import TeamHero from '../../components/team/TeamHero';
import TeamMembers from '../../components/team/TeamMembers';
import TeamSkills from '../../components/team/TeamSkills';
import TeamExperience from '../../components/team/TeamExperience';

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      <TeamHero />
      <TeamMembers />
      <TeamSkills />
      <TeamExperience />
    </main>
  );
} 