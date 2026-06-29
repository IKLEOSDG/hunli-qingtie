import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { invitation } from "./invitationConfig";

test("shows the opening cover before the invitation content", () => {
  render(<App />);

  expect(screen.getByRole("button", { name: invitation.coverTitle })).toBeInTheDocument();
  expect(screen.queryByText("婚礼地点")).not.toBeInTheDocument();
});

test("reveals invitation content after opening", async () => {
  const user = userEvent.setup();
  render(<App />);

  await act(async () => {
    await user.click(screen.getByRole("button", { name: invitation.coverTitle }));
  });

  expect(await screen.findByText("婚礼地点")).toBeInTheDocument();
  expect(screen.getAllByText("Wedding Invitation").length).toBeGreaterThan(0);
});

test("renders configured couple and venue details", async () => {
  const user = userEvent.setup();
  render(<App />);

  await act(async () => {
    await user.click(screen.getByRole("button", { name: invitation.coverTitle }));
  });

  expect(screen.getAllByText(invitation.groom).length).toBeGreaterThan(0);
  expect(screen.getAllByText(invitation.bride).length).toBeGreaterThan(0);
  expect(screen.getAllByText(invitation.address).length).toBeGreaterThan(0);
});

test("renders four decorative corner cats after opening", async () => {
  const user = userEvent.setup();
  const { container } = render(<App />);

  await act(async () => {
    await user.click(screen.getByRole("button", { name: invitation.coverTitle }));
  });

  expect(container.querySelectorAll(".corner-cat")).toHaveLength(4);
});
