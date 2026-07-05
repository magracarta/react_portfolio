import React from 'react'
import "../css/mainSkills.css"

const skillData = [
  {
    category: 'Backend',
    skills: [
      { name: 'Java',          level: 'main' },
      { name: 'Spring Boot',   level: 'main' },
      { name: 'JSP & Servlet', level: 'main' },
      { name: 'Spring',        level: 'sub'  },
      { name: 'JPA',           level: 'sub'  },
      { name: 'MyBatis',       level: 'sub'  },
      { name: 'Node.js',       level: 'exp'  },
      { name: 'Express',       level: 'exp'  },
      { name: 'AWS',           level: 'exp'  },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML & CSS',  level: 'main' },
      { name: 'JavaScript',  level: 'main' },
      { name: 'jQuery',      level: 'main' },
      { name: 'React',       level: 'sub'  },
      { name: 'Axios',       level: 'sub'  },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'Oracle', level: 'main' },
      { name: 'MySQL',  level: 'sub'  },
    ],
  },
  {
    category: 'Tool',
    skills: [
      { name: 'IntelliJ',      level: 'main' },
      { name: 'Claude',        level: 'main' },
      { name: 'Visual Studio', level: 'sub'  },
      { name: 'Eclipse',       level: 'sub'  },
      { name: 'Figma',         level: 'sub'  },
      { name: 'Photoshop',     level: 'sub'  },
      { name: 'Illustrator',   level: 'sub'  },
    ],
  },
]

export default function Section3Skills() {
  return (
    <div className='sectionSkills' id='skills'>
      <div className='innerContainer skillsInner'>

        <div className='skillsHeader'>
          <small className='skillsLabel'>Skills</small>
          <ul className='skillLegend'>
            <li><span className='dot main'></span>주력</li>
            <li><span className='dot sub'></span>보조</li>
            <li><span className='dot exp'></span>경험</li>
          </ul>
        </div>

        <div className='skillsCard'>
          {skillData.map((group) => (
            <div className='skillGroup' key={group.category}>
              <span className='groupLabel'>{group.category}</span>
              <div className='skillTags'>
                {group.skills.map((skill) => (
                  <span className={`skillTag ${skill.level}`} key={skill.name}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
