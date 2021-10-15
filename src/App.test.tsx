import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import userEvent from "@testing-library/user-event";

test("renders learn react link", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText(/^Send name/)).toBeInTheDocument();
  const button = screen.getByRole("button", { name: /submit/i });
  userEvent.click(button);
  await waitFor(() => screen.getByText("Hangman"));
  // const restart = screen.getByRole("button", { name: /Restart/i });
  // await waitFor(() => screen.getByText("Score"));
});
