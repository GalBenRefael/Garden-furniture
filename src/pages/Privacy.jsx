import Footer from '../ui/Footer';

function Privacy() {
  return (
    <>
      <div>
        <section className="bg-gray-50 py-16">
          <div className="max-w-screen-lg mx-auto px-6 bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-5xl font-extrabold text-center text-green-700 mb-12">
              Privacy Policy
            </h1>

            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                1. Introduction
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                At Royalau, we are committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website and
                purchase our products. By using our services, you agree to the
                collection and use of information in accordance with this
                policy.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                2. Information We Collect
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                We collect various types of information, including:
              </p>
              <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed">
                <li>
                  <strong>Personal Information:</strong> This includes your
                  name, email address, phone number, shipping address, and
                  payment details.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you
                  interact with our website, including your IP address, browser
                  type, and pages visited.
                </li>
                <li>
                  <strong>Cookies:</strong> We use cookies to improve your
                  browsing experience and gather statistical data.
                </li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed">
                <li>Process and fulfill your orders.</li>
                <li>
                  Communicate with you regarding your orders and provide
                  customer support.
                </li>
                <li>Improve our website, products, and services.</li>
                <li>
                  Send you marketing communications, where you have opted in to
                  receive them.
                </li>
                <li>Comply with legal obligations and protect our rights.</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                4. How We Share Your Information
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                We do not sell your personal information to third parties.
                However, we may share your information with:
              </p>
              <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed">
                <li>
                  Service providers who assist us in operating our website and
                  processing orders (e.g., payment processors, shipping
                  companies).
                </li>
                <li>
                  Legal authorities if required by law or to protect our rights
                  and comply with legal obligations.
                </li>
                <li>
                  Third parties in the event of a business transfer, merger, or
                  acquisition.
                </li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                5. Data Security
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                We take data security seriously and implement appropriate
                technical and organizational measures to protect your personal
                information. However, no method of transmission over the
                internet is 100% secure, and we cannot guarantee absolute
                security.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                6. Your Rights
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed">
                <li>Access the personal information we hold about you.</li>
                <li>Request corrections to inaccurate or incomplete data.</li>
                <li>
                  Request the deletion of your personal data, subject to certain
                  exceptions.
                </li>
                <li>Opt out of receiving marketing communications.</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                7. Cookies and Tracking Technologies
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                We use cookies and similar tracking technologies to track the
                activity on our website and hold certain information. Cookies
                are files with a small amount of data that are sent to your
                browser from a website and stored on your device. You can
                instruct your browser to refuse all cookies or to indicate when
                a cookie is being sent. However, if you do not accept cookies,
                you may not be able to use some portions of our website.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                8. Third-Party Links
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites that are
                not operated by us. We have no control over, and assume no
                responsibility for, the content, privacy policies, or practices
                of any third-party websites.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                9. Changes to This Privacy Policy
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page. You are advised to review this Privacy Policy
                periodically for any changes.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                10. Contact Us
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:info@royalau.com"
                  className="text-green-600 hover:underline"
                >
                  info@royalau.com
                </a>
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                <strong>Phone:</strong>{' '}
                <a
                  href="tel:+441234567890"
                  className="text-green-600 hover:underline"
                >
                  +44 1234 567890
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Privacy;
