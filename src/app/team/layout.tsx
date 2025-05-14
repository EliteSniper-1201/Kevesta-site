import React from 'react';

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="team-page">
      {children}
    </div>
  );
} 