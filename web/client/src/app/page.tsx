import Link from "next/link";

const services = [
  {
    title: "イラスト・絵画の制作および販売",
    description:
      "ブランドの世界観や季節にあわせたオーダーメイドのビジュアルを、あたたかなタッチで仕上げます。",
  },
  {
    title: "SNS・YouTube向けのデザイン制作",
    description:
      "サムネイルから動画編集まで、ストーリーが伝わるクリエイティブでファンとの距離を縮めます。",
  },
  {
    title: "経費処理・コンテンツ制作支援",
    description:
      "制作現場の細やかな事務作業もワンチームで伴走し、安心して制作に集中できる体制を整えます。",
  },
];

const highlights = [
  {
    label: "丁寧なヒアリング",
    detail: "香ばしいパンを焼くように、温度感を逃さず企画を練り上げます。",
  },
  {
    label: "スピード感ある制作",
    detail: "小回りの利くチームが、発信サイクルに合わせて柔軟に動きます。",
  },
  {
    label: "安心のサポート体制",
    detail: "制作後もアーカイブ共有や改善提案まで継続フォローします。",
  },
];

const documents = [
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/tokushoho", label: "特定商取引法に基づく表記" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-orange-50 via-rose-50 to-amber-50 text-stone-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.9),rgba(255,255,255,0)),radial-gradient(circle_at_80%_0,rgba(253,186,116,.35),rgba(255,255,255,0))]" />
      <main className="relative z-10 mx-auto flex max-w-5xl flex-col gap-16 px-6 py-16 sm:px-10 lg:px-12">
        <header className="rounded-3xl bg-white/90 p-8 shadow-lg shadow-orange-100/70 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            合同会社ShioPan
          </p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-bold leading-tight text-stone-900 sm:text-4xl">
                心までやわらぐ、あたたかなクリエイティブを。
              </h1>
              <p className="mt-4 text-lg text-stone-600">
                イラストやSNSクリエイティブの制作から、経費処理・運用支援まで。
                焼きたてのパンのように、香り立つ優しさをまとったアウトプットで
                ブランドとファンをつなぎます。
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl bg-gradient-to-br from-orange-400 via-amber-400 to-rose-300 p-6 text-white shadow-md">
              <p className="text-sm uppercase tracking-widest text-white/80">
                お問い合わせ
              </p>
              <p className="text-2xl font-semibold">info@shiopan.co.jp</p>
              <p className="text-sm text-white/80">平日 10:00 - 18:00</p>
            </div>
          </div>
        </header>

        <section className="space-y-6 rounded-3xl bg-white/80 p-8 shadow-lg shadow-orange-100/70 backdrop-blur">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
              Service
            </p>
            <h2 className="text-2xl font-bold text-stone-900">事業内容</h2>
            <p className="text-stone-600">
              企画から制作、運用サポートまで一貫して伴走し、やさしく届く表現を磨きます。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col gap-3 rounded-2xl border border-orange-100/70 bg-gradient-to-b from-white to-orange-50/50 p-5 shadow-inner shadow-orange-100/50"
              >
                <div className="text-3xl">🥐</div>
                <h3 className="text-lg font-semibold text-stone-900">
                  {service.title}
                </h3>
                <p className="text-sm text-stone-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-gradient-to-br from-rose-100 via-orange-100 to-amber-100 p-8 shadow-lg shadow-orange-200/80">
          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="lg:w-1/3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
                Strength
              </p>
              <h2 className="mt-3 text-2xl font-bold text-stone-900">
                ShioPanが選ばれる理由
              </h2>
              <p className="mt-3 text-stone-700">
                お客さまと同じ温度感で思考を重ね、ふわっと心に残る世界観を丁寧に形にします。
              </p>
            </div>
            <div className="grid flex-1 gap-4 md:grid-cols-3">
              {highlights.map((highlight) => (
                <article
                  key={highlight.label}
                  className="rounded-2xl bg-white/70 p-5 shadow-inner shadow-orange-200/60"
                >
                  <h3 className="text-lg font-semibold text-stone-900">
                    {highlight.label}
                  </h3>
                  <p className="mt-2 text-sm text-stone-600">
                    {highlight.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white/90 p-8 shadow-lg shadow-orange-100/70 backdrop-blur">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
              Information
            </p>
            <h2 className="text-2xl font-bold text-stone-900">会社概要</h2>
            <p className="text-stone-600">
              合同会社ShioPan ｜ 〒107-0062 東京都港区南青山2丁目2番15号
            </p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-dashed border-orange-100 bg-orange-50/60 p-6">
              <p className="text-sm font-semibold text-orange-600">
                開発・サポート体制
              </p>
              <p className="mt-3 text-stone-700">
                少数精鋭のチームが、企画→制作→運用のサイクルをワンストップで支援。必要に応じて外部の専門家とも連携します。
              </p>
            </div>
            <div className="rounded-2xl border border-dashed border-orange-100 bg-orange-50/60 p-6">
              <p className="text-sm font-semibold text-orange-600">
                コミュニケーション
              </p>
              <p className="mt-3 text-stone-700">
                チャット・オンラインMTG・Notionなど、ご希望のツールに合わせて柔軟に進行管理します。
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {documents.map((doc) => (
              <Link
                key={doc.href}
                href={doc.href}
                className="inline-flex items-center gap-2 rounded-full border border-orange-200 px-4 py-2 text-sm font-semibold text-orange-700 transition hover:bg-orange-100"
              >
                {doc.label}
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </section>

        <footer className="pb-10 text-center text-sm text-stone-500">
          © {new Date().getFullYear()} 合同会社ShioPan. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
