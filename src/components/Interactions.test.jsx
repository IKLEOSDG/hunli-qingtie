import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

async function openInvitation(user) {
  await act(async () => {
    await user.click(screen.getByRole("button", { name: "开启请帖" }));
  });
}

test("triggers one rain burst after opening the invitation", async () => {
  const user = userEvent.setup();
  render(<App />);

  await openInvitation(user);

  const items = await screen.findAllByTestId("rain-item");
  expect(items.length).toBeGreaterThan(0);
});

test("triggers another burst when blessing button is clicked", async () => {
  const user = userEvent.setup();
  render(<App />);

  await openInvitation(user);

  await act(async () => {
    await user.click(screen.getByRole("button", { name: "点击召唤猫猫祝福雨" }));
  });

  const items = await screen.findAllByTestId("rain-item");
  expect(items.length).toBeGreaterThan(0);
});
