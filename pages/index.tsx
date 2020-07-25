import React from "react";
import { Global } from "components/global";
import { Header } from "components/header";
import { FirstView } from "components/first-view";
import { ConceptVideo } from "components/concept-video";
import { Vision } from "components/vision";
import { Contents } from "components/contents";
import { StepUp } from "components/step-up";
import { Members } from "components/members";
import { Message } from "components/message";
import { Price } from "components/price";
import { Entry } from "components/entry";

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
