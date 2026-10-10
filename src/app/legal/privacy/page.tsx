export const metadata = { title: 'Privacy Policy — WhinkPredict' }

export default function PrivacyPage() {
  return (
    <article className="prose-legal">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-wider"
          style={{ background: 'rgba(0,229,160,0.08)', border: '1px solid rgba(0,229,160,0.2)', color: '#00E5A0' }}>
          Legal
        </div>
        <h1 className="text-3xl font-black text-white mb-2">Privacy Policy</h1>
        <p className="text-sm text-slate-500">Last updated: 1 October 2026 · Effective: 1 October 2026</p>
      </div>

      <Section title="1. Introduction">
        <p>WhinkPredict (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), operated by Whink Apps, a product of Whink Group, is committed
        to protecting your personal data. This Privacy Policy explains how we collect, use, store, and share
        information when you use our Service.</p>
        <p>By using WhinkPredict, you agree to the collection and use of information in accordance with this policy.</p>
      </Section>

      <Section title="2. Information We Collect">
        <p><strong className="text-white">Information you provide directly:</strong></p>
        <ul>
          <li>Account registration details: name, email address, password</li>
          <li>Payment information (processed and stored by Stripe — we do not store card details)</li>
          <li>Subscription preferences and plan selection</li>
          <li>Communications you send to our support team</li>
        </ul>
        <p><strong className="text-white">Information collected automatically:</strong></p>
        <ul>
          <li>Usage data: pages visited, features used, time spent on the platform</li>
          <li>Device information: browser type, operating system, IP address</li>
          <li>Session cookies and authentication tokens</li>
          <li>Prediction interactions: which picks you view, save, or favourite</li>
        </ul>
      </Section>

      <Section title="3. How We Use Your Information">
        <ul>
          <li>To provide, maintain, and improve the WhinkPredict Service</li>
          <li>To process payments and manage your subscription</li>
          <li>To personalise your experience and prediction recommendations</li>
          <li>To send service-related emails (account confirmations, subscription updates)</li>
          <li>To send marketing communications (where you have opted in)</li>
          <li>To detect and prevent fraud, abuse, or security incidents</li>
          <li>To comply with legal obligations</li>
          <li>To analyse platform performance and improve AI prediction models (using anonymised, aggregated data)</li>
        </ul>
      </Section>

      <Section title="4. Legal Basis for Processing (GDPR)">
        <p>For users in the UK and European Economic Area, our legal bases for processing include:</p>
        <ul>
          <li><strong className="text-white">Contract performance:</strong> To provide the Service you have signed up for</li>
          <li><strong className="text-white">Legitimate interests:</strong> To improve the Service, prevent fraud, and ensure security</li>
          <li><strong className="text-white">Consent:</strong> For marketing communications and non-essential cookies</li>
          <li><strong className="text-white">Legal obligation:</strong> Where required by law</li>
        </ul>
      </Section>

      <Section title="5. Data Sharing and Third Parties">
        <p>We do not sell your personal data. We share data only with:</p>
        <ul>
          <li><strong className="text-white">Stripe:</strong> Payment processing (subject to Stripe&apos;s Privacy Policy)</li>
          <li><strong className="text-white">Hosting providers:</strong> Render.com for secure infrastructure hosting</li>
          <li><strong className="text-white">Analytics providers:</strong> Aggregated, anonymised analytics only</li>
          <li><strong className="text-white">Legal authorities:</strong> Where required by law or court order</li>
        </ul>
        <p>All third-party processors are bound by appropriate data processing agreements.</p>
      </Section>

      <Section title="6. Data Retention">
        <p>We retain your personal data for as long as your account is active or as needed to provide the Service.
        Upon account deletion:</p>
        <ul>
          <li>Account data is deleted within 30 days</li>
          <li>Anonymised, aggregated usage data may be retained indefinitely for platform improvement</li>
          <li>Payment records are retained as required by law (typically 7 years)</li>
        </ul>
      </Section>

      <Section title="7. Your Rights">
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li><strong className="text-white">Access:</strong> Request a copy of your personal data</li>
          <li><strong className="text-white">Rectification:</strong> Correct inaccurate or incomplete data</li>
          <li><strong className="text-white">Erasure:</strong> Request deletion of your personal data</li>
          <li><strong className="text-white">Portability:</strong> Receive your data in a portable format</li>
          <li><strong className="text-white">Restriction:</strong> Request we limit processing of your data</li>
          <li><strong className="text-white">Objection:</strong> Object to processing based on legitimate interests</li>
          <li><strong className="text-white">Withdraw consent:</strong> Where processing is based on your consent</li>
        </ul>
        <p>To exercise any rights, contact: <a href="mailto:privacy@whinkpredict.com" className="text-blue-400 hover:underline">privacy@whinkpredict.com</a></p>
      </Section>

      <Section title="8. Security">
        <p>We implement industry-standard security measures including:</p>
        <ul>
          <li>HTTPS encryption for all data in transit</li>
          <li>Hashed and salted password storage (bcrypt)</li>
          <li>Secure session management with JWT tokens</li>
          <li>Regular security reviews and updates</li>
        </ul>
        <p>No system is 100% secure. In the event of a data breach affecting your rights, we will notify you
        in accordance with applicable law.</p>
      </Section>

      <Section title="9. International Transfers">
        <p>Your data may be processed in countries outside your own, including the UK, EU, and US. Where
        data is transferred internationally, we ensure appropriate safeguards are in place in accordance
        with applicable data protection law.</p>
      </Section>

      <Section title="10. Children's Privacy">
        <p>WhinkPredict is not intended for users under 18 years of age. We do not knowingly collect
        personal data from children. If you believe a child has provided us with personal data, please
        contact us and we will delete it promptly.</p>
      </Section>

      <Section title="11. Changes to This Policy">
        <p>We may update this Privacy Policy periodically. Material changes will be communicated via email
        or in-app notice. We encourage you to review this policy regularly.</p>
      </Section>

      <Section title="12. Contact">
        <p>For privacy enquiries or to exercise your rights:<br />
        <a href="mailto:privacy@whinkpredict.com" className="text-blue-400 hover:underline">privacy@whinkpredict.com</a><br />
        Whink Apps · Whink Group</p>
        <p>You also have the right to lodge a complaint with your local data protection authority (in the UK,
        the ICO at <a href="https://ico.org.uk" className="text-blue-400 hover:underline">ico.org.uk</a>).</p>
      </Section>
    </article>
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
