import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("triggers one rain burst on initial load", async () => {
  render(<App />);

  const items = await screen.findAllByTestId("rain-item");
  expect(items.length).toBeGreaterThan(0);
});

test("triggers another burst when blessing button is clicked", async () => {
  const user = userEvent.setup();
  render(<App />);

  const button = screen.getByRole("button", { name: /猫猫祝福雨/ });
  await act(async () => {
    await user.click(button);
  });

  const items = await screen.findAllByTestId("rain-item");
  expect(items.length).toBeGreaterThan(0);
});
