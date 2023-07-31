import styles from "./AddUser.module.css";
import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button/Button";

const AddUser = () => {
  const [userInput, setUserInput] = useState("");
  const [ageInput, setAgeInput] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if(userInput.trim().length === 0 || ageInput.trim().length === 0){
      return;
    }
    if(+ageInput < 1){
      return;
    }
    console.log(userInput, ageInput);
    setUserInput("");
    setAgeInput("");
  };

  const inputChangeHandler = (event) => {
    setUserInput(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAgeInput(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <div className={styles.input}>
          <p>
            <label htmlFor="username">Name</label>
            <input type="text" id="username" onChange={inputChangeHandler} value={userInput} />
          </p>
          <p>
            <label htmlFor="age">Age (Years)</label>
            <input type="number" id="age" onChange={ageChangeHandler} value={ageInput}></input>
          </p>
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
