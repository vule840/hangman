import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendName } from "./store/request";
import { RootState } from "typesafe-actions";
const AddName = () => {
  const dispatch = useDispatch();
  const theName = useSelector((state: RootState) => state.sender.name);
  const [name, setName] = React.useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(name);
    dispatch(sendName(name));
  };
  return (
    <div>
      <h5>Add name</h5>
      <form onSubmit={handleSubmit} action="">
        <input onChange={(e) => setName(e.target.value)} type="text" />
        <br />
        <input type="submit" />
      </form>
      <p>{theName}</p>
    </div>
  );
};

export default AddName;
