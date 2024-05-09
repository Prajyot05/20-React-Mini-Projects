import React, { useState } from 'react'
import "./tabs.css"

function Tabs({tabsContent, onChange}) {
    const [currTabIdx, setCurrTabIdx] = useState(0);

    function handleOnClick(getCurrIdx){
        setCurrTabIdx(getCurrIdx);
        onChange(getCurrIdx);
    }
  return (
    <div className='wrapper'>
        <div className="heading">
        {
            tabsContent.map((tabItem, index) => (
            <div
                className={`tab-item ${currTabIdx === index ? "active" : ""}`}
                onClick={() => handleOnClick(index)}
                key={tabItem.label}
            >
                <span className="label">{tabItem.label}</span>
            </div>
            ))
        }
        </div>
        <div className="content" style={{ color: "red" }}>
            {tabsContent[currTabIdx] && tabsContent[currTabIdx].content}
        </div>
    </div>
  )
}

export default Tabs