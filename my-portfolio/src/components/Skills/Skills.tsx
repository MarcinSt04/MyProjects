import * as React from 'react';
import './Skills.scss';
import skills from '../../config/skills';
import SkillBar from './subcomponents/SkillBar';

const Skills: React.FC = () => {
  const index = Math.ceil(skills.length / 2);

  const firstHalfOfSkills = skills.slice(0, index);
  const secondHalfOfSkills = skills.slice(-index);

  return (
    <section className='skills'>
      <div className='title'>
        <h3>Umiejętności</h3>
        <div className='underline'></div>
      </div>
      <div className='content'>
        <div className='column'>
          {firstHalfOfSkills.map(skill => (
            <SkillBar
              technology={skill.technology}
              skillLevel={skill.skillLevel}
            />
          ))}
        </div>
        <div className='column'>
          {secondHalfOfSkills.map(skill => (
            <SkillBar
              technology={skill.technology}
              skillLevel={skill.skillLevel}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
