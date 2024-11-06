import { useContext, ChangeEvent } from "react"
import { MixtapeContext } from './MixtapeContext'


export default function Control ({}){
    const context = useContext(MixtapeContext)
    
    if (!context) throw new Error("Controls must be used within a MixtapeProvider")

    const { genre, sortOrder, setGenre, setSortOrder } = context

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setGenre(e.target.value);
      }

    return(
        <div className="controls">
            <select onChange={(e) => handleChange(e)} value={genre}>
                <option value="all">All</option>
                <option value="electronic">Electronic</option>
                <option value="jazz">Jazz</option>
                <option value="rock">Rock</option>
                <option value="pop">Pop</option>
            </select>

            <button onClick={() => setSortOrder(sortOrder === "ascending" ? "descending" : "ascending")}>
                {sortOrder}
            </button>
        </div>
    )
}