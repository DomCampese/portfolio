import { Header } from '@components/reusable';
import './skills-styles.css';
import { skills } from '@content';

const Skills = () => {
  return (
    <div className='content skills-section'>
      <Header>Skills</Header>
      <div className='skill-cards'>
        {skills.map(({ Logo, name }, index) => (
          <div className='skill-card' key={index}>
            <Logo />
            <p className='skill-card-text'>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
