export const DisplayExercise = ( { exercise } ) => {

  return (
    <div id={exercise.id}>
      {exercise.name}
    </div>
  )

}