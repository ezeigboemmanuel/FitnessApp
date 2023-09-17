import React from 'react'
import ExerciseCard from './ExerciseCard'

const Exercises = () => {
  return (
    <div className='exercises-wrapper'>
        <p className='exercise-text'>Different BodyParts, Different Exercises</p>
        <div>
            <ExerciseCard />
        </div>
    </div>
  )
}

export default Exercises