import IndexPage from "src/pages";
import { render } from "test/test-utils";

describe("Index page", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<IndexPage subscriberCount={70000} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
