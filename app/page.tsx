export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-amber-50 via-white to-rose-50 dark:from-black dark:via-zinc-950 dark:to-black">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-rose-200/40 blur-3xl dark:bg-rose-500/10" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-amber-200/50 blur-3xl dark:bg-amber-400/10" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-500/10" />

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 py-16">
        <div className="mb-10 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-600 text-2xl text-white shadow-lg shadow-amber-600/30">
            🍽️
          </div>
          <div className="text-left">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Lomiabu</h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Modern East African Kitchen</p>
          </div>
        </div>

        <section className="mx-auto w-full max-w-3xl rounded-3xl border border-white/40 bg-white/60 p-10 text-center backdrop-blur-md dark:border-white/10 dark:bg-white/5">
          <p className="mx-auto inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-1 text-xs font-medium uppercase tracking-wider text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300">
            Opening Soon
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-zinc-900 sm:text-5xl dark:text-white">
            A fresh dining experience is simmering
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            We’re crafting seasonal plates, open-flame flavors, and warm hospitality.
            Sign up to be first in line for our grand opening and tastings.
          </p>

          <div className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="h-12 w-full rounded-full border border-zinc-200/80 bg-white/70 px-5 text-zinc-900 outline-none backdrop-blur placeholder:text-zinc-400 focus:border-amber-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
            />
            <button className="h-12 shrink-0 rounded-full bg-amber-600 px-6 font-medium text-white shadow-lg shadow-amber-600/30 transition hover:bg-amber-700">
              Notify Me
            </button>
          </div>

          <div className="mt-6 text-xs text-zinc-500 dark:text-zinc-400">
            By joining, you agree to receive updates about our opening.
          </div>
        </section>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 backdrop-blur dark:bg-white/5">
            <span className="text-lg">🫖</span>
            Spice-infused teas
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 backdrop-blur dark:bg-white/5">
            <span className="text-lg">🔥</span>
            Open-fire grilling
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 backdrop-blur dark:bg-white/5">
            <span className="text-lg">🥘</span>
            Seasonal stews
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 backdrop-blur dark:bg-white/5">
            <span className="text-lg">🥗</span>
            Market-fresh sides
          </span>
        </div>

        <footer className="mt-16 flex flex-col items-center gap-4 text-center text-sm text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-3">
            <a href="#" className="rounded-full bg-white/60 px-3 py-1 backdrop-blur transition hover:bg-white/90 dark:bg-white/5 dark:hover:bg-white/10">Instagram</a>
            <a href="#" className="rounded-full bg-white/60 px-3 py-1 backdrop-blur transition hover:bg-white/90 dark:bg-white/5 dark:hover:bg-white/10">TikTok</a>
            <a href="#" className="rounded-full bg-white/60 px-3 py-1 backdrop-blur transition hover:bg-white/90 dark:bg-white/5 dark:hover:bg-white/10">X</a>
          </div>
          <div>© {new Date().getFullYear()} Lomiabu. All rights reserved.</div>
        </footer>
      </main>
    </div>
  );
}
