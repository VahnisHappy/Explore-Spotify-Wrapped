export interface ArtistProps {
    artists : string
}

export default function Artist ({artists} : ArtistProps) {
    return(
        <div className="text-gray-800 text-lg sm:text-xl font-semibold">{artists}</div>
    )
}