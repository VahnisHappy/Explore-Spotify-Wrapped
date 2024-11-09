import { useContext} from "react"
import { GenreContext } from "./GenreContext"
import Genre from "./Genre"



export default function GenreList() {
    const context = useContext(GenreContext)
    if (!context) throw new Error("Controls must be used within a ArtistProvider")
    
    const {genres} = context
  return (
    <div>
        {genres.map((genre, index) => (<Genre {...genre} key={index}/>))}
    </div>
  )
}
