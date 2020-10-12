import CommercePage from "src/pages/support/commerce";
import { render } from "test/test-utils";

describe("CommercePage", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<CommercePage />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
