export const metadata = { title: 'Terms of Service — WhinkPredict' }

export default function TermsPage() {
  return (
    <article className="prose-legal">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-wider"
          style={{ background: 'rgba(56,182,255,0.08)', border: '1px solid rgba(56,182,255,0.2)', color: '#38B6FF' }}>
          Legal
        </div>
        <h1 className="text-3xl font-black text-white mb-2">Terms of Service</h1>
        <p className="text-sm text-slate-500">Last updated: 1 October 2026 · Effective: 1 October 2026</p>
      </div>

      <Section title="1. Acceptance of Terms">
        <p>By accessing or using WhinkPredict (&quot;the Service&quot;), operated by Whink Apps, a product of Whink Group
        (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you agree to be bound by these Terms of Service. If you do not agree,
        you must not use the Service.</p>
      </Section>

      <Section title="2. Description of Service">
        <p>WhinkPredict is an AI-powered sports prediction platform that provides informational sports
        analytics and predictions. The Service includes:</p>
        <ul>
          <li>AI-generated sports predictions with confidence scores</li>
          <li>Performance analytics and tracking dashboards</li>
          <li>Naye&apos;s Picks — curated weekly elite prediction sets</li>
          <li>Free and Premium subscription tiers</li>
        </ul>
        <p className="font-semibold text-slate-300 mt-4">
          WhinkPredict is a data and analytics service only. We do not facilitate, accept, or process
          any bets or wagers. All betting or wagering activities are the sole responsibility of the user
          and must comply with applicable laws in their jurisdiction.
        </p>
      </Section>

      <Section title="3. Eligibility">
        <p>You must be at least 18 years of age (or the legal age of majority in your jurisdiction) to
        use WhinkPredict. By using the Service, you confirm that you meet this requirement.</p>
        <p>The Service is available only in jurisdictions where sports analytics and prediction services
        are lawfully permitted. It is your responsibility to ensure your use complies with local laws.</p>
      </Section>

      <Section title="4. Account Registration">
        <ul>
          <li>You must provide accurate and complete registration information.</li>
          <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
          <li>You are responsible for all activity that occurs under your account.</li>
          <li>You must notify us immediately of any unauthorised use of your account.</li>
          <li>We reserve the right to terminate accounts that violate these Terms.</li>
        </ul>
      </Section>

      <Section title="5. Subscription Plans and Payments">
        <p><strong className="text-white">Free Plan:</strong> Provides limited predictions per day and basic analytics at no cost.</p>
        <p><strong className="text-white">Premium Plan:</strong> $19 USD per month, billed monthly. Includes unlimited predictions,
        Naye&apos;s Picks, full analytics dashboard, and priority features.</p>
        <ul>
          <li>Payments are processed securely via Stripe.</li>
          <li>Subscriptions auto-renew monthly unless cancelled.</li>
          <li>You may cancel at any time from your account settings.</li>
          <li>Cancellation takes effect at the end of the current billing period.</li>
          <li>We reserve the right to change pricing with 30 days&apos; notice.</li>
        </ul>
      </Section>

      <Section title="6. Predictions Disclaimer">
        <p className="font-semibold text-amber-400">IMPORTANT — PLEASE READ CAREFULLY:</p>
        <p>All predictions, analytics, and content provided by WhinkPredict are for <strong className="text-white">informational
        and entertainment purposes only</strong>. No content constitutes financial, betting, or investment advice.</p>
        <ul>
          <li>Past performance of AI predictions does not guarantee future results.</li>
          <li>Confidence scores are statistical estimates, not guarantees of outcomes.</li>
          <li>Sports outcomes are inherently uncertain and cannot be predicted with certainty.</li>
          <li>We strongly encourage responsible gambling. Please set limits and seek help if needed.</li>
        </ul>
      </Section>

      <Section title="7. Intellectual Property">
        <p>All content, software, algorithms, brand assets, and materials on WhinkPredict are owned by
        or licensed to Whink Apps / Whink Group. You may not copy, reproduce, redistribute, or create
        derivative works without our express written permission.</p>
      </Section>

      <Section title="8. Prohibited Use">
        <p>You agree not to:</p>
        <ul>
          <li>Scrape, harvest, or automatically extract data from the Service</li>
          <li>Reverse-engineer, decompile, or attempt to access our AI models or algorithms</li>
          <li>Use the Service to provide competing commercial prediction services</li>
          <li>Violate any applicable law, regulation, or third-party rights</li>
          <li>Transmit malicious code or interfere with the Service&apos;s operation</li>
          <li>Attempt to gain unauthorised access to other user accounts or systems</li>
        </ul>
      </Section>

      <Section title="9. Limitation of Liability">
        <p>To the fullest extent permitted by law, Whink Apps / Whink Group shall not be liable for any
        indirect, incidental, special, or consequential damages arising from your use of the Service,
        including any losses arising from reliance on predictions or analytics.</p>
        <p>Our total aggregate liability shall not exceed the amounts paid by you for the Service in the
        three (3) months preceding the claim.</p>
      </Section>

      <Section title="10. Indemnification">
        <p>You agree to indemnify and hold harmless Whink Apps, Whink Group, and their officers,
        directors, employees, and agents from any claims, damages, or expenses arising from your use
        of the Service or violation of these Terms.</p>
      </Section>

      <Section title="11. Termination">
        <p>We reserve the right to suspend or terminate your account at any time for violation of these
        Terms, fraudulent activity, or for any reason at our discretion, with or without notice. Upon
        termination, your right to use the Service ceases immediately.</p>
      </Section>

      <Section title="12. Governing Law">
        <p>These Terms are governed by the laws of England and Wales. Any disputes shall be subject to
        the exclusive jurisdiction of the courts of England and Wales.</p>
      </Section>

      <Section title="13. Changes to Terms">
        <p>We may update these Terms at any time. Material changes will be notified via email or
        in-app notification. Continued use of the Service after changes constitutes acceptance of the
        new Terms.</p>
      </Section>

      <Section title="14. Contact">
        <p>For questions about these Terms, contact us at:<br />
        <a href="mailto:legal@whinkpredict.com" className="text-blue-400 hover:underline">legal@whinkpredict.com</a><br />
        Whink Apps · Whink Group</p>
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
