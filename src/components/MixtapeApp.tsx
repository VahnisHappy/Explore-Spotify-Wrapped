import Control from "./Control"
import MixtapeContextProvider from "./MixtapeContext"
import ArtistContextProvider from "./ArtistContext"
import SongList from "./SongList"
import { SongProps } from "./Song"
import Header from "./Header"
import { ArtistProps } from "./Artist"
import ArtistList from "./ArtistList"

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

export default function MixtapeApp () {
    return(
        <ArtistContextProvider artists={artists}>
            <MixtapeContextProvider songs={songs}>
                <div className="p-5 bg-gray-50 min-h-screen flex flex-col items-center bg-[#fffcf2]">
                <Header />
                <div className="flex flex-row gap-x-4 mt-[45px]">
                    <div className="flex-1">
                    <SongList />
                    <ArtistList/>
                    </div>
                    <div className="flex-shrink-0">
                        <p>Explore My Spotify Wrapped</p>
                        <p>Metric</p>
                        <Control />
                    </div>
                </div>
                </div>
            </MixtapeContextProvider>   
        </ArtistContextProvider>
      
    )
}