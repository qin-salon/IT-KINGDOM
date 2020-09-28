import { ConceptVideo } from "src/components/concept-video";
import { Contents } from "src/components/contents";
import { Entry } from "src/components/entry";
import { FirstView } from "src/components/first-view";
import { Global } from "src/components/global";
import { Header } from "src/components/header";
import { Members } from "src/components/members";
import { Message } from "src/components/message";
import { Price } from "src/components/price";
import { StepUp } from "src/components/step-up";
import { Vision } from "src/components/vision";

export default function IndexPage(): JSX.Element {
  return (
    <Global>
      <Header />
      <FirstView />
      <ConceptVideo />
      <Vision />
      <Contents />
      <StepUp />
      <Members />
      <Message />
      <Price />
      <Entry />
    </Global>
  );
}
