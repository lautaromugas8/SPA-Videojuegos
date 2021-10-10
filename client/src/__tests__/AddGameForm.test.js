import React from "react";
import { Provider } from "react-redux";
import AddGameForm from "../components/Add/AddGameForm";
import { createStore } from "redux";
import reducer, { initialState } from "../redux/reducers/index";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

function renderWithProviders(ui, { reduxState } = {}) {
  const store = createStore(reducer, reduxState || initialState);
  return render(<Provider store={store}>{ui}</Provider>);
}

test("'Añadir Juego' button is enabled", () => {
  renderWithProviders(<AddGameForm />);
  expect(screen.getByRole("button", { name: /añadir juego/i })).toBeEnabled();
});

test("Form is functional", () => {
  renderWithProviders(<AddGameForm />);
  const checkboxes = screen.getAllByRole("checkbox");
  userEvent.type(screen.getByLabelText(/nombre:/i), "Mi Primer Juego");
  userEvent.type(
    screen.getByLabelText(/descripción:/i),
    "Este es mi primer juego"
  );
  userEvent.click(checkboxes[0]);
  userEvent.click(checkboxes[1]);
  userEvent.click(checkboxes[2]);

  expect(screen.getByLabelText(/nombre:/i).value).toBe("Mi Primer Juego");
  expect(screen.getByLabelText(/descripción:/i).value).toBe(
    "Este es mi primer juego"
  );
  expect(checkboxes[0].checked).toBe(true);
  expect(checkboxes[1].checked).toBe(true);
  expect(checkboxes[2].checked).toBe(true);
});

test("Shouldn't let the user select more than 4 genres", async () => {
  renderWithProviders(<AddGameForm />);
  const checkboxes = screen.getAllByRole("checkbox");
  expect(checkboxes[12].checked).toBe(false);
  expect(checkboxes[13].checked).toBe(false);
  expect(checkboxes[14].checked).toBe(false);
  expect(checkboxes[15].checked).toBe(false);
  expect(checkboxes[16].checked).toBe(false);
  userEvent.click(checkboxes[12]);
  userEvent.click(checkboxes[13]);
  userEvent.click(checkboxes[14]);
  userEvent.click(checkboxes[15]);
  userEvent.click(checkboxes[16]);
  expect(checkboxes[12].checked).toBe(true);
  expect(checkboxes[13].checked).toBe(true);
  expect(checkboxes[14].checked).toBe(true);
  expect(checkboxes[15].checked).toBe(true);
  expect(checkboxes[16].checked).toBe(false);
});
