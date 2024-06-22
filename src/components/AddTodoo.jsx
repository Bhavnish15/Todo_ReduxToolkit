import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodoo = () => {
  const [input, setInput] = useState("");
    
  const dispatch = useDispatch()

  const inputHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput("")
  }

  return (

    <div>
      <div>
        <input
          value={input}
          type="text"
          placeholder="enter text"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div>
        <button onClick={inputHandler}>Add Todo</button>
      </div>
    </div>
  );
};

export default AddTodoo
