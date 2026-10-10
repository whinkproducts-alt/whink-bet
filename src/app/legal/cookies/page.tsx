export const metadata = { title: 'Cookie Policy — WhinkPredict' }

export default function CookiesPage() {
  return (
    <article className="prose-legal">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-wider"
          style={{ background: 'rgba(204,148,75,0.08)', border: '1px solid rgba(204,148,75,0.2)', color: '#CC944B' }}>
          Legal
        </div>
        <h1 className="text-3xl font-black text-white mb-2">Cookie Policy</h1>
        <p className="text-sm text-slate-500">Last updated: 1 October 2026 · Effective: 1 October 2026</p>
      </div>

      <Section title="1. What Are Cookies?">
        <p>Cookies are small text files stored on your device when you visit a website. They help websites
        function properly, remember your preferences, and provide information about how the site is used.</p>
        <p>WhinkPredict uses cookies and similar tracking technologies to deliver and improve the Service.</p>
      </Section>

      <Section title="2. Types of Cookies We Use">
        <CookieTable />
      </Section>

      <Section title="3. Essential Cookies (Always Active)">
        <p>These cookies are strictly necessary for the Service to function and cannot be disabled:</p>
        <ul>
          <li><strong className="text-white">whink_session</strong> — Your authentication session token. Required to keep you logged in.
          Expires at the end of your browser session or after 30 days (if you choose &quot;Remember me&quot;).</li>
          <li><strong className="text-white">CSRF token</strong> — Protects against cross-site request forgery attacks.</li>
          <li><strong className="text-white">Subscription state</strong> — Stores your plan level to serve the correct content tier.</li>
        </ul>
      </Section>

      <Section title="4. Performance and Analytics Cookies">
        <p>These help us understand how you use WhinkPredict so we can improve it. All data is aggregated
        and anonymised:</p>
        <ul>
          <li>Pages visited and time spent</li>
          <li>Features used and interactions</li>
          <li>Error tracking and performance metrics</li>
        </ul>
        <p>You can opt out of analytics cookies without affecting the core Service functionality.</p>
      </Section>

      <Section title="5. Preference Cookies">
        <p>These remember your settings and preferences to personalise your experience:</p>
        <ul>
          <li>Dashboard layout and display preferences</li>
          <li>Notification settings</li>
          <li>Sport and league filter preferences</li>
        </ul>
      </Section>

      <Section title="6. Third-Party Cookies">
        <p>WhinkPredict uses limited third-party services that may set their own cookies:</p>
        <ul>
          <li><strong className="text-white">Stripe:</strong> Payment processing. Required only when you make a payment. Stripe&apos;s
          cookies are governed by <a href="https://stripe.com/privacy" className="text-blue-400 hover:underline">Stripe&apos;s Privacy Policy</a>.</li>
        </ul>
        <p>We do not use advertising, tracking, or social media cookies.</p>
      </Section>

      <Section title="7. Managing Cookies">
        <p>You can control cookies through:</p>
        <ul>
          <li><strong className="text-white">Browser settings:</strong> Most browsers allow you to view, delete, or block cookies.
          Note that blocking essential cookies will prevent you from logging in or using the Service.</li>
          <li><strong className="text-white">In-app settings:</strong> Opt out of non-essential cookies in your account preferences.</li>
        </ul>
        <p>Links to cookie management for common browsers:</p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647" className="text-blue-400 hover:underline">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" className="text-blue-400 hover:underline">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" className="text-blue-400 hover:underline">Safari</a></li>
          <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-blue-400 hover:underline">Microsoft Edge</a></li>
        </ul>
      </Section>

      <Section title="8. Consent">
        <p>When you first visit WhinkPredict, you will be presented with a cookie notice. By continuing to
        use the Service, you consent to our use of essential cookies. Non-essential cookies require your
        explicit opt-in consent.</p>
        <p>You may withdraw consent for non-essential cookies at any time through your account settings
        or browser controls. Withdrawal does not affect the lawfulness of processing before withdrawal.</p>
      </Section>

      <Section title="9. Updates to This Policy">
        <p>We may update this Cookie Policy as our use of cookies changes. Material changes will be
        communicated via in-app notice. We encourage you to check this page periodically.</p>
      </Section>

      <Section title="10. Contact">
        <p>For questions about our use of cookies:<br />
        <a href="mailto:privacy@whinkpredict.com" className="text-blue-400 hover:underline">privacy@whinkpredict.com</a><br />
        Whink Apps · Whink Group</p>
      </Section>
    </article>
  )
}

function CookieTable() {
  const types = [
    { type: 'Essential', purpose: 'Authentication, security, core functionality', duration: 'Session / 30 days', canDisable: 'No' },
    { type: 'Performance', purpose: 'Analytics, error tracking, platform improvement', duration: 'Up to 12 months', canDisable: 'Yes' },
    { type: 'Preferences', purpose: 'User settings, layout, personalisation', duration: 'Up to 12 months', canDisable: 'Yes' },
    { type: 'Third-Party', purpose: 'Stripe payment processing', duration: 'Per Stripe policy', canDisable: 'Via Stripe' },
  ]
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            {['Type', 'Purpose', 'Duration', 'Can Disable?'].map(h => (
              <th key={h} className="text-left py-2 pr-4 text-xs font-bold text-slate-400 uppercase tracking-wider">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {types.map(({ type, purpose, duration, canDisable }) => (
            <tr key={type} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              <td className="py-3 pr-4 font-semibold text-white whitespace-nowrap">{type}</td>
              <td className="py-3 pr-4 text-slate-400">{purpose}</td>
              <td className="py-3 pr-4 text-slate-500 whitespace-nowrap">{duration}</td>
              <td className="py-3 pr-4">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{
                    background: canDisable === 'No' ? 'rgba(204,148,75,0.15)' : 'rgba(0,229,160,0.12)',
                    color: canDisable === 'No' ? '#CC944B' : '#00E5A0',
                  }}>
                  {canDisable}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold text-white mb-3 pb-2"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>{title}</h2>
      <div className="space-y-3 text-sm text-slate-400 leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_p]:text-slate-400">
        {children}
      </div>
    </section>
  )
}
