import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("shows the opening cover before the invitation content", () => {
  render(<App />);

  expect(screen.getByRole("button", { name: "开启请帖" })).toBeInTheDocument();
  expect(screen.queryByText("婚礼地点")).not.toBeInTheDocument();
});

test("reveals invitation content after opening", async () => {
  const user = userEvent.setup();
  render(<App />);

  await act(async () => {
    await user.click(screen.getByRole("button", { name: "开启请帖" }));
  });

  expect(await screen.findByText("婚礼地点")).toBeInTheDocument();
  expect(screen.getAllByText("Wedding Invitation").length).toBeGreaterThan(0);
});

test("renders configured couple and venue details", async () => {
  const user = userEvent.setup();
  render(<App />);

  await act(async () => {
    await user.click(screen.getByRole("button", { name: "开启请帖" }));
  });

  expect(screen.getAllByText("周寅").length).toBeGreaterThan(0);
  expect(screen.getAllByText("钟雅馨").length).toBeGreaterThan(0);
  expect(screen.getAllByText("浙江省宁波市奉化区蒋葭浦老村委会").length).toBeGreaterThan(0);
});
