import { useState } from "react"

export const AddExercise = ( { addExercise } ) => {

  const [value, setValue] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    addExercise(value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Exercise:
        <input type="text" name="name" onChange={event => setValue(event.target.value)}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}