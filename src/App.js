import { Fragment } from "react";
import UserForm from "./components/UserForm";
import UserData from "./components/UserData";

function App() {
  return (
    <Fragment>
      <UserForm />
      <UserData />
    </Fragment>
  );
}

export default App;
