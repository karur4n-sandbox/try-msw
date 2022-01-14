import "../tests/matchMedia.mock";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../tests/utils/jest";
import { ButtonArea } from "./ButtonArea";

describe("ButtonArea", () => {
  it("renders a button", () => {
    renderWithProviders(<ButtonArea />);

    const button = screen.getByRole("button", {
      name: "押してね",
    });

    expect(button).toBeInTheDocument();
  });
});
