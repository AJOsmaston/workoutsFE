import { useEffect, useState } from "react";

export const useExerciseList = () => {

  const [exercises, setExercises] = useState();
  const [loaded, setLoaded] = useState()

  //GET request to populate JSON of all exercises
  const getExercises = async () => {
    const url = "http://localhost:3000/exercises";
    const res = await fetch(url, { method: "GET" });
    const json = await res.json();
    setExercises(json);
    setLoaded(true);
  }

  //POST request to add a new exercise
  const addExercise = async (name) => {
    setLoaded(false)
    let exercise = { "exercise": { "name": name } }
    console.log(JSON.stringify(exercise))
    const url = "http://localhost:3000/exercises";
    const res = await fetch(url, { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(exercise),
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