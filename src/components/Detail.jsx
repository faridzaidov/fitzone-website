import React from 'react'
import { BiBody } from 'react-icons/bi'
import { TbTarget } from 'react-icons/tb'
import { CgGym } from 'react-icons/cg'

export default function Detail({ exerciseDetail }) {
    const { bodyPart, equipment, gifUrl, name, target } = exerciseDetail

    return (
        <div className='p-4 sm:p-12 sm:flex'>
            <div className="detail-left mb-6 self-center sm:w-5/12">
                <img className='mx-auto h-full w-full' src={gifUrl} alt={`${name} image`} loading='lazy' />
            </div>
            <div className="detail-right sm:w-7/12 flex flex-col sm:justify-center sm:pl-10">
                <h1 className='font-bold capitalize text-xl md:text-4xl'>{name}</h1>
                <p className='my-4 md:text-xl'>Exercises keep you strong. {name} is one
                    of the best exercises to target your {target}.
                    It will help you your improve your mood
                    and energy</p>
                <div className="flex flex-col gap-4">
                    <span className='flex gap-3 items-center capitalize'>
                        <BiBody className='text-indigo-500 bg-violet-100 rounded-full text-5xl p-1' />
                        {bodyPart}
                    </span>
                    <span className='flex gap-3 items-center capitalize'>
                        <TbTarget className='text-indigo-500 bg-violet-100 rounded-full text-5xl p-1' />
                        {target}
                    </span>
                    <span className='flex gap-3 items-center capitalize'>
                        <CgGym className='text-indigo-500 bg-violet-100 rounded-full text-5xl p-1' />
                        {equipment}
                    </span>
                </div>

            </div>
        </div>
    )
}
