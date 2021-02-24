import React, { useState, useEffect } from "react"
import randomColor from "randomcolor"
import './App.css';
export default function ColorPick({ colors = [], active, setActive }) {

    return (
        <div style={{textAlign: "center"}}>
            {colors.map((color, i) =>
            (
                <label key={i} style={{ color: color }}>

                    <input type="radio"
                        name="color"
                        value={color}
                        style={{ color: color }}
                        checked={active === color}
                        onChange={() => setActive(color)}
                    />
                    <span style={{ backgroundColor: color }} checked={active === color}></span>
                </label>
            ))}
        </div>
    )
}