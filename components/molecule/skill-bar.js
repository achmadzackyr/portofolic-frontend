import React from 'react';

export default function SkillBar({ skillProf, skillBar }) {
  return (
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${skillProf * 10}%`, backgroundColor: skillBar.color }}
        aria-valuenow={skillProf}
        aria-valuemin="0"
        aria-valuemax="10"
      >
        {skillProf}
      </div>
    </div>
  );
}
