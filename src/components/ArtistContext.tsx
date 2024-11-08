import { ArtistProps } from './Artist';
import {Dispatch, SetStateAction, ReactNode, useState, createContext, useEffect} from "react"


interface ArtistContextType {
    artists: ArtistProps[]
    setArtists: Dispatch<SetStateAction<ArtistProps[]>>
    selectedArtist: ArtistProps | null
    setSelectedArtist: Dispatch<SetStateAction<ArtistProps | null>>
}

interface ArtistProviderProps {
    children: ReactNode
    artists: ArtistProps[]
  }

export const ArtistContext = createContext<ArtistContextType | undefined>(undefined)

export default function ArtistContextProvider ({children, artists: initialArtists}: ArtistProviderProps){
    const [artists, setArtists] = useState<ArtistProps[]>(initialArtists)
    const [selectedArtist, setSelectedArtist] = useState<ArtistProps | null>(null)
    const value = {artists, setArtists, selectedArtist, setSelectedArtist}
    useEffect(() => { setArtists(artists)}, [artists])
    return(
        
        <ArtistContext.Provider value={value}>{children}</ArtistContext.Provider>
    )
}