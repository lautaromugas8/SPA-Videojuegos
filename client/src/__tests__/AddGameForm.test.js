import React from "react";
import { Provider } from "react-redux";
import AddGameForm from "../components/Add/AddGameForm";
import { createStore } from "redux";
import reducer, { initialState } from "../redux/reducers/index";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

function renderWithProviders(ui, { reduxState } = {}) {
  const store = createStore(reducer, reduxState || initialState);
  return render(<Provider store={store}>{ui}</Provider>);
}

test("'Añadir Juego' button is enabled", () => {
  renderWithProviders(<AddGameForm />);
  expect(screen.getByRole("button", { name: /Añadir Juego/i })).toBeEnabled();
});

test("Form is functional", () => {
  renderWithProviders(<AddGameForm />);
  userEvent.type(screen.getByLabelText(/nombre:/i), "Mi Primer Juego");
  userEvent.type(
    screen.getByLabelText(/descripción:/i),
    "Este es mi primer juego"
  );
  userEvent.type(
    screen.getByLabelText(/plataformas:/i),
    "Nintendo Switch, PlayStation 5"
  );

  expect(screen.getByLabelText(/nombre:/i).value).toBe("Mi Primer Juego");
  expect(screen.getByLabelText(/descripción:/i).value).toBe(
    "Este es mi primer juego"
  );
  expect(screen.getByLabelText(/plataformas:/i).value).toBe(
    "Nintendo Switch, PlayStation 5"
  );
});

test("Should warn the user when the platforms doesn't exist", () => {
  renderWithProviders(<AddGameForm />);
  userEvent.type(screen.getByLabelText(/plataformas/i), "aklasb");
  screen.getByText(/la plataforma no existe/i);
});

test("Shouldn't let the user select more than 4 genres", async () => {
  renderWithProviders(<AddGameForm />);
  console.log(screen.getByTestId(""));
});
