export interface GenreProps {
    genres : string
}

export default function Genre ({genres} : GenreProps) {
    return(
        <div className="p-4 border border-gray-300 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow w-full sm:w-[25rem] h-auto sm:h-[4rem] flex items-center mb-[5px]">
            <div className="bg-blue-100 rounded-lg w-[3rem] h-[3rem] flex-shrink-0">
                {/* Replace "picture" with an actual image */}
                picture
            </div>
            <div className="ml-4 flex flex-col items-start justify-start">
            <div className="text-gray-800 text-lg sm:text-xl font-semibold">{genres}</div>
            </div>
        </div>
        
    )
}