import { SongProps } from './Song';
import React, {Dispatch, SetStateAction, ReactNode, useState} from "react"


interface MixtapeContextType {
    songs : SongProps[],
    genre : string,
    setGenre: Dispatch<SetStateAction<string>>,
    sortOrder: string,
    setSortOrder: Dispatch<SetStateAction<string>>

}

interface MixtapeProviderProps {
    children: ReactNode;
    songs: SongProps[];
  }

export const MixtapeContext = React.createContext<MixtapeContextType | undefined>(undefined)


export default function MixtapeContextProvider ({children, songs}: MixtapeProviderProps){
    const [genre, setGenre] = useState<string>("all")
    const [sortOrder, setSortOrder] = useState<string>("ascending")

    

    return(
        <MixtapeContext.Provider value={{ songs, genre, setGenre, sortOrder, setSortOrder }}>
            {children}
        </MixtapeContext.Provider>
    )
}