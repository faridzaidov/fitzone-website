import React from 'react'
import { IoIosFitness } from 'react-icons/io'
import { Link } from 'react-router-dom'

export default function BodyPart({ item, bodyPart, setBodyPart }) {
    const style = bodyPart === item ? 'border-t-4 border-indigo-500' : ''

    return (
        <div className={'bg-white w-32 h-32 md:w-60 md:h-60 shadow rounded group ' + style}
            onClick={() => {
                setBodyPart(item)
            }}
        >
            <Link className='w-full h-full flex flex-col group-hover:scale-125 transition duration-300 gap-1 md:gap-2 items-center justify-center'>
                <IoIosFitness className='text-indigo-500 md:text-4xl' />
                <p className='capitalize font-bold text-md md:text-2xl'>{item}</p>
            </Link>
        </div>

    )
}
