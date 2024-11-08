import { useContext, ChangeEvent, useState } from "react"
import { MixtapeContext } from './MixtapeContext'

export default function Control ({}) {
    const context = useContext(MixtapeContext)
    
    if (!context) throw new Error("Controls must be used within a MixtapeProvider")

    const { genre, sortOrder, setGenre, setSortOrder } = context

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setGenre(e.target.value);
    }

    const [viewMode, setViewMode] = useState<"songs" | "artists" | "genres">("songs")

    return (
        <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md mb-6">
            <div className="relative inline-block w-64">
                <select
                    onChange={handleChange}
                    value={genre}
                    className="bg-white p-2 border rounded-md shadow-sm w-full appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    <option value="all">All</option>
                    <option value="hip hop">Hip Hop</option>
                    <option value="jazz">Jazz</option>
                    <option value="rock">Rock</option>
                    <option value="pop">Pop</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 pointer-events-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </div>
            {/* <button
                onClick={() => setSortOrder(sortOrder === "ascending" ? "descending" : "ascending")}
                className="px-6 py-2 bg-[#403d39] text-white font-semibold rounded-md shadow-md hover:bg-[#8b8c89] focus:outline-none"
            >
                {sortOrder}
            </button> */}
        </div>
    )
}
