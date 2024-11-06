export interface SongProps {
    artist : string,
    genre : string,
    name : string,
    year : string
}

export default function Song ({artist, genre, name, year} : SongProps){
    return (
    <div className="song">
        <div className="contents">
            <div className="name">{name}</div>
            <div className="details left">
                <div className="artist">{artist}</div>
            </div>
            <div className="details right">
                    <div className="genre">{genre}</div>
                    <div className="year">{year}</div>
            </div>
        </div>
    </div>
    )
}