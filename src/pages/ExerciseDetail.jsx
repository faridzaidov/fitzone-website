import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { exercisesOptions, youtubeOptions, fetchData } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

export default function ExerciseDetail() {
    const [exerciseDetail, setExerciseDetail] = useState({})
    const [exerciseVideos, setExerciseVideos] = useState([])
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
    const [equipmentExercises, setEquipmentExercises] = useState([])
    const { id } = useParams()

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,
                exercisesOptions)
            setExerciseDetail(exerciseDetailData)

            const exerciseVideosdata = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
                youtubeOptions)
            setExerciseVideos(exerciseVideosdata)

            const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
                exercisesOptions)
            setTargetMuscleExercises(targetMuscleExercisesData)

            const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
                exercisesOptions)
            setEquipmentExercises(equipmentExercisesData)
        }
        fetchExercisesData()
    }, [id])

    return (
        <div>
            <Helmet>
                <title>{exerciseDetail.name + ' | FitZone'}</title>
            </Helmet>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
            <SimilarExercises targetMuscleExercises={targetMuscleExercises}
                equipmentExercises={equipmentExercises} />
        </div>
    )
}
