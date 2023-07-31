import React from 'react'
import { useState, useEffect } from 'react'
import { exercisesOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'

export default function SearchExercies({ setExercises, bodyPart, setBodyPart }) {
    const [searchValue, setSearchValue] = useState('')
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyParts = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions)
            setBodyParts(['all', ...bodyParts])
        }

        fetchExercisesData();
    }, [])

    const handleSearch = async () => {
        if (searchValue) {
            const exercisesData = await fetchData(
                'https://exercisedb.p.rapidapi.com/exercises',
                exercisesOptions
            )
            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(searchValue)
                    || exercise.target.toLowerCase().includes(searchValue)
                    || exercise.equipment.toLowerCase().includes(searchValue)
                    || exercise.bodyPart.toLowerCase().includes(searchValue)
            )
            setSearchValue('')
            setExercises(searchedExercises)
            console.log(exercises)
        }


    }
    return (
        <div className='p-4 sm:p-12 mt-20'>
            <h2 className='ml-auto mr-auto capitalize text-center 
            sm:w-1/2 font-bold text-xl sm:text-2xl md:text-4xl mb-6'>
                Awesome exercises you should know</h2>
            <div className="search-wrapper flex justify-center">
                <input
                    className='border-solid h-10 border-2 rounded-l-lg 
                    border-stone-100 p-2 w-5/6 md:w-4/6 xl:w-1/2'
                    type="text"
                    onChange={(e) => { setSearchValue(e.target.value.toLowerCase()) }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                    value={searchValue}
                    placeholder='Search Exercises'
                />
                <button
                    className='border-solid bg-indigo-500 hover:bg-indigo-700 transition duration-300
                    h-10 p-2 rounded-r-lg text-indigo-50 w-2/6 md:w-1/6 xl:w-1/12'
                    onClick={handleSearch}
                >Search</button>
            </div>
            <div className="">
                <HorizontalScrollBar
                    data={bodyParts}
                    bodyPart={bodyPart}
                    setBodyPart={setBodyPart}
                />
            </div>
        </div>
    )
}
