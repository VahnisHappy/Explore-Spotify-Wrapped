import {Dispatch, SetStateAction, ReactNode, useState, createContext, useEffect} from "react"
import { GenreProps } from './Genre';

interface GenreContexType {
    genres: GenreProps[]
    setGenres: Dispatch<SetStateAction<GenreProps[]>>
    selectGenre: GenreProps | null
    setSelectGenre: Dispatch<SetStateAction<GenreProps | null>>
}

interface GenreProviderProps{
    children: ReactNode
    genres: GenreProps[]
}

export const GenreContext = createContext<GenreContexType | undefined>(undefined)

export default function GenreContextProvider ({children, genres: initialGenres}: GenreProviderProps){
    const [genres, setGenres] = useState<GenreProps[]>(initialGenres)
    const [selectGenre, setSelectGenre] = useState<GenreProps | null>(null)
    const value = {genres, setGenres, selectGenre, setSelectGenre}
    useEffect(() => { setGenres(genres)}, [genres])
    return(
        <GenreContext.Provider value={value}>{children}</GenreContext.Provider>
    )
}