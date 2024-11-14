export interface GenreProps {
    genres : string,
    percent?: number,
    style? : string
}

export default function Genre ({genres, percent, style} : GenreProps) {
    return(
        <div className={`p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full sm:w-[25rem] h-auto sm:h-[4rem] flex justify-between items-center mb-[5px] text-[#fff] ${style}`}>
            <div className="text-[16px] font-semibold">
                {genres}
            </div>
            {percent !== undefined && (
                <div className="text-[16px] font-semibold">
                    {percent}%
                </div>
            )}
        </div>
    )
}