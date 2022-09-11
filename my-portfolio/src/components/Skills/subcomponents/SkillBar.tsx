import * as React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
interface SkillsProps {
  technology: string;
  skillLevel: number;
}

const SkillBar: React.FC<SkillsProps> = ({ technology, skillLevel }) => {
  return (
    <div className='skill' key={technology}>
      <div className='skill-info'>
        <span>{technology}</span>
        <span>{skillLevel}%</span>
      </div>
      <ProgressBar
        completed={skillLevel}
        isLabelVisible={false}
        animateOnRender={true}
        bgColor={'rgb(10, 10, 95)'}
      />
    </div>
  );
};

export default SkillBar;
