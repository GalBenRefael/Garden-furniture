import Footer from '../ui/Footer';

function Terms() {
  return (
    <>
      <div>
        <section className="bg-gray-50 py-16">
          <div className="max-w-screen-lg mx-auto px-6 bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-5xl font-extrabold text-center text-green-700 mb-12">
              Terms of Service
            </h1>

            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                1. Introduction
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Welcome to Royalau! These terms of service outline the rules and
                regulations for the use of Royalaus website and services. By
                accessing this website, we assume you accept these terms and
                conditions in full. Do not continue to use Royalaus website if
                you do not accept all of the terms and conditions stated on this
                page.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                2. Eligibility
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                By using this website, you represent and warrant that you are at
                least 18 years old or accessing the site under the supervision
                of a parent or legal guardian. Users are responsible for
                ensuring that their access to the site is compliant with all
                applicable laws and regulations.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                3. Account and Security
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                When you create an account with us, you must provide accurate
                and complete information. You are responsible for safeguarding
                your account and are liable for any activity under your account.
                If you suspect any unauthorized use of your account, please
                notify us immediately.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                4. Product Information
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                We strive to ensure that all product descriptions, images, and
                prices are accurate. However, we do not warrant that the content
                is error-free. In case of any discrepancies, we reserve the
                right to correct them without prior notice. Prices and
                availability of products are subject to change at our
                discretion.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                5. Orders and Payments
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                By placing an order, you agree to pay the full price of the
                product and any associated shipping fees. All payments must be
                made through our secure payment gateway. We reserve the right to
                cancel any order if there are issues with payment processing or
                product availability.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                6. Shipping and Delivery
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                We strive to ensure timely delivery of all orders. However,
                delivery times may vary depending on your location and external
                factors beyond our control. We are not liable for any delays or
                damages caused during the shipping process. Please refer to our
                Shipping Policy for more details.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                7. Returns and Refunds
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                If you are not satisfied with your purchase, you may return the
                product within 30 days of delivery, provided it is in its
                original condition. Refunds will be processed within 7-10
                business days after we receive the returned product. Please
                refer to our Return Policy for more details.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Royalau and its affiliates will not be liable for any indirect,
                incidental, or consequential damages arising from your use of
                our products or services. Our total liability is limited to the
                amount you paid for the product in question.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                9. Intellectual Property
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                All content on this website, including text, images, logos, and
                graphics, is the property of Royalau or its content suppliers
                and is protected by copyright laws. You may not use, reproduce,
                or distribute any content without our express written
                permission.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                10. Governing Law
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                These terms of service are governed by and construed in
                accordance with the laws of the United Kingdom. Any disputes
                arising from the use of our website or services will be subject
                to the exclusive jurisdiction of the courts in the UK.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                11. Changes to Terms
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                We reserve the right to update or modify these terms of service
                at any time without prior notice. By continuing to use our
                website after any changes, you agree to be bound by the revised
                terms.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                12. Contact Information
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                If you have any questions or concerns about these terms of
                service, please contact us at:
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

export default Terms;
