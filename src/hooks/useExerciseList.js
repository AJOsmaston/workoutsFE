import { useEffect, useState } from "react";


export const useExerciseList = () => {

  const [exercises, setExercises] = useState();

  const getExercises = async = () => {
    const url = "http://localhost:3000/exercises";
    const res = await fetch(url, { method: "GET" });
    const json = await res.json();
    setExercises(json)
  }

  const addExercise = async = (exercise) => {
    // needs format: "{
    //                  "exercise": {
    //                  "name": "Deadlift"
    //                  }
    //                }"
    const url = "http://localhost:3000/exercises";
    const res = await fetch(url, { 
      method: "POST",
      body: JSON.stringify(exercise)
    });
    const json = await res.json();
    // refresh the exercise use state after
    getExercises();
  }

  useEffect(() => {
    getExercises();
  }, []);

  return [exercises, addExercise]

};