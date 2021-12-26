import { useEffect, useState } from "react";


export const useExerciseList = () => {

  const [exercises, setExercises] = useState();
  const [loaded, setLoaded] = useState()

  const getExercises = async () => {
    const url = "http://localhost:3000/exercises";
    const res = await fetch(url, { method: "GET" });
    const json = await res.json();
    setExercises(json);
    setLoaded(true);
  }

  const addExercise = async (exercise) => {
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
    if (json.id){
      getExercises();
      setLoaded(true);
    }
  }

  useEffect(() => {
    getExercises();
  }, []);

  return [exercises, addExercise, loaded]

};