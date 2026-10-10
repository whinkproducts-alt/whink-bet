export const metadata = { title: 'Refund Policy — WhinkPredict' }

export default function RefundPage() {
  return (
    <article className="prose-legal">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-wider"
          style={{ background: 'rgba(56,182,255,0.08)', border: '1px solid rgba(56,182,255,0.2)', color: '#38B6FF' }}>
          Legal
        </div>
        <h1 className="text-3xl font-black text-white mb-2">Refund Policy</h1>
        <p className="text-sm text-slate-500">Last updated: 1 October 2026 · Effective: 1 October 2026</p>
      </div>

      <div className="p-4 rounded-xl mb-8"
        style={{ background: 'rgba(0,229,160,0.06)', border: '1px solid rgba(0,229,160,0.18)' }}>
        <p className="text-sm text-slate-300 leading-relaxed">
          <strong className="text-white">Summary:</strong> We offer a 7-day money-back guarantee on new Premium subscriptions.
          After 7 days, subscriptions are non-refundable but you can cancel at any time to stop future charges.
        </p>
      </div>

      <Section title="1. Free Plan">
        <p>The WhinkPredict Free Plan is available at no charge. No payment is required, and therefore
        no refund is applicable to Free Plan usage.</p>
      </Section>

      <Section title="2. Premium Subscription — 7-Day Money-Back Guarantee">
        <p>If you are a new WhinkPredict Premium subscriber and are not satisfied with the Service, you
        may request a full refund within <strong className="text-white">7 days of your initial subscription payment</strong>.</p>
        <p>To qualify for the money-back guarantee:</p>
        <ul>
          <li>The request must be submitted within 7 calendar days of the original payment date</li>
          <li>The refund applies to your first payment only (not renewals)</li>
          <li>You must not have previously received a refund for WhinkPredict</li>
          <li>Your account must not have been terminated for violation of our Terms of Service</li>
        </ul>
      </Section>

      <Section title="3. Subscription Renewals">
        <p>Monthly subscription renewals are <strong className="text-white">non-refundable</strong>. If you wish to avoid being
        charged for the next billing period, you must cancel your subscription at least 24 hours before
        your renewal date.</p>
        <p>You can cancel at any time from your account dashboard under Settings → Subscription → Cancel Plan.
        Cancellation is effective immediately and prevents future charges. You retain Premium access
        until the end of your current paid billing period.</p>
      </Section>

      <Section title="4. Partial Refunds">
        <p>WhinkPredict does not offer partial or pro-rated refunds for unused days within a billing
        period, except where required by applicable consumer protection law.</p>
      </Section>

      <Section title="5. Exceptional Circumstances">
        <p>We review refund requests outside the standard policy on a case-by-case basis for:</p>
        <ul>
          <li>Significant technical issues that prevented access to core features for an extended period</li>
          <li>Duplicate charges due to billing errors</li>
          <li>Unauthorised charges resulting from account compromise (subject to investigation)</li>
        </ul>
        <p>We are not required to issue refunds in exceptional circumstances but will aim to handle
        genuine cases fairly.</p>
      </Section>

      <Section title="6. Chargebacks">
        <p>If you initiate a chargeback or dispute with your bank without first contacting us, we reserve
        the right to suspend your account pending resolution. We encourage you to contact our support
        team first — we aim to resolve issues promptly and fairly.</p>
      </Section>

      <Section title="7. How to Request a Refund">
        <p>To request a refund, contact our support team within the applicable timeframe:</p>
        <ul>
          <li>Email: <a href="mailto:support@whinkpredict.com" className="text-blue-400 hover:underline">support@whinkpredict.com</a></li>
          <li>Subject line: <strong className="text-white">Refund Request — [Your Account Email]</strong></li>
          <li>Include: your account email, payment date, and reason for the request</li>
        </ul>
        <p>We aim to respond to all refund requests within <strong className="text-white">2 business days</strong>.
        Approved refunds are processed within <strong className="text-white">5–10 business days</strong> and returned
        to the original payment method via Stripe.</p>
      </Section>

      <Section title="8. Consumer Rights">
        <p>Nothing in this Refund Policy limits or excludes your statutory rights under applicable
        consumer protection laws (including UK Consumer Rights Act 2015 and EU Consumer Rights Directive).
        If you believe your statutory rights have been violated, please contact us or your local
        consumer protection authority.</p>
      </Section>

      <Section title="9. Changes to This Policy">
        <p>We may update this Refund Policy from time to time. Changes will be communicated via email or
        in-app notice and will apply to subscriptions initiated after the effective date of the change.</p>
      </Section>

      <Section title="10. Contact">
        <p>For refund enquiries:<br />
        <a href="mailto:support@whinkpredict.com" className="text-blue-400 hover:underline">support@whinkpredict.com</a><br />
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
