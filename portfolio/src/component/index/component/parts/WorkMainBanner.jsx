import React, { useEffect } from 'react'
import Graphparts from '../detail/component/Graphparts'
import Skillcionparts from '../detail/component/Skillcionparts'

function WorkMainBanner({workData}) {
  let {category, image, title, content, char, skill } = workData[0];
  useEffect(()=>{
    if(!image) document.querySelector(".mainbanner").classList.add("noimg");
  },[workData]);
  return (
    <div className='mainbanner'>
        <div className='left'>
          {/* 타이틀 */}
          <div className='title'>
            <small>{category}</small>
            <h2>{title}</h2>
            <div className='mobanner mo'>
              {image&&<img src={`/image/workimage/${image}`} alt={`${image}`}/>}
                
            </div>
            <div className='content'>
              <p dangerouslySetInnerHTML={{__html: content}}/>
            </div>
          </div>
          {/* 구현기능 요약 */}
          <div className='function'>
            {char && <span className='name'>특징</span>}
            <ul>
              { char && char.map((el,idx)=>
                 <li key={idx+el}>{el}</li>)}
            </ul>
          </div>
          {/* 구현기능 요약 */}
          <div className='function'>
            {skill&&<span className='name'>SKILL</span>}
            <ul className='skills'>
              {  skill && skill.map((el, idx)=>
                 <Skillcionparts key={idx+el.text} img = {el.img} text={el.text}/>)}
            </ul>
          </div>
          
        </div>
        <div className='right pc'>
            <div>
           {image&& <img src={`/image/workimage/${image}`} alt={`${image}`}/>}
            </div>
        </div>
      </div>
  )
}

export default WorkMainBanner


          
          
          
          