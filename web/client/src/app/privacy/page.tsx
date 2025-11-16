import Link from "next/link";

const collectionItems = [
  "診断結果（回答内容、スコア、診断タイプ）",
  "アクセス情報（IPアドレス、ブラウザ情報、リファラー）",
  "メールアドレス（メルマガ登録時のみ）",
];

const usagePurposes = [
  "診断結果および関連サービスの提供",
  "サービス改善や品質向上のための分析",
  "個人を特定しない統計データの作成",
  "メールマガジンの配信（登録者のみ）",
];

const shareCases = [
  "利用者の同意がある場合",
  "法令に基づき開示が必要な場合",
  "人の生命、身体または財産の保護のために緊急で必要な場合",
];

const meta = {
  established: "2025年11月5日",
  updated: "2025年11月5日",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-rose-50 to-amber-50">
      <main className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-16 sm:px-10 lg:px-12">
        <header className="rounded-3xl bg-white/90 p-8 shadow-lg shadow-orange-100/70 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Privacy Policy
          </p>
          <h1 className="mt-4 text-3xl font-bold text-stone-900">
            プライバシーポリシー
          </h1>
          <p className="mt-3 text-stone-600">
            合同会社ShioPan（以下、「当社」）は、サービスをご利用いただく皆さまの個人情報を適切に取り扱うことを重要な責務と捉えています。以下の方針に基づき、個人情報の保護と安全管理を徹底します。
          </p>
        </header>

        <section className="rounded-3xl bg-white/95 p-8 shadow-lg shadow-orange-100/70">
          <h2 className="text-xl font-semibold text-stone-900">
            1. 個人情報の収集について
          </h2>
          <p className="mt-3 text-stone-600">
            当社は、サービス提供や改善に必要な範囲で以下の情報を取得します。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-stone-700">
            {collectionItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl bg-white/95 p-8 shadow-lg shadow-orange-100/70">
          <h2 className="text-xl font-semibold text-stone-900">
            2. 個人情報の利用目的
          </h2>
          <p className="mt-3 text-stone-600">
            収集した情報は、次の目的に限り利用いたします。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-stone-700">
            {usagePurposes.map((purpose) => (
              <li key={purpose}>{purpose}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl bg-white/95 p-8 shadow-lg shadow-orange-100/70">
          <h2 className="text-xl font-semibold text-stone-900">
            3. 個人情報の第三者提供
          </h2>
          <p className="mt-3 text-stone-600">
            以下の場合を除き、個人情報を第三者へ提供することはありません。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-stone-700">
            {shareCases.map((shareCase) => (
              <li key={shareCase}>{shareCase}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl bg-white/95 p-8 shadow-lg shadow-orange-100/70">
          <h2 className="text-xl font-semibold text-stone-900">
            4. Cookieの使用について
          </h2>
          <p className="mt-3 text-stone-600">
            利便性向上のためCookieを利用します。Cookieで個人が特定されることはありません。ブラウザの設定により、Cookieを無効化することも可能です。
          </p>
        </section>

        <section className="rounded-3xl bg-white/95 p-8 shadow-lg shadow-orange-100/70">
          <h2 className="text-xl font-semibold text-stone-900">
            5. セキュリティ対策
          </h2>
          <p className="mt-3 text-stone-600">
            個人情報の漏えい、滅失、毀損を防ぐため、アクセス制限や暗号化通信などの適切な安全管理策を講じています。必要に応じて継続的に体制を見直します。
          </p>
        </section>

        <section className="rounded-3xl bg-white/95 p-8 shadow-lg shadow-orange-100/70">
          <h2 className="text-xl font-semibold text-stone-900">
            6. プライバシーポリシーの変更
          </h2>
          <p className="mt-3 text-stone-600">
            法令の改定やサービス内容の変更に伴い、本ポリシーを改訂することがあります。変更後は本ページに掲載した時点で効力を生じます。
          </p>
        </section>

        <section className="rounded-3xl bg-white/95 p-8 shadow-lg shadow-orange-100/70">
          <h2 className="text-xl font-semibold text-stone-900">
            7. お問い合わせ
          </h2>
          <div className="mt-3 space-y-2 text-stone-700">
            <p>運営者：合同会社ShioPan</p>
            <p>所在地：〒107-0062 東京都港区南青山2丁目2番15号</p>
            <p>
              お問い合わせ先：
              <a
                href="mailto:info@shiopan.co.jp"
                className="text-orange-600 underline underline-offset-4"
              >
                info@shiopan.co.jp
              </a>
            </p>
          </div>
        </section>

        <section className="rounded-3xl bg-white/95 p-8 shadow-lg shadow-orange-100/70">
          <div className="flex flex-col gap-2 text-sm text-stone-600 sm:flex-row sm:items-center sm:justify-between">
            <p>制定日：{meta.established}</p>
            <p>最終更新日：{meta.updated}</p>
          </div>
        </section>

        <div className="mb-10 flex flex-wrap gap-4 text-sm text-orange-600">
          <Link className="underline underline-offset-4" href="/">
            ← ホームへ戻る
          </Link>
          <Link className="underline underline-offset-4" href="/tokushoho">
            特定商取引法に基づく表記
          </Link>
        </div>
      </main>
    </div>
  );
}
