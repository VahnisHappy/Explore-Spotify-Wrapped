import Control from "./Control"
import MixtapeContextProvider from "./MixtapeContext"
import ArtistContextProvider from "./ArtistContext"
import SongList from "./SongList"
import { SongProps } from "./Song"
import Header from "./Header"
import { ArtistProps } from "./Artist"
import ArtistList from "./ArtistList"
import { useState } from "react"
import GenreContextProvider from "./GenreContext"
import GenreList from "./GenreList"

const songs: SongProps[] = [
    {
      artist: "Laufey",
      genre: "jazz",
      name: "From The Star",
      year: "2023",
    },
    {
      artist: "TV Girl",
      genre: "electronic",
      name: "(Do The) Act Like You Never Met Me",
      year: "2014",
    },
    {
      artist: "Laufey",
      genre: "rock",
      name: "Falling Behind",
      year: "1987",
    },
    {
      artist: "Haley Reinahart",
      genre: "rock",
      name: "Honey, There's The Door",
      year: "2018",
    },
    {
      artist: "The Marias",
      genre: "rock",
      name: "Run Your Mouth",
      year: "2018"
    },
    {
      artist: "Wallows",
      genre: "rock",
      name: "A Warning",
      year: "2018"
    },
    {
      artist: "Mellow Fellow",
      genre: "rock",
      name: "How Was Your Day",
      year: "2018"
    },
    {
      artist: "TV Girl",
      genre: "rock",
      name: "Cigarettes Out The Window",
      year: "2018"
    },
    {
      artist: "TV Girl",
      genre: "rock",
      name: "Lover Rock",
      year: "2018"
    },
    {
      artist: "Boy Pablo",
      genre: "rock",
      name: "i <3 u",
      year: "2018"
    }
  ]

  const artists = [
    { artists: "Wallows" },
    { artists: "Valley" },
    { artists: "TV Girl" },
    { artists: "The Drums" },
    { artists: "Tame Impala" },
    { artists: "The Beatles" },
    { artists: "Laufey" },
    { artists: "Clairo" },
    { artists: "RICEWINE" },
    { artists: "Hipo Campus" }
]

const genres = [
  {genres: "POV Indie"},
  {genres: "Rock"},
  {genres: "Bedroom Pop"},
  {genres: "Indie Pop"},
  {genres: "Modern Rock"},
  {genres: "Classic Rock"},
  {genres: "Indie Surf"},
  {genres: "Indie Garage Rock"},
  {genres: "Permanet Wave"},
  {genres: "Single-Songwriter"}
]

export default function Wrapped () {
    const [selectedOption, setSelectedOption] = useState<string>('tracks')
    const handleControlChange = (e: React.ChangeEvent<HTMLSelectElement>) => {setSelectedOption(e.target.value)}

    return(
      <GenreContextProvider genres={genres}>
        <ArtistContextProvider artists={artists}>
            <MixtapeContextProvider songs={songs}>
                <div className="p-5 bg-gray-50 min-h-screen flex flex-col items-center bg-[#fffcf2]">
                <Header />
                <div className="flex flex-row gap-x-4 mt-[45px]">
                    <div className="flex-1">
                    {selectedOption === 'songs' && <SongList />}
                    {selectedOption === 'artists' && <ArtistList />}
                    {selectedOption === 'genres' && <GenreList/>}
                    </div>
                    <div className="flex-shrink-0 text-left w-[430px]">
                    <p className="mb[15px] font-semibold text-[26px]">Explore My Spotify Wrapped</p>
                    <p className="mb-[10px] font-normal text-[20px]">Metric</p>
                    <Control selectedOption={selectedOption} handleChange={handleControlChange} />
                    </div>
                </div>
                </div>
            </MixtapeContextProvider>   
        </ArtistContextProvider>
        </GenreContextProvider>
      
    )
}