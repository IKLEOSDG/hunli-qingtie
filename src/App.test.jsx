import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders invitation title and couple names from config", () => {
  render(<App />);

  expect(screen.getByText("我们要结婚啦")).toBeInTheDocument();
  expect(screen.getAllByText(/新郎姓名/).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/新娘姓名/).length).toBeGreaterThan(0);
});

test("renders all major invitation sections", () => {
  render(<App />);

  expect(screen.getAllByText("Wedding Invitation").length).toBeGreaterThan(0);
  expect(screen.getByText("婚礼地点")).toBeInTheDocument();
  expect(screen.getByText("婚礼流程")).toBeInTheDocument();
});
