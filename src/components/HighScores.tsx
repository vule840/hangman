import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "typesafe-actions";
import { showName } from "../store/request";
var _ = require("lodash");

const HighScores = () => {
  const dispatch = useDispatch();

  const users = useSelector((state: RootState) =>
    _.orderBy(state.sender.users, ["finalscore"], ["desc"])
  );

  const restartGame = () => {
    dispatch(showName());
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>
              <strong>Name</strong>
            </td>

            <td>
              <strong>Score </strong>
            </td>
          </tr>
        </thead>
        {users &&
          users.map((user: any) => {
            return (
              <tbody key={Date.now()}>
                <tr>
                  <td>{user.name}</td>
                  <td>{user.finalscore}</td>
                </tr>
              </tbody>
            );
          })}
      </table>
      <button onClick={restartGame}>Restart</button>
    </div>
  );
};

export default HighScores;
