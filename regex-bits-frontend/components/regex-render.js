import React from 'react'





export function MiniRenderer({ showShadow = true }) {

    return <div className={`min-w-full p-4 text-xl  font-medium rounded-md bg-ui-black ${showShadow ? 'shadow-xl' : ''} `}>
        <span className="border-2 border-transparent hover:bg-yellow-50 hover:border-yellow-300 text-syntax-yellow">%</span>
    </div>
}