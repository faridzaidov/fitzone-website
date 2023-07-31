import React from 'react'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'
import SearchExercies from '../components/SearchExercies'
import { useState } from 'react'

export default function Home() {
    const [bodyPart, setBodyPart] = useState('all')
    const [exercises, setExercises] = useState([])
    return (
        <div className=''>
            <HeroBanner />
            <SearchExercies
                setExercises={setExercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
            />
            <Exercises
                setExercises={setExercises}
                bodyPart={bodyPart}
                exercises={exercises}
            />
        </div>
    )
}
