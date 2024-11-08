export interface SongProps {
    artist? : string,
    genre? : string,
    name : string,
    year : string
}

export default function Song ({artist, genre, name, year} : SongProps){
    return (
        <div className="p-4 border border-gray-300 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow w-full sm:w-[25rem] h-auto sm:h-[6rem] flex items-center mb-[5px]">
            <div className="bg-blue-100 rounded-lg w-[5rem] h-[5rem] flex-shrink-0">
                {/* Replace "picture" with an actual image */}
                picture
            </div>
            <div className="ml-4 flex flex-col justify-center w-full">
                <div className="text-gray-800 text-lg sm:text-xl font-semibold">{name}</div>
                <div className="text-gray-800 text-sm sm:text-base uppercase">{artist}</div>
                <div className="text-gray-600 text-xs sm:text-sm font-medium">{genre} - {year}</div>
            </div>
        </div>
    )
}