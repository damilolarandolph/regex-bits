import React from 'react';
import { BiGitBranch, BiHeart, BiSave } from 'react-icons/bi';
import { FaHeart, FaSave } from 'react-icons/fa'
import { MiniRenderer } from './regex-render';


export default function RegexCard() {

    return <div className="w-full p-4 rounded-lg bg-ui-ming min-w-max">
        <div className="flex items-center">
            <div className="overflow-hidden rounded-full w-11 h-11">
                <img src="https://via.placeholder.com/150" />
            </div>
            <div className="flex flex-col ml-5 min-w-max">
                <h2 className="text-2xl font-bold text-white">Password Regex</h2>
                <span className="text-sm italic font-light text-ui-grey">07/04/2000</span>
            </div>
        </div>
        <div className="min-w-full my-7">
            <MiniRenderer />
        </div>
        <div className="flex items-center justify-between min-w-max">
            <span className="mr-10 text-ui-grey min-w-max">Tim Berners Lee</span>
            <div className="min-w-max">
                <CardAction
                    activeClasses="text-syntax-red"
                    extraClasses="hover:text-syntax-red"
                    active={false}
                    icon={<BiHeart />}
                    activeIcon={<FaHeart />}
                    text="3" />

                <CardAction
                    activeClasses="text-syntax-yellow"
                    extraClasses="hover:text-syntax-yellow"
                    active={false}
                    icon={<BiSave />}
                    activeIcon={<FaSave />}
                    text="3" />
                <CardAction
                    activeClasses="text-syntax-blue"
                    extraClasses="hover:text-syntax-blue"
                    active={true}
                    icon={<BiGitBranch />}
                    text="3" />
            </div>
        </div>
    </div>

}


function CardAction({ active = false, icon, activeIcon = icon, text, extraClasses, activeClasses }) {


    let chosenIcon = active ? activeIcon : icon

    return <span className="mx-1 align-middle">
        <button className={`inline-block  text-2xl align-middle ${active ? activeClasses : 'text-ui-grey'} ${extraClasses}`}>{chosenIcon}</button>
        <span className="ml-1 align-middle text-ui-grey">{text}</span>
    </span>
}