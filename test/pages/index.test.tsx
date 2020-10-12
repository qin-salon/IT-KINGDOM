import IndexPage from "src/pages";
import CommercePage from "src/pages/support/commerce";
import PrivacyPolicyPage from "src/pages/support/privacy-policy";
import TermsPage from "src/pages/support/terms";
import { render } from "test/test-utils";

describe("IndexPage", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<IndexPage subscriberCount={70000} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("TermsPage", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<TermsPage />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("PrivacyPolicyPage", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<PrivacyPolicyPage />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("CommercePage", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<CommercePage />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
