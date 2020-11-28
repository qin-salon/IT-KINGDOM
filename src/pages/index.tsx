import type { GetStaticProps } from "next";
import { ConceptVideo } from "src/components/concept-video";
import { Contents } from "src/components/contents";
import { FirstView } from "src/components/first-view";
import { Members } from "src/components/members";
import { MessagePriceEntry } from "src/components/message-price-entry";
import { StepUp } from "src/components/step";
import { Vision } from "src/components/vision";
import { MainLayout } from "src/layouts/main";

type Props = { subscriberCount: number };

// eslint-disable-next-line func-style
export const getStaticProps: GetStaticProps<Props> = async () => {
  const URL = "https://www.googleapis.com/youtube/v3";
  const CHANNEL = "UCti6dG0zSAetLGGYcgNML4Q";
  try {
    const res = await fetch(`${URL}/channels?id=${CHANNEL}&part=statistics&key=${process.env.YOUTUBE_API_KEY}`);
    const json = await res.json();
    const count = json?.items[0]?.statistics?.subscriberCount;
    return { props: { subscriberCount: parseInt(count) }, revalidate: 60 * 60 };
  } catch (error) {
    console.error(error);
    return { props: { subscriberCount: 70000 }, revalidate: 60 * 60 };
  }
};

export default function IndexPage(props: Props): JSX.Element {
  return (
    <MainLayout
      page="しまぶーのIT大学オンラインサロン"
      description={`チャンネル登録者${props.subscriberCount}人のプログラミングYouTuber「しまぶー」によるオンラインサロン。ヤフーやクックパッドなど国内大手IT企業出身の現役エンジニアが運営。`}
    >
      <FirstView subscriberCount={props.subscriberCount} />
      <ConceptVideo />
      <Vision />
      <Contents />
      <StepUp />
      <Members />
      <MessagePriceEntry />
    </MainLayout>
  );
}
