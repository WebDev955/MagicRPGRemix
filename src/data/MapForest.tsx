import forestMapArray from "./MapData";
//import Forest from "../assets/Forest.jpg"

import style from "./MapForest.module.css"


const ForestMap:React.FC = () => {
    const cellEvent = () => {
        alert("This is a cell event")
    }

    return(
        <div className={style.parentDiv}>
            <div className={style.gridDiv}>
                {forestMapArray.map((row)=> 
                    <div className={style.row}>
                        {row.map((cell) =>
                            <div onClick={cellEvent} key={cell.type} className={style.cell}/>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ForestMap