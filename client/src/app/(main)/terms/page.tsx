import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Inkaer",
  description:
    "Read the Terms of Service for Inkaer to understand the rules, responsibilities, and conditions for using our platform and services.",
  openGraph: {
    title: "Terms of Service | Inkaer",
    description:
      "Read the Terms of Service for Inkaer — the terms apply to the use of our platform and services.",
    url: "https://inkaer.com/terms",
    siteName: "Inkaer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Inkaer",
    description:
      "Review Inkaer's Terms of Service to understand site usage rules and responsibilities.",
  },
};

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="py-16">
        <div className="mx-auto max-w-4xl padding">
          <div className="text-center mb-12">
            <h1 className="text-bold-3xl">Terms and Conditions</h1>
            <p className="mt-4 desc">Last updated: January 11, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">1. Acceptance of Terms</h2>
              <p className="text-small mb-4">
                By engaging with Inkaer&apos;s services (whether as an employer or a
                candidate), you agree to be bound by the terms of this
                agreement. If you do not agree, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">2. Service Description</h2>
              <p className="text-small mb-4">
                Inkaer operates as a recruiting and talent-matching agency
                focused on engineering talent. Our services include:
              </p>
              <ul className="list-disc list-inside text-small mb-4 space-y-2">
                <li>Candidate sourcing, vetting, and representation</li>
                <li>Technical portfolio assessment and verification</li>
                <li>Candidate shortlisting and presentation to employers</li>
                <li>
                  Interview coordination, support, and recording for quality and
                  verification purposes
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">
                3. User Responsibilities
              </h2>

              <h3 className="desc-bold mb-3">Employers</h3>
              <p className="text-small mb-4">Employers agree to:</p>
              <ul className="list-disc list-inside text-small mb-6 space-y-2">
                <li>
                  Provide accurate and complete job descriptions and hiring
                  requirements
                </li>
                <li>
                  Use candidate information only for legitimate hiring purposes
                </li>
                <li>
                  Treat candidate data and interview recordings as confidential
                </li>
                <li>
                  Comply with all applicable labor, employment, and data
                  protection laws
                </li>
              </ul>

              <h3 className="desc-bold mb-3">Candidates</h3>
              <p className="text-small mb-4">Candidates agree to:</p>
              <ul className="list-disc list-inside text-small mb-4 space-y-2">
                <li>
                  Provide accurate, complete, and truthful information in their
                  resumes, portfolios, and interviews
                </li>
                <li>
                  Submit original work for portfolio verification and
                  assessments (plagiarism, AI-generated work, or third-party
                  projects are prohibited)
                </li>
                <li>
                  Authorize Inkaer to:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>
                      Record interviews conducted through our platform or
                      coordination process
                    </li>
                    <li>Store such recordings securely</li>
                    <li>
                      Share interview recordings, portfolio submissions, and
                      assessment results with prospective employers for hiring
                      consideration
                    </li>
                  </ul>
                </li>
                <li>
                  Represent themselves honestly in interviews and communications
                </li>
                <li>
                  Respect the confidentiality of any assessments, interview
                  questions, or employer information provided through Inkaer
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">4. Payment Terms</h2>

              <h3 className="desc-bold mb-3">Employers</h3>
              <ul className="list-disc list-inside text-small mb-6 space-y-2">
                <li>
                  Our fees are success-based, calculated as a percentage of the
                  candidate&apos;s base annual salary.
                </li>
                <li>
                  The specific fee percentage and payment terms will be
                  confirmed in writing prior to engagement.
                </li>
                <li>No upfront fees are required.</li>
                <li>Invoices are due within 30 days of a successful hire.</li>
                <li>
                  Refund/replacement guarantee: If the candidate leaves or is
                  terminated for performance-related reasons within 90 days,
                  Inkaer will provide a replacement candidate or a partial
                  refund, as specified in the written agreement.
                </li>
                <li>
                  Late Payment & Collection: Any invoices not paid within 30
                  days may incur interest at a rate of 1.5% per month (18%
                  annually) or the maximum permitted by law, whichever is lower.
                  Inkaer reserves the right to suspend ongoing services,
                  withdraw candidates from active processes, and pursue legal or
                  collection remedies for unpaid balances.
                </li>
              </ul>

              <h3 className="desc-bold mb-3">Candidates</h3>
              <ul className="list-disc list-inside text-small mb-4 space-y-2">
                <li>
                  Candidates will never be charged for portfolio submission,
                  interviews, or representation to employers.
                </li>
                <li>
                  Inkaer does not request payment from candidates under any
                  circumstance.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">5. Confidentiality</h2>
              <p className="text-small mb-4">
                We maintain strict confidentiality regarding:
              </p>
              <ul className="list-disc list-inside text-small mb-4 space-y-2">
                <li>Client company details and hiring requirements</li>
                <li>Candidate personal and professional information</li>
                <li>
                  Portfolio submissions, interview recordings, and assessment
                  results
                </li>
                <li>Interview feedback and hiring decisions</li>
                <li>Any proprietary information shared during the process</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">
                6. Candidate Disqualification & Withdrawal
              </h2>
              <p className="text-small mb-4">
                Inkaer reserves the right to disqualify, suspend, or withdraw
                candidates from consideration if any of the following occur:
              </p>
              <ul className="list-disc list-inside text-small mb-4 space-y-2">
                <li>
                  Submission of false, misleading, or incomplete information
                </li>
                <li>
                  Portfolio plagiarism, AI-generated submissions, or
                  unauthorized third-party work
                </li>
                <li>
                  Refusal to consent to interview recording or required
                  assessments
                </li>
                <li>
                  Ghosting (failure to respond to communication or attend
                  scheduled interviews without valid reason)
                </li>
                <li>Unprofessional conduct during the hiring process</li>
                <li>
                  Withdrawal from the process after presentation to employers
                  without prior notice
                </li>
              </ul>
              <p className="text-small mb-4">
                Disqualified candidates may be permanently barred from future
                opportunities through Inkaer.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-small mb-4">
                Inkaer is not liable for any indirect, incidental, special, or
                consequential damages, including but not limited to loss of
                opportunity, loss of data, or reputational impact, arising from
                participation in or use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">
                8. Intellectual Property
              </h2>
              <ul className="list-disc list-inside text-small mb-4 space-y-2">
                <li>
                  Employers retain ownership of any proprietary materials shared
                  with Inkaer.
                </li>
                <li>
                  Candidates retain ownership of their submitted work but grant
                  Inkaer a license to use it solely for assessment, interview
                  recording, and employer representation.
                </li>
                <li>
                  All Inkaer processes, methods, and platform content remain the
                  property of Inkaer.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">9. Termination</h2>
              <p className="text-small mb-4">
                Inkaer reserves the right to terminate or suspend services, with
                or without notice, if either an employer or candidate breaches
                these terms, provides false information, or misuses the
                platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">10. Changes to Terms</h2>
              <p className="text-small mb-4">
                We may update these Terms at our discretion. Material changes
                will be communicated in advance, with at least 30 days&apos; notice
                where possible.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">
                11. Contact Information
              </h2>
              <p className="text-small mb-4">
                For questions about these Terms and Conditions, please contact:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-small">
                  Email: legal@inkaer.com
                  <br />
                  Phone: +1 (647) 696-3447
                  <br />
                  Address: 2967 Dundas St W, 546D, Toronto, Ontario M6P 1Z2, CA
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Terms;
