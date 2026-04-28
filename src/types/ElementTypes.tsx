export type ElementType = {
    element: string,
    strengths?: string[],
    weakness?: string[],
    description: string
}

export const arcaneElement:ElementType = {
    element: "arcane",
    strengths: [],
    weakness: [],
    description: "An element that calls on the pure magic that ebbs and flows through out the world. "
}
 

export const aquaElement:ElementType = {
    element: "water",
    strengths: ["fire"],
    weakness: ["herba"],
    description: "An element of pure, pristine water. Often used in healing techniques"
}

export const pyroElement:ElementType = {
    element: "pyro",
    strengths: ["herba"],
    weakness: ["auqa"],
    description: "An element of pure, raw destruction. The strongest fire is said to be from deep within the planet"
}

export const herbaElement:ElementType = {
    element: "herba",
    strengths: ["aqua"],
    weakness: ["pyro"],
    description: "An element that uses the naturlistc power of the most lushest forests."
}

export const lightningElement:ElementType = {
    element: "lightning",
    strengths: ["water"],
    weakness: [],
    description: "An element that uses powerful power that generates from the power of lightning."
}

export const mind:ElementType = {
    element: "mind",
    strengths: ["arcane"],
    weakness: ["shadow"],
    description: "An type of magic that maniplates the mind and body."
}

export const shadowElement:ElementType = {
    element: "shadow",
    strengths: ["holy"],
    weakness: ["holy"],
    description: "A powerful type of magic that summons the power of deamons and darkness of the world.",
}
export const holyElement:ElementType = {
    element: "holy",
    strengths: ["shadow"],
    weakness: ["shadow"],
    description: "A powerful type of magic can calls to the heavens and gods of the world."
}

export const conjuring:ElementType = {
    element: "shadow",
    description: "A type of magic that conjures dark entities, beasts, and all evil in the world. Over reliance may see negative consequences on the user's very soul and mind. Sometimes may require a sacrifice."
}

export const summoning:ElementType = {
    element: "holy",
    description: "A type of magic that summons heavinly assistance, light spirits, and all holy good in the world. Over reliance may see negative consequences with the user being detached from this physical realm. Sometimes may require an offering."
}





