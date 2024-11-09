export interface ArtistProps {
    artists : string,
    image?: string
}

export default function Artist ({artists, image} : ArtistProps) {
    return(
        <div className="p-4 border border-gray-300 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow w-full sm:w-[25rem] h-auto sm:h-[4rem] flex items-center mb-[5px]">
            <div className="bg-blue-100 rounded-lg w-[3rem] h-[3rem] flex-shrink-0">
            {image ? (
                    <img src={image} alt={`${artists} album cover`} className="w-full h-full object-cover rounded-lg" />
                ) : (
                    <span className="flex items-center justify-center w-full h-full text-xs text-gray-500">No Image</span>
                )}
            </div>
            <div className="ml-4 flex flex-col items-start justify-start">
            <div className="text-gray-800 text-[16px] font-semibold">{artists}</div>
            </div>
        </div>
        
    )
}