//IMPORT - HOOKs
import { useState } from "react"
//IMPORTS - TYPES/DATA
import {
    arcaneElement,
    aquaElement,
    pyroElement,
    herbaElement,
    lightningElement,
    mind,
    shadowElement,
    holyElement,
    conjuring,
    summoning,
} from "../../../types/ElementTypes"

import type { ElementType } from "../../../types/ElementTypes"

//IMPORTS - STYLE
import style from "./ElementsOfMagicGuide.module.css"
import DropDownArrow from "../../../assets/DropDownArrow.svg"

type GuideElement = {
    name: string
    data: ElementType
}

const elements: GuideElement[] = [
    { name: "Arcane", data: arcaneElement },
    { name: "Aqua", data: aquaElement },
    { name: "Pyro", data: pyroElement },
    { name: "Herba", data: herbaElement },
    { name: "Lightning", data: lightningElement },
    { name: "Mind", data: mind },
    { name: "Shadow", data: shadowElement },
    { name: "Holy", data: holyElement },
    { name: "Conjuring", data: conjuring },
    { name: "Summoning", data: summoning },
]

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1)

const ElementsOfMagicGuide = () => {
    const [spellInfo, setSpellInfo] = useState("")

    const displayElementInfo = (value: string) => {
        setSpellInfo((current) => (current === value ? "" : value))
    }

    return (
        <div className={style.elementsOfMagicWrapper}>
            <section className={style.magicOverview}>
                <h1>The Elements of Magic</h1>
                <p>
                    In this realm, a field of magic ebbs and flows around you. You can draw upon this energy from the very atmosphere around you.
                <p/>
                <p>
                    This is called <strong>Arcane Magic</strong>. This is the raw, unfiltered power of this realm. Anyone can use it, but it takes
                    a true mage to fully harness its potential.
                </p>
                </p>
                <p>
                    <strong>Arcane magic</strong> though can be forged and reconstructed into powerful elemental types. A raw element must be taken
                    from the world and infused into an ancient stone tablet with Arcane magic.
                </p>
                <p>
                    For example, should you use a vial of pure lake water with an Arcane Tablet, you'll create an Aqua spell, allowing you to channel
                    the Aqua Element.
                </p>
            </section>
            <h2>The Elements</h2>
            <p>These are the core elements of our world...</p>
            <section className={style.spellDetailsWrapper}>
            {elements.map(({ name, data }) => {
                const hasAffinities = data.strengths !== undefined || data.weakness !== undefined
                return (
                    <div key={name} onClick={() => displayElementInfo(name)} className={style[data.element] || style.default}>
                        <div className={style.elementHeader}>
                            <img src={DropDownArrow} className={style.dropDownArrow}/>
                            <h3>{name}</h3>
                        </div>
                        {spellInfo === name && (
                            <div className={style.spellDetails}>
                                {hasAffinities ? (
                                    <div className={style.affinities}>
                                        <p>Strength: {data.strengths && data.strengths.length > 0 ? data.strengths.map(capitalize).join(", ") : "None"}</p>
                                        <p>Weakness: {data.weakness && data.weakness.length > 0 ? data.weakness.map(capitalize).join(", ") : "None"}</p>
                                    </div>
                                ) : (
                                    <p>Element Type: {capitalize(data.element)}</p>
                                )}
                                <p>"{data.description.trim()}"</p>
                            </div>
                        )}
                    </div>
                )
            })}
            </section>
        </div>
        
    )
}

export default ElementsOfMagicGuide
