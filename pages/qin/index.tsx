import React from "react";
import SalonLayout from "components/salon-layout";

const QinTopPage = (): JSX.Element => (
  <SalonLayout>
    <img src="/map.png" />

    <hr />

    <h1>Qast</h1>
    <p>国内の知（ナレッジ）を結集したツール</p>
    <p>
      メモ機能でみんなの書いた記事を読むことができる。国王しまぶーも頻繁に記事を書いているぞ。
      読むだけじゃなく、学んだことは積極的に記事にしていこう。アウトプットで知識を言語化することでより学びが深まるぞ。
    </p>
    <p>
      また分からないところはQ&A機能を使おう。匿名で質問することができるので気軽に尋ねることができるぞ。
      コミュニティのみんなが優しく答えてくれるはずだ。また他の人が質問した際には積極的に答えてあげよう。
    </p>
    <p>
      またQastで記事を書いたり、質問に回答をしたり、またはリアクションをすると貢献ポイントが貯まるぞ。
      この国のためにどれだけ貢献したかが可視化される。ぜひ国内の発展に寄与してくれぃ！！
    </p>

    <a target="_blank" rel="noopener noreferrer" href="https://qast.jp/">
      Qastを使う
    </a>

    <hr />

    <h1>Discord</h1>
    <p>国内での連絡を行うためのツール</p>
    <p>
      DiscordのText Channelを使ってサロン内のやり取りを行っているぞ。
      サロンメンバーとの交流はこのチャットを通じて行われる。
      重要な連絡やオフ会の相談毎もここで行われるから頻繁に見ることをオススメするぞ。
    </p>
    <p>
      またDiscordにはVoice Channelというものがある。これを使うと音声通話やビデオ通話が可能だ。
      国王しまぶーがラジオ感覚で話すこともあるし、メンバー同士のオンライン交流会もこれを使う予定だ。
      ぜひ使い方を覚えていってくれぃ！!
    </p>

    <a target="_blank" rel="noopener noreferrer" href="https://discord.com/">
      Discordを使う
    </a>

    <style jsx>{`
      img {
        max-width: 100%;
      }
    `}</style>
  </SalonLayout>
);

export default QinTopPage;
