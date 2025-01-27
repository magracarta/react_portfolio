import React from 'react';

export default function LoadingAnime() {
  return (
    <div>
        <h1>“HELLO WORLD”</h1>
        <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* 큰 원 */}
            <circle cx="400" cy="400" r="352.5" stroke="var(--titlecolor)" />
            
            {/* 작은 원이 회전하는 경로 */}
            <circle r="5" fill="var(--titlecolor)">
                <animateMotion dur="5s" repeatCount="indefinite">
                    <mpath href="#bigCirclePath"/>
                </animateMotion>
            </circle>

            {/* 큰 원의 경로 정의 (경로는 큰 원을 따라서 회전) */}
            <path id="bigCirclePath" 
                  d="M400,47.5 
                     A352.5,352.5 0 1,1 400,752.5 
                     A352.5,352.5 0 1,1 400,47.5" 
                  fill="transparent" />
        </svg>
    </div>
  );
}
