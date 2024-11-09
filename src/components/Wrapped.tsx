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
      album: "Bewiched",
      genre: "jazz",
      name: "From The Star",
      year: "2023",
      image: "https://i.scdn.co/image/ab67616d00001e0274c732f8aa0e0ccbb3d17d96"
    },
    {
      artist: "TV Girl",
      album: "Who Really Cares",
      genre: "alternetive/indie",
      name: "(Do The) Act Like You Never Met Me",
      year: "2016",
      image: "https://f4.bcbits.com/img/a1665979962_65"
    },
    {
      artist: "Laufey",
      album: "Everything I Know About Love",
      genre: "jazz",
      name: "Falling Behind",
      year: "2022",
      image: "https://i.scdn.co/image/ab67616d00001e0248341e864d4b4881f56f01b4"
    },
    {
      artist: "Haley Reinahart",
      album: "Lo-Fi Soul",
      genre: "pop",
      name: "Honey, There's The Door",
      year: "2019",
      image: "https://images.genius.com/543ae6b6ad8d49d531075dd6f65818d2.900x900x1.jpg"
    },
    {
      artist: "The Marias",
      album: "Submarine",
      genre: "alternetive/indie",
      name: "Run Your Mouth",
      year: "2024",
      image: "https://i.scdn.co/image/ab67616d00001e0291f6124c118c0a2b04eb5cc9"
    },
    {
      artist: "Wallows",
      album: "Model",
      genre: "pop",
      name: "A Warning",
      year: "2024",
      image: "https://i.scdn.co/image/ab67616d0000b273836677f1c8856a8fdae290f1"
    },
    {
      artist: "Mellow Fellow",
      genre: "indie",
      name: "How Was Your Day",
      year: "2016",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg3ED-1mS7zGtNcKps3X7ZdsaQdg_P5Q2WLg&s"
    },
    {
      artist: "TV Girl",
      album: "Who Really Cares",
      genre: "alternetive/indie",
      name: "Cigarettes Out The Window",
      year: "2016",
      image: "https://f4.bcbits.com/img/a1665979962_65"
    },
    {
      artist: "TV Girl",
      album: "French Exit",
      genre: "alternetive/indie",
      name: "Lover Rock",
      year: "2014",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuMOZu252yI3eBiYDCfwQSXoreFzKyHC1f8w&s"
    },
    {
      artist: "Boy Pablo",
      album: "Wchito Rico",
      genre: "alternetive/indie",
      name: "i <3 u",
      year: "2020",
      image: "https://i.scdn.co/image/ab67616d0000b2732dec0426c3e27a180d7f894c"
    }
  ]

  const artists = [
    { artists: "Wallows", image: "https://i.scdn.co/image/ab676161000051745e05eaadb2ee42f5ef9a5c37" },
    { artists: "Valley", image: "https://cdns-images.dzcdn.net/images/artist/41d696f30c511fe86969b4650cc76575/1900x1900-000000-80-0-0.jpg" },
    { artists: "TV Girl", image: "https://f4.bcbits.com/img/a1665979962_65" },
    { artists: "The Drums", image: "https://i.scdn.co/image/ab6761610000e5eb5aa228084150aad9199d2575" },
    { artists: "Tame Impala", image: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t1080x1080.jpg" },
    { artists: "The Beatles", image: "https://m.media-amazon.com/images/M/MV5BMjA2ODY1MDA5MV5BMl5BanBnXkFtZTcwNjU1MzIyOA@@._V1_FMjpg_UX1000_.jpg" },
    { artists: "Laufey", image: "https://images.genius.com/a5dec955c8af5ecdf05497a1e102538e.1000x1000x1.png" },
    { artists: "Clairo", image: "https://i.scdn.co/image/ab67616d0000b27333ccb60f9b2785ef691b2fbc" },
    { artists: "RICEWINE", image: "https://yt3.googleusercontent.com/IYWZCVg6Gkmh1nWRLdDY1PPJJXlUVZOaqxkcZSjX3jsA_43dP-Br3HpJjiilfsd7TII17xXgLA=s900-c-k-c0x00ffffff-no-rj"},
    { artists: "Hipo Campus", image: "https://npr.brightspotcdn.com/f9/00/efd0afc44e8bbc8af96be0a07ca8/hippowebsite.jpg" }
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
    const [selectedOption, setSelectedOption] = useState<string>('songs')
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