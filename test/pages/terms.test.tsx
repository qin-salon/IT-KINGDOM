import TermsPage from "src/pages/support/terms";
import { render } from "test/test-utils";

describe("TermsPage", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<TermsPage />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
