import { useContext, useEffect, useState } from "react";
import Song, { SongProps } from "./Song";
import { MixtapeContext } from "./MixtapeContext";


const ascending = (a: SongProps, b: SongProps) => {
    return parseInt(a.year, 10) - parseInt(b.year, 10)
  }


const descending = (a: SongProps, b: SongProps) => {
    return parseInt(b.year, 10) - parseInt(a.year, 10)
  }

export default function SongList ({}){
    const context = useContext(MixtapeContext)

    if (!context) throw new Error("Controls must be used within a MixtapeProvider")

    const { genre, sortOrder, songs } = context
    const [filteredSongs, setFilteredSongs] = useState<SongProps[]>(songs)

    useEffect(() => {
        const newArr = [...songs]
        if (genre === "all"){
            setFilteredSongs(
                newArr.sort(sortOrder === "ascending" ? ascending : descending)
            )
        } else {
            setFilteredSongs(
                newArr.filter((song) => song.genre === genre).sort(sortOrder === "ascending" ? ascending : descending)
            )
        }
    }, [genre, sortOrder, songs])

    return (
        <div>
            {filteredSongs.map((song : SongProps) => (<Song {...song} key={song.name}/>))}
        </div>
    )
}