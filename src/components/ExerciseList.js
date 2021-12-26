import { useExerciseList } from "../hooks/useExerciseList";
import { DisplayExercises } from "./DisplayExercises";

export const ExerciseList = () => {
  const [exercises, addExercise, loaded] = useExerciseList();

  return (
    <>
    {loaded && exercises.map((exercise) => {
      return <DisplayExercises key={exercise.id} exercise={exercise} />
    })}
    </>
  );

};