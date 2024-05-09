import React, { useState } from 'react'
import Modal from './modal';
import "./modal.css"

function ModalTest() {
    const [showModalPopup, setShowModalPopup] = useState(false);
    function handleToggleModalPopup(){
        setShowModalPopup(!showModalPopup)
    }
    function onClose(){
        setShowModalPopup(false)
    } 
  return (
    <div className='open-Modal-container'>
        <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
        {
            showModalPopup && <Modal onClose={onClose} body={'Customized Body'}/>
        }
    </div>
  )
}

export default ModalTest