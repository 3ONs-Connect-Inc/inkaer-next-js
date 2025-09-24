import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Inkaer",
  description:
    "Read Inkaer's Privacy Policy to learn how we collect, use, and protect your personal information when you visit our website or use our services.",
  openGraph: {
    title: "Privacy Policy – Inkaer",
    description:
      "Read Inkaer's Privacy Policy to learn how we collect, use, and protect your personal information when you visit our website or use our services.",
    url: "https://inkaer.com/privacy", 
    siteName: "Inkaer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy – Inkaer",
    description:
      "Read Inkaer's Privacy Policy to learn how we collect, use, and protect your personal information when you visit our website or use our services.",
  },
};
const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="py-16">
        <div className="mx-auto max-w-4xl padding">
          <div className="text-center mb-12">
            <h1 className="text-bold-3xl ">Privacy Policy</h1>
            <p className="mt-4 desc">Last updated: January 11, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">
                1. Information We Collect
              </h2>
              <p className="text-small mb-4">
                We collect information you provide directly to us, such as when
                you create an account, apply for a role, use our services, or
                contact us. This may include:
              </p>

              <h3 className="desc-bold mb-3">For Candidates</h3>
              <ul className="list-disc list-inside text-small mb-6 space-y-2">
                <li>
                  Personal information (name, email address, phone number,
                  location)
                </li>
                <li>
                  Professional information (resume, work history, skills,
                  portfolio submissions)
                </li>
                <li>
                  Interview recordings, assessments, and related evaluation data
                </li>
                <li>Communication preferences and feedback</li>
              </ul>

              <h3 className="desc-bold mb-3">For Employers</h3>
              <ul className="list-disc list-inside text-small mb-4 space-y-2">
                <li>Company information (company name, industry, size)</li>
                <li>
                  Contact information (name, role, email address, phone number)
                </li>
                <li>Hiring requirements and job descriptions</li>
                <li>Communication preferences and feedback</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-small mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-small mb-4 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>
                  Verify candidate originality, credentials, and technical
                  skills
                </li>
                <li>Match candidates with suitable job opportunities</li>
                <li>
                  Share verified candidate profiles, portfolios, and interview
                  recordings with employers
                </li>
                <li>Communicate with you about opportunities and services</li>
                <li>
                  Process transactions and send related information (employers
                  only)
                </li>
                <li>Send technical notices, updates, and support messages</li>
                <li>
                  Respond to your comments, questions, and customer service
                  requests
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">3. Information Sharing</h2>
              <p className="text-small mb-4">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties except:
              </p>
              <ul className="list-disc list-inside text-small mb-4 space-y-2">
                <li>With your explicit consent</li>
                <li>
                  To facilitate candidate presentation and job matching with
                  employers
                </li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights, property, or safety</li>
                <li>
                  With service providers who assist in our operations (e.g.,
                  data storage, communication tools)
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">
                4. Interview Recordings & Assessments
              </h2>
              <ul className="list-disc list-inside text-small mb-4 space-y-2">
                <li>
                  Candidates authorize Inkaer to record interviews conducted
                  through our platform or coordination process.
                </li>
                <li>
                  These recordings are used strictly for candidate verification,
                  quality review, and presentation to potential employers.
                </li>
                <li>
                  Recordings are stored securely and shared only with employers
                  involved in the hiring process.
                </li>
                <li>
                  Refusal to consent to recording may disqualify a candidate
                  from further participation.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">5. Data Security</h2>
              <p className="text-small mb-4">
                We implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction, including:
              </p>
              <ul className="list-disc list-inside text-small mb-4 space-y-2">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication requirements</li>
                <li>Employee training on data protection practices</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">6. Data Retention</h2>
              <p className="text-small mb-4">
                We retain your information only as long as necessary to provide
                our services and fulfill the purposes outlined in this policy.
              </p>
              <ul className="list-disc list-inside text-small mb-4 space-y-2">
                <li>
                  Account information: Until account deletion is requested
                </li>
                <li>
                  Candidate profiles and interview recordings: Up to 3 years
                  after last activity
                </li>
                <li>
                  Communication records: Up to 7 years for business purposes
                </li>
                <li>
                  Transaction data: As required by law and accounting standards
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">7. Your Rights</h2>
              <p className="text-small mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-small mb-4 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>
                  Delete your personal information (subject to legal/contractual
                  obligations)
                </li>
                <li>Object to or restrict processing of your information</li>
                <li>Request a copy of your data (data portability)</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="text-small mb-4">
                To exercise your rights, contact us using the details below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">
                8. Cookies and Tracking
              </h2>
              <p className="text-small mb-4">
                We use cookies and similar tracking technologies to collect and
                use personal information. For more details, please refer to our
                Cookie Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">
                9. Third-Party Services
              </h2>
              <p className="text-small mb-4">
                Our service may contain links to external sites not operated by
                Inkaer. If you click on a third-party link, you will be directed
                to that site. We encourage you to review the Privacy Policy of
                every site you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">
                10. International Data Transfers
              </h2>
              <p className="text-small mb-4">
                Your information may be transferred to and processed in
                countries other than your own. We ensure that such transfers
                comply with applicable data protection laws and include
                appropriate safeguards.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">
                11. Changes to This Privacy Policy
              </h2>
              <p className="text-small mb-4">
                We may update our Privacy Policy from time to time. Changes will
                be posted on this page with an updated "Last updated" date. If
                the changes are material, we will provide reasonable notice
                before they take effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">12. Contact Us</h2>
              <p className="text-small mb-4">
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-small">
                  Email: legal@inkaer.com
                  <br />
                  Phone: +1 (647) 696-3447
                  <br />
                  Address: 2967 Dundas St W, 546D, Toronto, Ontario M6P 1Z2,
                  Canada
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
