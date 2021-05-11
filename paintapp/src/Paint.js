import React, { useState, useEffect, useRef } from "react"
import randomColor from "randomcolor"
import ColorPick from "./ColorPick"
import Area from "./PaintArea"
export default function Paint() {

    const [colors, setColors] = useState([])
    const [active, setActive] = useState(null)
    const [val, setVal] = useState(true)

    const Color = () => {
        const color = randomColor().slice(1)

        fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=monochrome`).then(res => res.json())
            .then(res => {
                setColors(res.colors.map(color => color.hex.value))
                setActive(res.colors[0].hex.value)
            })
    }
    /*Whenever the user hits the button 'change the color' shades of different color are shown*/
    useEffect(
        Color, [val]
    )

    const valRef = useRef({height : 0})

    return (
        <div>
            <header ref={valRef}>
            <h1 style={{ color: `${active}` }} >Paint App</h1>
            <br/>
            <div className="color-div" style={{ backgroundColor: `${active}` }}></div>

            {/* ColorPick is the function as the name suggest is the palette to pick the color*/}
            <ColorPick colors={colors} active={active}
                setActive={setActive}
            />
            <button onClick={() => setVal(!val)}>change the color</button>
            <hr />
            </header>
            <Area height={window.innerHeight-valRef.current.height}/>
        </div>
    )



}