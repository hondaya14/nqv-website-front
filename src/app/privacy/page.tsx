import { SiteHeader } from "@/src/components/site-header";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 container py-8 p-10">
        <nav className="flex items-center space-x-1 text-sm text-muted-foreground mb-8">
          <Link href="/" className="flex items-center hover:text-primary">
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-foreground">プライバシーポリシー</span>
        </nav>
        <div className="prose prose-gray dark:prose-invert max-w-none p-10">
          <h1 className="text-3xl font-bold mb-8">プライバシーポリシー</h1>
          
          <p className="text-muted-foreground mb-8">
            当サイト（以下、「本サイト」といいます。）は、利用者の皆様（以下、「ユーザー」といいます。）のプライバシーを尊重し、個人情報を適切に取り扱うことに努めています。本ポリシーでは、本サイトで収集する情報の種類、その利用方法、および保護方法についてご説明します。本サイトを利用される場合、本プライバシーポリシーの内容に同意したものとみなします。
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. 個人情報の定義</h2>
            <p>「個人情報」とは、個人に関する情報であって、氏名、生年月日、住所、電話番号、メールアドレスなど、特定の個人を識別できる情報をいいます。</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. 個人情報の収集方法</h2>
            <p>本サイトでは、以下のような場合に個人情報を収集することがあります。</p>
            <ul className="list-disc pl-6 mt-2">
              <li>メールでのお問い合わせ</li>
              <li>その他、ユーザーが任意で入力・送信する場合</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. 個人情報の利用目的</h2>
            <p>収集した個人情報は、以下の目的のために利用します。</p>
            <ul className="list-disc pl-6 mt-2">
              <li>ユーザーからのお問い合わせやご相談への対応</li>
              <li>本サイトのサービス運営上のご案内や連絡</li>
              <li>本サイトのサービス向上・改善や新サービスの検討・開発</li>
              <li>その他、あらかじめ明示した目的</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. 個人情報の第三者提供</h2>
            <p>本サイトでは、ユーザーご本人の同意がある場合や法令に基づき開示が必要とされる場合を除き、個人情報を第三者に提供することはありません。</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Cookie（クッキー）について</h2>
            <h3 className="text-xl font-semibold mb-2">5-1. Cookie の利用</h3>
            <p>本サイトでは、ユーザーの利便性向上やアクセス解析、広告配信のために Cookie（クッキー）を使用しています。Cookie は、ユーザーが本サイトを訪問した際にブラウザ内に保存される情報であり、ユーザー個人を特定できる情報は含まれません。</p>
            <p className="mt-2">ブラウザの設定により Cookie の受け取りを拒否することができますが、その場合、本サイトのサービスの一部がご利用いただけなくなる可能性があります。</p>

            <h3 className="text-xl font-semibold mb-2 mt-4">5-2. Google 広告 Cookie について</h3>
            <p>本サイトでは、第三者配信事業者である Google やその他の広告ネットワークを利用して広告を配信しています。Google を含む第三者配信事業者は、ユーザーが本サイトや他のウェブサイトに過去にアクセスした情報に基づいて適切な広告を表示するために、Cookie を使用することがあります。</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Google が広告 Cookie を使用することにより、ユーザーが本サイトや他のサイトにアクセスした際の情報に基づいて、Google やそのパートナーが適切な広告をユーザーに表示できます。</li>
              <li>ユーザーは、広告設定にてパーソナライズ広告を無効にできます。また、<a href="http://www.aboutads.info/choices/">www.aboutads.info</a> にアクセスして、パーソナライズ広告に使用される第三者配信事業者の Cookie を無効にすることも可能です。</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-4">5-3. 第三者配信事業者や広告ネットワークの利用</h3>
            <p>本サイトでは、Google 以外の第三者配信事業者や広告ネットワークの広告が掲載される場合があります。その場合、第三者配信事業者や広告ネットワークも Cookie を使用して、ユーザーが過去にアクセスしたウェブサイトの情報に基づく広告を配信することがあります。</p>
            <p className="mt-2">対象となる第三者配信事業者や広告ネットワークには、各事業者独自のプライバシーポリシーが適用されます。各事業者のプライバシーポリシーや Cookie に関する情報については、各事業者のウェブサイトをご参照ください。</p>
            <p className="mt-2">これらのウェブサイトにアクセスすることで、パーソナライズド広告の掲載に使用される Cookie を無効にできる場合があります。または <a href="http://www.aboutads.info/choices/">www.aboutads.info</a> にアクセスすることで、第三者配信事業者がパーソナライズド広告の掲載に使用する Cookie を無効にすることも可能です。</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. アクセス解析ツールについて</h2>
            <p>本サイトでは、サイトの利用状況を把握するためにアクセス解析ツールを使用する場合があります。これらのツールは、データ収集のために Cookie を使用していますが、収集されるデータは匿名であり、個人を特定するものではありません。</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. 個人情報の管理</h2>
            <p>本サイトは、個人情報の漏えい、滅失またはき損の防止その他の安全管理のために、合理的なセキュリティ対策を講じます。個人情報を取り扱う従業員や委託先に対して、適切な監督を行います。</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. 他サイトへのリンク</h2>
            <p>本サイトには、外部サイトへのリンクが含まれる場合がありますが、リンク先のサイトで行われる個人情報の取り扱いについては、本サイトは一切責任を負いません。リンク先のサイトのプライバシーポリシーをご確認ください。</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. 未成年の利用について</h2>
            <p>未成年のユーザーが本サイトを利用する場合、必ず保護者の方の同意を得てからご利用ください。本サイトでは、未成年のユーザーから意図的に個人情報を収集することはありません。</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. プライバシーポリシーの変更</h2>
            <p>本ポリシーの内容は、法令その他本サイトを運営する上で必要な場合に、予告なく変更されることがあります。最新の内容は本ページにて常にご確認いただけます。</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. お問い合わせ先</h2>
            <p>本ポリシーに関するお問い合わせは、下記の連絡先までお願いいたします。</p>
            <div className="mt-2">
              <p>メールアドレス：nqvno14@gmail.com</p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t">
            <p className="text-sm text-muted-foreground text-right">
              最終更新日：2024年3月15日
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 