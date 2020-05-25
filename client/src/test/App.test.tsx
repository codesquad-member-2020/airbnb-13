describe("example test", () => {
  it("this is working fine", () => {
    const a = 1;
    expect(a).toBe(1);
  });
});

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "@/App";

describe("<ErrorPage />", () => {
  it("renders 잘못된 경로입니다", () => {
    const { getByText } = render(<App />);
    const body = getByText("안녕 친구들! 너는 누구니?");
    expect(body).toBeInTheDocument();
  });
});
