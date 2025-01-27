import React from 'react'
import About from './About'
import Skills from './Skills'
import Historys from './Historys'
import Licence from './Licence'

export default function Right() {
  return (
    <div className='rihgt'>
        <div>
            <About/>
            <Skills/>
            <Historys/>
            <Licence/>
            <div className='gotoWrap'>
              <ul>
                <li><a href=''><img src='/image/gitIcon.png' alt='gitIcon.png'/></a></li>
                <li><a href=''><img src='/image/NotionIcon.png' alt='NotionIcon.png'/></a></li>
                <li><a href=''><img src='/image/blogIcon.png' alt='blogIcon.png'/></a></li>
              </ul>
            </div>
        </div>
    </div>
  )
}
