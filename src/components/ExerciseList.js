import { useExerciseList } from "../hooks/useExerciseList";

export const ExerciseList = () => {

  const [exercises, addExercise, loaded] = useExerciseList();

  return (
    <div>
    {loaded && exercises.map((exercise) => {
      return <div>{exercise.name}</div>
    }
    )}
    </div>
  );

};