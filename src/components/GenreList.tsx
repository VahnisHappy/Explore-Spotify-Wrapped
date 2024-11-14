import { useContext} from "react"
import { GenreContext } from "./GenreContext"
import Genre from "./Genre"

const genreColors: Record<string, string> = {
  "POV Indie": "bg-[#0d7503]",
  "Rock": "bg-[#00509d]",
  "Bedroom Pop": "bg-[#ec839e]",
  "Indie Pop": "bg-[#70960c]",
  "Modern Rock": "bg-[#975935]",
  "Classic Rock": "bg-[#3a0057]",
  "Indie Surf": "bg-[#ff930f]",
  "Indie Garage Rock": "bg-[#be2818]",
  "Permanet Wave": "bg-[#003561]",
  "Single-Songwriter": "bg-[#fdc500]"
}


export default function GenreList() {
    const context = useContext(GenreContext)
    if (!context) throw new Error("Controls must be used within GenreProvider")
    
    const {genres} = context
  return (
    <div>
        {genres.map((genre, index) => (<Genre {...genre} key={index} style={genreColors[genre.genres]} />))}
    </div>
  )
}
