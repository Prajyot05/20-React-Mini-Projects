import React, { useState } from 'react'
import data from './data'
import "./styles.css"

function Accordion() {
    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])

    function handleSelection(getCurrentId){
        if (enableMultiSelection){
            let cpyMultiple = [...multiple]
            const fintIndexOfCurrentID = cpyMultiple.indexOf(getCurrentId)
            if(fintIndexOfCurrentID === -1) cpyMultiple.push(getCurrentId)
            else cpyMultiple.splice(fintIndexOfCurrentID, 1)
            setMultiple(cpyMultiple)
        }
        else setSelected(getCurrentId === selected ? null : getCurrentId)
    }

  return (
    <div className='acc-wrapper'>
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>{enableMultiSelection ? "Disable Multi Selection" : "Enable Multi Selection"}</button>
        <div className="accordian">
            {
                data && data.length > 0 ? 
                data.map((dataItem) => (
                    <div className="item">
                        <div onClick={() => handleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                            {
                                selected === dataItem.id || multiple.indexOf(dataItem.id) != -1 ? 
                                <div className='acc-content'>
                                    {dataItem.answer}
                                </div> : null
                            }
                        </div>
                    </div>
                )) : <div>No data found</div>
            }
        </div>
    </div>
  )
}

export default Accordion