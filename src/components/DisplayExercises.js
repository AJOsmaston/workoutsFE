export const DisplayExercises = ( { exercise } ) => {

  return (
    <div id={exercise.id}>
      {exercise.name}
    </div>
  )

}