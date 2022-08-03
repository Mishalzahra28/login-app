import { Fragment, useState, useRef } from "react";
import "./UserForm.css";

const invalidInput = (value) => value.trim() === "";
// const invalidAge=(value)=>value.trim() === '';

function UserForm() {
  const name = useRef("");
  const age = useRef("");

  function submitHandler(event) {
    event.preventDefault();
    const userName = name.current.value;
    const userAge = age.current.value;

    const invalidName = invalidInput(userName);
    const invalidAge = invalidInput(userAge);

    if (invalidName || invalidAge) {
      return;
    }
    fetch("https://login-app-1c1e4-default-rtdb.firebaseio.com/users.json", {
      method: "POST",
      body: JSON.stringify({
        UserName: userName,
        Age: userAge,
      }),
    });
  }

  return (
    <Fragment>
      <form className="form" onSubmit={submitHandler}>
        <div className="form-control">
          <label>Name</label>
          <input type="text" ref={name} />
        </div>
        <div className="form-control">
          <label>Age</label>
          <input type="number" ref={age} min="1" />
        </div>
        <button>Submit</button>
      </form>
    </Fragment>
  );
}

export default UserForm;
