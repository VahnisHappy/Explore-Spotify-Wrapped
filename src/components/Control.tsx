import { useContext, ChangeEvent, useState } from "react"
import { MixtapeContext } from './MixtapeContext'

interface ControlProps {
    selectedOption: string
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function Control ({selectedOption, handleChange}: ControlProps) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDropdown = () => {setIsOpen((prev) => !prev)}
    
    return (
        <div className="flex justify-between w-full">
            <div className="relative inline-block w-full sm:w-[430px]">
            <select
                onChange={(e) => {
                    handleChange(e) 
                    setIsOpen(false)}}
                onClick={toggleDropdown}
                value={selectedOption}
                className="bg-white p-3 border border-gray-300 rounded-lg shadow-md w-full appearance-none focus:outline-none focus:ring-2 focus:ring-[#ffdb57] text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
                <option value="songs">Top Songs</option>
                <option value="artists">Top Artists</option>
                <option value="genres">Top Genres</option>
            </select>
            <div className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center text-gray-500 pointer-events-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={isOpen ? "M19 15l-7-7-7 7" : "M19 9l-7 7-7-7"}
                    />
                </svg>
            </div>
        </div>
        </div>
    )
}
