import { Faq } from "src/components/faq";
import { SupportLayout } from "src/layouts/support";

export default function FaqPage(): React.JSX.Element {
  return (
    <SupportLayout page="よくある質問">
      <Faq />
    </SupportLayout>
  );
}
