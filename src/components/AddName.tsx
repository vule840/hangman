import React from "react";
import { useDispatch } from "react-redux";
import { sendName, showHangman } from "../store/request";

const AddName = () => {
  const dispatch = useDispatch();

  const [name, setName] = React.useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(showHangman());
    dispatch(sendName(name));
  };
  return (
    <div>
      <h5>Send name</h5>
      <form onSubmit={handleSubmit} action="">
        <input onChange={(e) => setName(e.target.value)} type="text" />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddName;
