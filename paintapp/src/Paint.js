import React, { useState, useEffect } from "react"
import randomColor from "randomcolor"
import ColorPick from "./ColorPick"

export default function Paint() {    

    const [colors, setColors] = useState([])
    const [active, setActive] = useState(null)


    const Color = () => {
        const color = randomColor().slice(1)

        fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=monochrome`).then(res => res.json())
            .then(res => {
                setColors(res.colors.map(color => color.hex.value))
                setActive(res.colors[0].hex.value)
            })
    }

    useEffect(
        Color, []
    )

    return (
        <div>
            <h1 style={{ color: `${active}` }} >Paint App</h1>
            <div className="color-div" style={{backgroundColor: `${active}`}}></div>
            
            <ColorPick colors={colors} active={active}
              setActive={setActive}
            />
           <hr />
        </div>
    )

}