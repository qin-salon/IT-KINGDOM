import FaqPage from "src/pages/faq";
import { render } from "test/test-utils";

describe("FaqPage", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<FaqPage />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
