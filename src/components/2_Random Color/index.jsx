import React, { useEffect, useState } from 'react'

function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState('#000000')

    function randomColorUtility(length){
        return Math.floor(Math.random() * length)
    }

    function handleCreateRandomHEXColor(){
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
        let hexColor = "#"
        for(let i = 0; i < 6; i++){
            hexColor += hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor)
    }

    function handleCreateRandomRGBColor(){
        const r = randomColorUtility(256)
        const g = randomColorUtility(256)
        const b = randomColorUtility(256)
        setColor(`rgb(${r},${g},${b})`)
    }

    useEffect(() => {
        if(typeOfColor === 'rgb') handleCreateRandomRGBColor()
        else handleCreateRandomHEXColor()
    }, [typeOfColor])

  return (
    <div style={{
        width: '100vw',
        height: '50vh',
        backgroundColor: color,
        paddingTop: '5vw'
    }}>
        <button style={{marginLeft: '30vw'}} onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
        <button style={{margin: '20px'}} onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button onClick={typeOfColor === 'hex' ? handleCreateRandomHEXColor : handleCreateRandomRGBColor}>Generate Random Color</button>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '30px',
            marginTop: '50px'
        }}>
            <h1 style={{marginRight: '30px', overflow: 'hidden'}}>{typeOfColor === 'rgb' ? 'RGB Color: ' : 'HEX Color: '}</h1>
            <h1 style={{overflow: 'hidden'}}>{color}</h1>
        </div>
    </div>
  )
}

export default RandomColor