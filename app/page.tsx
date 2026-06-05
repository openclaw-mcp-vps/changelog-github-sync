export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Developer Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-sync GitHub releases<br />
          <span className="text-[#58a6ff]">to changelog pages</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Connect your GitHub repos and automatically generate beautiful, hosted changelog pages from your releases and PR descriptions — no manual updates ever again.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started — $12/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">Cancel anytime. No credit card required to try.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-24">
        {[
          { title: "GitHub OAuth", desc: "Connect repos in seconds with secure OAuth authentication." },
          { title: "Auto-sync", desc: "Releases and PRs are fetched and published automatically." },
          { title: "Custom Templates", desc: "Brand your changelog with fully customizable page templates." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-24" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Unlimited repositories",
              "Automatic release sync",
              "PR description parsing",
              "Custom changelog templates",
              "Hosted changelog pages",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does the GitHub sync work?",
              a: "You authenticate with GitHub via OAuth, select your repositories, and we automatically poll for new releases and merged PRs. Changes are reflected on your changelog page within minutes."
            },
            {
              q: "Can I customize how my changelog looks?",
              a: "Yes. We provide a set of templates you can customize with your brand colors, logo, and layout preferences. No coding required."
            },
            {
              q: "What happens if I cancel my subscription?",
              a: "Your changelog pages remain accessible in read-only mode for 30 days after cancellation. You can export your data at any time."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} Changelog GitHub Sync. All rights reserved.
      </footer>
    </main>
  )
}
