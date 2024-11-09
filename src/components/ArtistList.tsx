import { useContext, useEffect, useState } from "react"
import { ArtistContext } from "./ArtistContext"
import Artist from "./Artist"


export default function ArtistList() {
  const context = useContext(ArtistContext)
  if (!context) throw new Error("Controls must be used within a ArtistProvider")
  const {artists} = context
  return (
    <div>
        {artists.map((artist, index) => (<Artist {...artist} key={index}/>))}
    </div>
  )
}
