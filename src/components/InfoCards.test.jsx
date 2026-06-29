import { render, screen } from "@testing-library/react";
import { invitation } from "../invitationConfig";
import DateCard from "./DateCard";
import LocationCard from "./LocationCard";
import Timeline from "./Timeline";

test("shows a static date summary when countdown is disabled", () => {
  render(<DateCard invitation={invitation} />);

  expect(screen.getByText("2026年10月1日")).toBeInTheDocument();
  expect(screen.getByText("16:00")).toBeInTheDocument();
  expect(screen.getByText("中午和晚上，恭候赴约")).toBeInTheDocument();
  expect(screen.queryByText(/距离婚礼还有/)).not.toBeInTheDocument();
});

test("renders configured location buttons and timeline items", () => {
  render(
    <>
      <LocationCard invitation={invitation} />
      <Timeline schedule={invitation.schedule} />
    </>
  );

  expect(screen.getByRole("button", { name: "复制地址" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "打开地图" })).toBeInTheDocument();
  expect(screen.getByText("婚礼流程")).toBeInTheDocument();
  expect(screen.getByText("婚礼开始")).toBeInTheDocument();
});
