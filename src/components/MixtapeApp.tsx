import Control from "./Control"
import MixtapeContextProvider from "./MixtapeContext"
import SongList from "./SongList"
import { SongProps } from "./Song"

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
      genre: "eletronic",
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
  ];
  

export default function MixtapeApp () {
    return(
        <MixtapeContextProvider songs={songs}>
            <div className="App">
                <h1 className="heading">My 🔥 Mixtape</h1>
                <Control/>
                <SongList/>
            </div>
        </MixtapeContextProvider>
    )
}
  