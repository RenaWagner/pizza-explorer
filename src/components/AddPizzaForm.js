import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPizza } from "../store/pizzas/action";
import "./AddPizzaForm.scss";

export default function AddPizzaForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const submit = (event) => {
    event.preventDefault();
    console.log("new pizza", name, description);
    dispatch(addPizza(name, description));
    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={submit} className="formContainer">
      <h3>Add a new pizza</h3>
      <label className="nameLabel">
        <span>Name: </span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="nameInput"
        />
      </label>
      <br></br>
      <label className="textLabel">
        <span>Description: </span>
        <textarea
          type="text"
          value={description}
          rows="4"
          cols="60"
          className="textInput"
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br></br>
      <button type="submit" className="addPizzaButton">
        Add this pizza!
      </button>
    </form>
  );
}
