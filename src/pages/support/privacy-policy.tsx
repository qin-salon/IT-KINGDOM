import React from "react";
import { MAIL_ADDRESS } from "src/constants";
import { SupportLayout } from "src/layouts/support";

export default function PrivacyPolicyPage(): JSX.Element {
  return (
    <SupportLayout page="プライバシーポリシー" styled>
      <h1>プライバシーポリシー</h1>
      <p>
        しまぶー（@shimabu_it）（以下「当サービス提供者」とします）は、オンラインサロン、またはオンラインサロンで提供するサービス（以下「本サービス」といいます）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定めます。
      </p>

      <h2>第１条 個人情報</h2>
      <p>
        「個人情報」とは、個人情報保護法第2条第1項により定義された個人情報、すなわち、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるものとします。
      </p>

      <h2>第２条 個人情報を収集・利用する目的</h2>
      <ol>
        <li>当サービス提供者が個人情報を収集・利用する目的は以下のとおりです。</li>
        <ol>
          <li>当サービスの提供・運営のため</li>
          <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
          <li>
            ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当サービス提供者が提供する関連サービスの案内のメールを送付するため
          </li>
          <li>有料サービスにおいて、ユーザーに利用料金を請求するため</li>
          <li>上記の利用目的に付随する目的</li>
        </ol>
      </ol>

      <h2>第３条 利用目的の変更</h2>
      <p>
        個人情報の利用目的を、関連性を有すると合理的に認められる範囲内において変更することがあり、変更した場合にはお客様に通知又は公表します。
      </p>

      <h2>第４条 個人情報の適正な取得</h2>
      <p>当サービス提供者は、適正に個人情報を取得し、偽りその他不正の手段により取得しません。</p>

      <h2>第５条 個人情報の安全管理</h2>
      <p>
        当サービス提供者は、個人情報の紛失、破壊、改ざん及び漏洩などのリスクに対して、個人情報の安全管理が図られるよう、当サービス提供者、また別途運営に携わる者に対し、必要かつ適切な監督を行います。また、当サービス提供者は、個人情報の取扱いの全部又は一部を委託する場合は、委託先において個人情報の安全管理が図られるよう、必要かつ適切な監督を行います。
      </p>

      <h2>第６条 個人情報の第三者提供</h2>
      <ol>
        <li>
          当サービス提供者は、個人情報保護法その他の法令により許容される場合を除き、お客様の同意を得ず、利用目的の達成に必要な範囲を超えて個人情報を取り扱いません。但し、次の場合はこの限りではありません。
        </li>
        <ol>
          <li>法令に基づく場合</li>
          <li>人の生命、身体又は財産の保護のために必要がある場合であって、お客様の同意を得ることが困難であるとき</li>
          <li>
            公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、お客様の同意を得ることが困難であるとき
          </li>
          <li>
            国の機関もしくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、お客様の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき
          </li>
        </ol>
        <li>前項の定めにかかわらず、次に掲げる場合は当該情報の提供先は第三者に該当しないものとします。</li>
        <ol>
          <li>当サービス提供者が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合</li>
          <li>合併その他の事由による事業の承継に伴って個人情報が提供される場合</li>
          <li>個人情報保護法の定めに基づき共同利用する場合</li>
        </ol>
      </ol>

      <h2>第７条 個人情報の開示</h2>
      <ol>
        <li>
          当サービス提供者は、本人から個人情報の開示を求められたときは、本人に対し遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない決定をした場合にはその旨を遅滞なく通知します。
        </li>
        <ol>
          <li>本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合</li>
          <li>当サービス提供者の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
          <li>その他法令に違反することとなる場合</li>
        </ol>
        <li>
          前項の定めにかかわらず、履歴情報および特性情報など、個人情報以外の情報については原則として開示いたしません。
        </li>
      </ol>

      <h2>第８条 個人情報の訂正および削除</h2>
      <ol>
        <li>
          ユーザーは、当サービス提供者の保有する自己の個人情報が誤った情報である場合には、個人情報の訂正、追加または削除（以下「訂正等」といいます）を請求することができます。
        </li>
        <li>
          当サービス提供者は、ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の訂正等を行うものとします。
        </li>
        <li>
          当サービス提供者は、前項の規定に基づき訂正等を行った場合、または個人情報保護法その他の法令により訂正等を行わない旨の決定をしたときは遅滞なく、これをユーザーに通知します。
        </li>
      </ol>

      <h2>第９条 個人情報の利用停止等</h2>
      <ol>
        <li>
          ユーザーは、ユーザー本人の個人情報が「あらかじめ公表された利用目的の範囲を超えて取り扱われているという理由」又は「偽りその他不正の手段により取得されたものであるという理由」により、個人情報保護法の定めに基づきその利用の停止又は消去（以下「利用停止等」といいます）を求めることができます。
        </li>
        <li>
          当サービス提供者は、ユーザーから前項の請求を受けて、その請求に理由があることが判明した場合には、本人からの請求であることを確認の上で、遅滞なく個人情報の利用停止等を行い、その旨をユーザーに通知します。但し、個人情報保護法その他の法令により、当サービス提供者が利用停止等の義務を負わない場合は、この限りではありません。
        </li>
      </ol>

      <h2>第１０条 Cookie（クッキー）その他の技術の利用</h2>
      <p>
        当サイトのサービスは、利用者の皆様によりよいサービスを提供するため、Cookie及びこれに類する技術を利用することがあります。これは個人を特定できる情報の収集を行えるものではなく、お客様のプライバシーを侵害することがありません。Cookieを無効化されたいユーザーは、ウェブブラウザの設定を変更することによりCookieを無効化することができます。
      </p>
      <p>
        ※Cookie(クッキー)とは、サーバーコンピュータからのお客様のブラウザに送信され、お客様が使用しているコンピュータのハードディスクに蓄積される情報です。
      </p>

      <h2>第１１条 継続的改善</h2>
      <ol>
        <li>
          当サービス提供者は、個人情報の取り扱いに関する運用状況を適宜見直し、継続的な改善に努めるものとし、必要に応じて、プライバシーポリシーを変更することがあります。本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく変更することができるものとします。
        </li>
        <li>変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。</li>
      </ol>

      <h2>第１２条 お問い合わせ窓口</h2>
      <p>
        開示等のお申出、ご意見、ご質問、苦情、その他個人情報の取り扱いに関するお問い合わせは、下記の窓口までお願いいたします。
      </p>
      <p>Eメールアドレス: {MAIL_ADDRESS}</p>

      <time>2020年10月15日 制定</time>
    </SupportLayout>
  );
}
