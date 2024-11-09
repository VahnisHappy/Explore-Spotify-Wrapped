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

    const { songs } = context

    return (
        <div>
            {songs.map((song: SongProps) => ( <Song {...song} key={song.name} />))}
        </div>
    )
}