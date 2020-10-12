import Head from "next/head";
import { Faq } from "src/components/faq";
import { Footer } from "src/components/footer";
import { Header } from "src/components/header";
import { MainLayout } from "src/layouts/main";

export default function FaqPage(): JSX.Element {
  return (
    <>
      <Head>
        <title>IT KINGDOM - よくある質問</title>
      </Head>
      <MainLayout>
        <Header />
        <Faq />
        <Footer />
      </MainLayout>
    </>
  );
}
