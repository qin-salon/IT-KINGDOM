import PrivacyPolicyPage from "src/pages/support/privacy-policy";
import { render } from "test/test-utils";

describe("PrivacyPolicyPage", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<PrivacyPolicyPage />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
