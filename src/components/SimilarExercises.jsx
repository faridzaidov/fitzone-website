import React from 'react'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'
import ExerciseCard from './ExerciseCard';

export default function SimilarExercises({ equipmentExercises, targetMuscleExercises }) {
    // Shuffle a copy of the array
    const shuffledTargetMuscleExercises = [...targetMuscleExercises].sort(() => Math.random() - 0.5);
    const randomTargetMuscleExercises = shuffledTargetMuscleExercises.slice(0, 8);

    const shuffledEquipmentExercises = [...equipmentExercises].sort(() => Math.random() - 0.5);
    const randomEquipmentExercises = shuffledEquipmentExercises.slice(0, 8);

    return (
        <div className='p-4 sm:p-12'>
            <div className="mb-8">
                <h4 className='font-bold text-xl sm:text-2xl md:text-3xl mb-4'>Exercises that target the same muscle group</h4>
                <div className="flex flex-wrap justify-around 2xl:justify-center 2xl:flex-nowrap 2xl:gap-2">
                    {randomTargetMuscleExercises.length ?
                        randomTargetMuscleExercises.map(exercise => <ExerciseCard exercise={exercise} />)
                        : <Loader />}
                </div>
            </div>
            <div className="">
                <h4 className='font-bold text-xl sm:text-2xl md:text-3xl mb-4'>Exercises that use the same equipment</h4>
                <div className="flex flex-wrap justify-around 2xl:justify-center 2xl:flex-nowrap 2xl:gap-2">
                    {randomEquipmentExercises.length ?
                        randomEquipmentExercises.map(exercise => <ExerciseCard exercise={exercise} />)
                        : <Loader />}
                </div>
            </div>
        </div>
    )
}
