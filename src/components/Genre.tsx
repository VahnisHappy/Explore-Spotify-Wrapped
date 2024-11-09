export interface GenreProps {
    genres : string
}

export default function Genre ({genres} : GenreProps) {
    return(
        <div className="p-4 border border-gray-300 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow w-full sm:w-[25rem] h-auto sm:h-[4rem] flex justify-center items-center mb-[5px]">
            <div className="text-gray-800 text-[16px] font-semibold items-center">{genres}</div>
        </div>   
    )
}