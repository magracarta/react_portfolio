import React from 'react'
import Section1 from './component/Section1'
import Section2 from './component/Section2'
import Section3 from './component/Section3'
import Section4 from './component/Section4'
import Section5 from './component/Section5'


function MainPage() {

  return (
    <div className='mainPage'>
        {/* 섹션1 */}
        <Section1 />
        {/* 섹션1 */}
        {/* 섹션2 */}
        <Section2 />
        {/* 섹션2 */}
        {/* 섹션3 */}
        <Section3 />
        {/* 섹션3 */}
        {/* 섹션4 */}
        <Section4 />
        {/* 섹션4 */}
        {/* 섹션5 */}
        <Section5/>
        {/* 섹션5 */}
    </div>
  )
}

export default MainPage