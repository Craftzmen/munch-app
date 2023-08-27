import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from '../../svgs/ChevronLeft';


const HeadBack = () => {
    const headBack = useNavigate()

    const headBackHandler = () => {
        headBack(-1)
    }
    return (
        <div>
            <div onClick={headBackHandler} className='cursor-pointer hover:opacity-70' >
                <ChevronLeft className='h-10 w-10 bg-zinc-100 text-zinc-800 rounded-full p-3' />
            </div>
        </div>
    )
}

export default HeadBack
