import Link from "next/link";

const merchantInfo = [
  { label: "販売業者", value: "合同会社ShioPan" },
  { label: "運営統括責任者", value: "大西志織" },
  {
    label: "所在地",
    value: "〒107-0062 東京都港区南青山2丁目2番15号",
  },
  { label: "営業時間", value: "平日 10:00-18:00" },
  {
    label: "メールアドレス",
    value: (
      <a
        href="mailto:info@shiopan.co.jp"
        className="text-orange-600 underline underline-offset-4"
      >
        info@shiopan.co.jp
      </a>
    ),
  },
  { label: "法人番号", value: "9010403036193" },
  {
    label: "電話番号",
    value: "ご請求いただいたお客様に遅滞なく開示いたします。",
  },
];

const transactionInfo = [
  { label: "販売価格", value: "各商品・サービスページに記載" },
  { label: "商品代金以外の必要料金", value: "なし" },
  { label: "お支払い方法", value: "クレジットカード決済" },
  { label: "お支払い時期", value: "商品購入時に即時決済" },
  { label: "商品の引渡し時期", value: "決済完了後、即時提供" },
];

const returnPolicy =
  "デジタルコンテンツの性質上、お客様都合による返品・交換は承っておりません。サービスの不具合が確認された場合は、状況を確認のうえ迅速に対応いたしますのでお問い合わせください。";

export default function TokushohoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-rose-50 to-amber-50">
      <main className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-16 sm:px-10 lg:px-12">
        <header className="rounded-3xl bg-white/90 p-8 shadow-lg shadow-orange-100/70 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Legal Notice
          </p>
          <h1 className="mt-4 text-3xl font-bold text-stone-900">
            特定商取引法に基づく表記
          </h1>
          <p className="mt-3 text-stone-600">
            合同会社ShioPanが提供するサービスに関する取引条件・連絡先を以下の通り定めます。
          </p>
        </header>

        <section className="rounded-3xl bg-white/95 p-8 shadow-lg shadow-orange-100/70">
          <h2 className="text-xl font-semibold text-stone-900">事業者情報</h2>
          <dl className="mt-6 grid gap-6 sm:grid-cols-2">
            {merchantInfo.map((item) => (
              <div
                key={item.label}
                className="space-y-2 rounded-2xl border border-orange-100/70 bg-orange-50/50 p-4"
              >
                <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                  {item.label}
                </dt>
                <dd className="text-stone-800 text-sm leading-relaxed">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="rounded-3xl bg-white/95 p-8 shadow-lg shadow-orange-100/70">
          <h2 className="text-xl font-semibold text-stone-900">取引条件</h2>
          <dl className="mt-6 space-y-4">
            {transactionInfo.map((item) => (
              <div key={item.label}>
                <dt className="text-sm font-semibold text-orange-600">
                  {item.label}
                </dt>
                <dd className="text-stone-700">{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="rounded-3xl bg-white/95 p-8 shadow-lg shadow-orange-100/70">
          <h2 className="text-xl font-semibold text-stone-900">
            返品・交換・キャンセル
          </h2>
          <p className="mt-3 text-stone-700">{returnPolicy}</p>
        </section>

        <div className="mb-10 flex flex-wrap gap-4 text-sm text-orange-600">
          <Link className="underline underline-offset-4" href="/">
            ← ホームへ戻る
          </Link>
          <Link className="underline underline-offset-4" href="/privacy">
            プライバシーポリシー
          </Link>
        </div>
      </main>
    </div>
  );
}
