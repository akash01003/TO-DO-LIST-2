import React, { useState } from 'react';

const InputArea = ({addItems }) => {
    const [inputArea, setInputArea] = useState("")

    const handleSubmit = (e) => {
        setInputArea(e.target.value)
    } 

    const onButton = () => {
        addItems(inputArea);
        setInputArea("")
    }
  return (
    <div className="form">
        <input type="text" onChange={handleSubmit} value={inputArea}/>
        <button onClick={onButton}>
            <span>Add</span>
        </button>
    </div>
  )
}

export default InputArea;
