import React from 'react'

function DarkmodeButton({darkModeClick, darkmode , sidemenu}) {
  return (
    <div className={sidemenu?'darkmode sideon' : 'darkmode'}>
        <div className='darmode_button' onClick={darkModeClick}>
        <div className={darkmode?"sun":"luna"}>
            {!darkmode?(sidemenu?<img src ="/image/sunWhite.svg" alt='sun'/>:<img src ="/image/sun.svg" alt='sun'/>):<img src ="/image/luna.svg" alt='luna'/>}
        </div>
        </div>
    </div>
  )
}

export default DarkmodeButton