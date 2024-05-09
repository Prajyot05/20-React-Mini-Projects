import React from 'react'
import Tabs from './tabs'
import "./tabs.css"

function RandomComponent(){
    return <h1>Some random Content</h1>
}

function TabTest() {
    const tabs = [
        {
            label: 'Tab 1',
            content: <div>This is the content for tab 1</div>
        },
        {
            label: 'Tab 2',
            content: <RandomComponent />
        },
        {
            label: 'Tab 3',
            content: <h1>This is the content for tab 3</h1>
        },
    ]

    function handleChange(currTabIdx){
        console.log(currTabIdx);
    }
  return <Tabs tabsContent={tabs} onChange={handleChange}/>
}

export default TabTest