import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProjectListParts({ item, index, allnum}) {
  let navigate = useNavigate();
  return (
    <li>
        <div className='left'>
            <div>
                <p>PROJECT</p>
                <span>({String(index+1).padStart(2,"0")}/{String(allnum).padStart(2,"0")})</span>
            </div>
        </div>
        <div className='right'>
            <div>
                <div className='text'>
                    <h2>{item.title}</h2>
                    {window.innerWidth >= 1100 ? <pre>{item.content}</pre>:<p>{item.content.replaceAll("\n", "")}</p>}
                    <a href="" onClick={()=>{navigate(item.url)}}>자세히 보기 <img src='/image/moreviewArrow.svg' alt='moreviewArrow.svg' /></a>
                </div>
                <div className='img'>
                    <div>
                        <img src={'/image/'+item.img} alt='rentmon' />
                        <img src={'/image/'+item.img} alt='rentmon' />
                    </div>
                </div>
            </div>
        </div>
    </li>
  )
}

export default ProjectListParts