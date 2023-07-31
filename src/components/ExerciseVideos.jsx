import React, { useEffect, useState } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import Loader from './Loader'

export default function ExerciseVideos({ exerciseVideos, name }) {
    console.log(exerciseVideos.contents)
    const [videos, setVideos] = useState([])

    useEffect(() => {
        setTimeout(() => {
            if (exerciseVideos) {
                setVideos(exerciseVideos.contents.slice(0, 3))
            }
        }, 2000)

    }, [exerciseVideos])

    const videoElems = videos.map((item, index) => (
        <a
            key={index}
            target='_blank'
            rel='noreferrer'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            className='sm:w-1/2 group'
        >
            <div className="thumbnail relative overflow-hidden rounded-md">
                <img className='grayscale w-full h-full flex items-center justify-center group-hover:grayscale-0 group-hover:scale-110 transition duration-300' src={item.video.thumbnails[0].url} alt={item.video.title} loading='lazy' />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <AiFillPlayCircle className="text-indigo-500 text-6xl shadow-md bg-white rounded-full" />
                </div>
            </div>
            <p className='font-bold'>{item.video.title}</p>
            <span className='text-sm text-stone-500'>{item.video.channelName}</span>
        </a>
    ))

    return (
        <div className='p-4 sm:p-12 my-2'>
            <h4 className='font-bold text-xl md:text-2xl xl:text-3xl mb-4'>Watch <span className='capitalize text-indigo-500'>{name}</span> exercise videos</h4>
            <div className="flex flex-col gap-4 sm:flex-row">
                {videos.length ? videoElems : <Loader />}
            </div>
        </div>
    )
}
