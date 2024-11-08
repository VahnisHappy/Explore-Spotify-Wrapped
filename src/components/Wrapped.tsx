import Control from "./Control"
import MixtapeContextProvider from "./MixtapeContext"
import ArtistContextProvider from "./ArtistContext"
import SongList from "./SongList"
import { SongProps } from "./Song"
import Header from "./Header"
import { ArtistProps } from "./Artist"
import ArtistList from "./ArtistList"
import { useState } from "react"

const songs: SongProps[] = [
    {
      artist: "The Beatles",
      genre: "pop",
      name: "Here Comes The Sun",
      year: "1969",
    },
    {
      artist: "Laufey",
      genre: "jazz",
      name: "From The Star",
      year: "2023",
    },
    {
      artist: "TV Girl",
      genre: "electronic",
      name: "Lover Rock",
      year: "2014",
    },
    {
      artist: "Rick Astley",
      genre: "rock",
      name: "Never Gonna Give You Up",
      year: "1987",
    },
    {
      artist: "Bring Me The Horizon",
      genre: "rock",
      name: "Drown",
      year: "2018",
    },
  ]

  const artists = [
    { artists: "Artist 1" },
    { artists: "Artist 2" },
    { artists: "Artist 3" }
]

export default function Wrapped () {
    const [selectedOption, setSelectedOption] = useState<string>('tracks')
    const handleControlChange = (e: React.ChangeEvent<HTMLSelectElement>) => {setSelectedOption(e.target.value)}

    return(
        <ArtistContextProvider artists={artists}>
            <MixtapeContextProvider songs={songs}>
                <div className="p-5 bg-gray-50 min-h-screen flex flex-col items-center bg-[#fffcf2]">
                <Header />
                <div className="flex flex-row gap-x-4 mt-[45px]">
                    <div className="flex-1">
                    {selectedOption === 'tracks' && <SongList />}
                    {selectedOption === 'artists' && <ArtistList />}
                    </div>
                    <div className="flex-shrink-0 text-left">
                    <p>Explore My Spotify Wrapped</p>
                    <p>Metric</p>
                    <Control selectedOption={selectedOption} handleChange={handleControlChange} />
                    </div>
                </div>
                </div>
            </MixtapeContextProvider>   
        </ArtistContextProvider>
      
    )
}