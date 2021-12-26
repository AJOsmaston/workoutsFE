import { useExerciseList } from "../hooks/useExerciseList";
import { DisplayExercise } from "./DisplayExercise";
import { AddExercise } from "./AddExercise"

export const ExerciseList = () => {
  const [exercises, addExercise, loaded] = useExerciseList();

  return (
    <>
    {loaded && exercises.map((exercise) => {
      return <DisplayExercise key={exercise.id} exercise={exercise} />
    })}
    <AddExercise addExercise={addExercise} />
    </>
  );

};