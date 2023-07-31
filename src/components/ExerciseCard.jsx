import React from 'react'
import { Link } from 'react-router-dom'

export default function ExerciseCard({ exercise }) {
    return (
        <div className='hover:scale-110 transition duration-300 border-t-4 w-full bg-white sm:w-5/12 lg:w-3/12 xl:w-2/12 2xl:w-1/12 overflow-hidden rounded-md shadow border-indigo-500 m-6 2xl:mx-2 2xl:w-full'>
            <Link
                className='w-full h-full'
                to={`/exercise/${exercise.id}`}
            >
                <div className="w-full">
                    <img src={exercise.gifUrl}
                        className=''
                        alt={exercise.name + ' image'}
                        loading='lazy'
                    />
                </div>
                <div className="bg-white p-2 flex gap-2 flex-wrap">
                    <span className='capitalize flex items-center text-white cursor-pointer text-sm rounded-full px-3 py-1 bg-cyan-800'>{exercise.bodyPart}</span>
                    <span className='capitalize flex items-center text-white cursor-pointer text-sm rounded-full px-3 py-1 bg-violet-800'>{exercise.target}</span>
                </div>

                <p className='bg-white capitalize p-2 font-bold'>{exercise.name}</p>
            </Link>
        </div>
    )
}
