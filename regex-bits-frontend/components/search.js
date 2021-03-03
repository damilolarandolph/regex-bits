import React, { useRef, useState } from 'react'
import { BiX } from 'react-icons/bi'

const def = () => console.log("default")

export default function SearchBar({ onSearch = def }) {
    let [query, setQuery] = useState("")
    const inputEl = useRef(null)
    return <div className="relative w-full">
        <input placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            ref={inputEl}
            // If key pressed is enter and the value of the query is greater than 3
            // the input can be submitted
            onKeyDown={(e) => e.key == "Enter" ? onSearch(query) : null}
            className="w-full p-2 rounded-md outline-none text-ui-ming placeholder-ui-ming bg-ui-grey"
            type="text" />
        {query.length > 0 ?
            <div className="absolute top-0 bottom-0 right-0 inline-flex items-center text-2xl cursor-pointer">
                <BiX onClick={() => { setQuery(""); inputEl.current.value = "" }} />
            </div>
            : ""
        }
    </div>
}


