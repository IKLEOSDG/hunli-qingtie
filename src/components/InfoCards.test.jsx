import { render, screen, act } from "@testing-library/react";
import { vi, beforeEach, afterEach, test, expect } from "vitest";
import { invitation } from "../invitationConfig";
import DateCard from "./DateCard";
import LocationCard from "./LocationCard";
import Timeline from "./Timeline";

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

test("shows a live countdown before the wedding", () => {
  vi.setSystemTime(new Date("2026-09-30T11:18:00"));
  render(<DateCard invitation={invitation} />);

  expect(screen.getByText(/距离婚礼还有/)).toBeInTheDocument();

  act(() => {
    vi.advanceTimersByTime(60_000);
  });

  expect(screen.getByText(/距离婚礼还有/)).toBeInTheDocument();
});

test("shows started message after the wedding time", () => {
  vi.setSystemTime(new Date("2026-10-02T11:18:00"));
  render(<DateCard invitation={invitation} />);

  expect(screen.getByText("幸福已开启")).toBeInTheDocument();
});

test("renders location buttons and timeline items", () => {
  render(
    <>
      <LocationCard invitation={{ ...invitation, mapUrl: "https://example.com/map" }} />
      <Timeline schedule={invitation.schedule} />
    </>
  );

  expect(screen.getByRole("button", { name: "复制地址" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "打开地图" })).toBeInTheDocument();
  expect(screen.getByText("婚礼流程")).toBeInTheDocument();
  expect(screen.getByText("婚礼仪式")).toBeInTheDocument();
});
